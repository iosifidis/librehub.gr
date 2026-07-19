---
title: "Dokku"
alternative_to: ["Heroku (PaaS)", "CapRover", "Fly.io", "Render (self-hosted alternative)"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία"]
website: "https://dokku.com/"
logo: "/images/dokku.png"
license: "MIT"
description: "Μικρή, ανοιχτού κώδικα πλατφόρμα PaaS (Platform as a Service) που λειτουργεί πάνω από Docker. Επιτρέπει την ανάπτυξη εφαρμογών με `git push` (όπως στο Heroku), υποστηρίζοντας αυτόματο buildpack detection (Python, Node.js, Ruby, Go, PHP, Java, κ.ά.), zero-downtime deployments, SSL, και postgres/redis/mongo add-ons."
featured: false
---

Το Dokku είναι μια **minimal PaaS** υλοποίηση σε περίπου 1000 γραμμές bash, που σας επιτρέπει να κάνετε deploy εφαρμογών στον δικό σας server με τον ίδιο τρόπο που κάνατε στο Heroku: `git push dokku master`. Είναι εξαιρετικά ελαφρύ, τρέχει ακόμα και σε $5 VPS (DigitalOcean), και χρησιμοποιεί Docker containers + buildpacks (από Heroku) για να χτίσει την εφαρμογή χωρίς να χρειάζεται Dockerfile.

**Βασικές Λειτουργίες (Heroku-like):**

- **Git-based Deployment:** `git remote add dokku dokku@your-server:app-name` και μετά `git push dokku main`. Το Dokku ανιχνεύει αυτόματα την γλώσσα (buildpack) και κάνει deploy.
- **Zero-downtime Deployments (με proxy)**: Χρησιμοποιεί nginx (ή HAProxy) για να κάνει blue-green deployments.
- **SSL (HTTPS) αυτόματα (Let's Encrypt):** `dokku letsencrypt:enable app-name`.
- **Environment Variables:** `dokku config:set app-name KEY=value`.
- **Add-ons (Databases & Services):** Μέσω plugins (postgres, mysql, redis, mongodb, memcached, elasticsearch). Παράδειγμα: `dokku postgres:create mydb` και `dokku postgres:link mydb app-name`.
- **Scaling:** Υποστηρίζει process types (web, worker, clock) στο `Procfile` (πρότυπο Heroku) και μπορεί να scale `dokku ps:scale app-name web=2 worker=1`.
- **Dockerfile support:** Αν θέλετε, μπορείτε να παρέχετε δικό σας Dockerfile, αντί για buildpack.

**Πλεονεκτήματα & Περιορισμοί:**

| Πλεονέκτημα | Περιορισμός |
|---|---|
| Εξαιρετικά ελαφρύ (τρέχει σε 512MB RAM VPS) | Μονο-κόμβο (single server) – δεν έχει built-in clustering |
| Απλό deployment (`git push`) | Δεν έχει autoscaling |
| Ενεργή κοινότητα, 100+ plugins | Δεν έχει Web UI (μόνο CLI) |
| Δωρεάν & Open Source | Απαιτεί βασικές γνώσεις Linux/SSH |

**Πότε να χρησιμοποιήσετε Dokku:**

- **Freelancers & μικρές ομάδες** – θέλετε να κάνετε deploy 5-10 εφαρμογές σε έναν VPS, χωρίς πολυπλοκότητα Kubernetes.
- **Startups** – θέλετε Heroku-like εμπειρία αλλά με μικρότερο κόστος (π.χ. DigitalOcean $10/mo αντί $50/mo Heroku).
- **Prototypes & staging environments** – γρήγορο deployment για δοκιμές.

> **Σημείωση:** Το Dokku δεν είναι κατάλληλο για high availability (αν ο server πέσει, χάθηκαν όλες οι εφαρμογές). Για production HA, χρησιμοποιήστε Kubernetes ή managed PaaS (Render, Fly.io). Για αυτο-φιλοξενούμενο PaaS με web UI, δείτε το **CapRover** (επόμενο).
