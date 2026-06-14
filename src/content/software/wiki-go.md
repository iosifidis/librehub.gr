---
title: "Wiki-Go (Simple Knowledge Management)"
alternative_to: ["Notion", "Obsidian", "TiddlyWiki", "DokuWiki"]
categories: ["Εκπαίδευση", "Wiki", "Τεκμηρίωση"]
website: "https://github.com/leomoon-studios/wiki-go"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Ένα απλό, γρήγορο σύστημα διαχείρισης γνώσης (wiki) για τη δημιουργία εκπαιδευτικών wikis, σημειώσεων, μαθημάτων, και οργάνωση περιεχομένου. Γραμμένο σε Go, παραμένει ελαφρύ (single binary) και δεν απαιτεί database (χρησιμοποιεί αρχεία markdown). Υποστηρίζει αναζήτηση (full text), tags, users, ACL (access control), και dark mode."
featured: false
---

Το Wiki-Go είναι μια εναλλακτική λύση για μικρές εγκαταστάσεις wiki (προσωπική ή ομάδας), όπου η ευκολία deployment είναι σημαντική.

**Βασικές Λειτουργίες:**

- **Single binary (Go):** Δεν χρειάζεται PHP, Python, Node.js, ή database (όπως SQLite). Το εκτελέσιμο τρέχει απευθείας (Linux, Windows, macOS).
- **Flat file storage (Markdown):** Κάθε σελίδα wiki είναι ένα .md αρχείο. Μπορείτε να επεξεργαστείτε σε οποιοδήποτε text editor.
- **Full text search (BLEVE):** Ενσωματωμένος search engine χωρίς Elasticsearch.
- **Tags & Categories (από frontmatter YAML).**
- **ACL (Access Control):** Λίστες ελέγχου πρόσβασης (read, write, admin) ανά χρήστη/ομάδα.
- **Dark mode, responsive design (σύγχρονο UI).**
- **Docker image (προαιρετικά).**
- **Χαρακτηριστικά ασφαλείας:** CSRF protection, password hashing (bcrypt), rate limiting.

> **Σημείωση:** Ιδανικό για self-hosted wiki σε Raspberry Pi, μικρό VPS, ή για απλά γνωσιακά συστήματα χωρίς database admin. Για μεγαλύτερες ανάγκες (versioning, πολλούς χρήστες, extensions), προτιμήστε **MediaWiki** ή **DokuWiki**.
