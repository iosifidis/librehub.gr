#!/bin/sh
# ============================================================
# docker-watch.sh
# Runs inside the builder container.
# 1. Initial build on startup.
# 2. Watches src/content/software/ and public/images/ for any
#    file creation, modification, or deletion and rebuilds.
# ============================================================
set -e

WATCH_DIRS="src/content/software public/images"

echo "=============================================="
echo "  Astro Builder — initial build starting..."
echo "=============================================="
npm run build
echo "  ✓ Initial build complete."
echo "=============================================="

echo "  Watching for changes in: $WATCH_DIRS"
echo "  (Add/edit .md files or images on the host"
echo "   and the site will rebuild automatically)"
echo "=============================================="

# inotifywait loop — triggers on any close_write, create, delete, move
while true; do
    inotifywait \
        --recursive \
        --event close_write,create,delete,moved_to,moved_from \
        --format '%T %w%f %e' \
        --timefmt '%H:%M:%S' \
        $WATCH_DIRS 2>/dev/null

    echo ""
    echo "  ↻  Change detected — rebuilding..."
    # Small delay so that multiple quick saves are batched together
    sleep 1
    npm run build && echo "  ✓ Rebuild complete." || echo "  ✗ Build failed — check logs above."
    echo "=============================================="
done
