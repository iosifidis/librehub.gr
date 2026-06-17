# ============================================================
# Builder / Watcher container
# Installs deps, does initial build, then watches for changes
# in src/content/software/ and public/images/ (bind-mounted
# from the host) and re-runs `npm run build` automatically.
# ============================================================
FROM node:20-alpine

WORKDIR /app

# Install inotify-tools for lightweight file watching
RUN apk add --no-cache inotify-tools

# Copy package files and install deps
COPY package*.json ./
RUN npm ci --prefer-offline

# Copy the full source.
# The bind-mounts in docker-compose.yml will overlay:
#   - src/content/software/   (your .md files)
#   - public/images/           (logos)
# Everything else (components, layouts, styles) comes from this COPY.
COPY . .

# Copy the entrypoint script
COPY docker-watch.sh /docker-watch.sh
RUN chmod +x /docker-watch.sh

ENTRYPOINT ["/docker-watch.sh"]
