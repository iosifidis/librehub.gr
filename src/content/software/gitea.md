---
title: "Gitea (Git with a cup of tea)"
alternative_to: ["GitHub Enterprise (proprietary)", "GitLab (self-hosted, heavier)", "Bitbucket Data Center"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία"]
website: "https://about.gitea.com/"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Ελαφριά, εύκολη στην εγκατάσταση (binary package) υπηρεσία φιλοξενίας κώδικα Git, με web UI, issue tracking, pull requests, wiki, και CI/CD integration (Gitea Actions). Ιδανική για μικρές ομάδες, on-premise εγκατάσταση, και low-resource περιβάλλοντα (π.χ. Raspberry Pi)."
featured: true
---

Το Gitea είναι ένα fork του Gogs (Go Git Service) που αποσκοπεί στην παροχή μιας ελαφριάς, self-hosted εναλλακτικής του GitHub/GitLab. Είναι γραμμένο σε Go (single binary), άρα τρέχει ακόμα και σε Raspberry Pi με <1GB RAM. Περιλαμβάνει όλες τις βασικές λειτουργίες για διαχείριση Git repositories (code hosting) και ομαδική συνεργασία. Αποτελεί την πιο δημοφιλή λύση για μικρές εταιρείες που θέλουν on-premise Git hosting.

**Βασικές Λειτουργίες (Core Features):**

- **Git Repository hosting:** Δημόσια ή ιδιωτικά repos, protect branches, tags, releases, clone over HTTP/SSH.
- **Collaboration:** Pull requests (with diff, comments, approval workflows), issue tracking (labels, milestones, assignees), wiki (per repository).
- **Code review:** Inline comments, change suggestions, review states.
- **User & Organization management:** Teams, permissions (read, write, admin), LDAP/Active Directory integration, 2FA.
- **CI/CD (Gitea Actions):** Built-in CI/CD engine (συμβατό με GitHub Actions YAML) – χρειάζεται runner (Gitea Action Runner). Μπορείτε να αυτοματοποιήσετε builds, tests, deployments.
- **Webhooks:** Integration με Jenkins, Drone, Discord, Slack, etc.
- **API (REST):** Swagger documented, χρήσιμο για αυτοματισμούς.
- **Lightweight & Fast:** Εγκατάσταση σε <5 λεπτά (binary), χαμηλή κατανάλωση (~100 MB RAM, 1 CPU). Τρέχει σε $4 VPS.

**Σύγκριση (Self-hosted Git Servers):**

| Feature | Gitea | GitLab CE (Community) | Forgejo (fork) |
|---|---|---|---|
| **RAM usage** | ~100-200 MB | ~4-6 GB | ~200-300 MB |
| **CI/CD** | Gitea Actions (built-in) | GitLab CI (built-in) | Forgejo Actions (compatible) |
| **Ευκολία εγκατάστασης** | ⭐⭐⭐⭐⭐ | ⭐⭐ (πολύπλοκη) | ⭐⭐⭐⭐ |
| **Plugins** | Ελάχιστα (webhooks) | Πολλά (integrations) | Παρόμοια με Gitea |

> **Σημείωση:** Το Gitea χρησιμοποιείται από χιλιάδες οργανισμούς, συμπεριλαμβανομένων των εταιρειών που χρειάζονται private Git hosting αλλά δεν έχουν resources για GitLab. Για μεγαλύτερη ελευθερία και federation (ActivityPub), δείτε το **Forgejo** (fork που δίνει έμφαση στην αποκέντρωση).
