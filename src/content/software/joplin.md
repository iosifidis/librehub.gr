---
title: "Joplin (Note Taking App)"
alternative_to: ["Evernote", "Microsoft OneNote", "Notion"]
categories: ["Σημειώσεις", "Παραγωγικότητα", "Cloud"]
website: "https://joplinapp.org/"
logo: "/images/placeholder.svg"
license: "MIT (core) / AGPL-3.0 (desktop)"
description: "Μια εφαρμογή για αποθήκευση και συγχρονισμό σημειώσεων, με ασφάλεια (end-to-end encryption) και υποστήριξη όλων των συσκευών (Windows, macOS, Linux, Android, iOS). Υποστηρίζει Markdown (με ενσωματωμένο editor), οργάνωση σημειώσεων σε notebooks, tags, attachments (εικόνες, PDF, αρχεία), backlinks (σύνδεση σημειώσεων), πίνακες, Kanban boards, και web clipper (αποθήκευση ιστοσελίδων). Ο συγχρονισμός γίνεται μέσω Nextcloud, Dropbox, OneDrive, WebDAV, ή Joplin Cloud (πληρωμή)."
featured: true
---

Το Joplin είναι η κορυφαία open-source εναλλακτική του Evernote, με έμφαση στην ιδιωτικότητα (encryption) και στη φορητότητα (αποθήκευση σε Markdown αρχεία).

**Βασικές Λειτουργίες:**

- **Σημειώσεις σε Markdown:** Τοπική επεξεργασία (editor) με preview. Υποστηρίζει πίνακες, λίστες (checklists), κώδικα (highlighting), μαθηματικά (KaTeX), Mermaid diagrams (σχεδίαση διαγραμμάτων).
- **Οργάνωση (Notebooks & Subnotebooks):** Ιεραρχική οργάνωση, ετικέτες (tags).
- **Attachments (συνημμένα):** Αποθήκευση εικόνων, PDF, αρχείων (Office, ZIP) – τα attachments εμφανίζονται ως σύνδεσμοι ή ενσωματώνονται.
- **To-Do (Λίστα εργασιών) με checkboxes, ημερομηνίες, ειδοποιήσεις.**
- **Backlinks (σύνδεση σημειώσεων):** Αυτόματη εμφάνιση ποιες άλλες σημειώσεις αναφέρονται στην τρέχουσα (bidirectional links).
- **Kanban (Plugins):** Διαχείριση projects (προσθήκη plugin).
- **Web Clipper (αποθήκευση ιστοσελίδων):** Από browser (Chrome, Firefox) αποθηκεύει σελίδα (simplified ή screenshot) ως σημείωση.
- **Συγχρονισμός (Synchronization):** End-to-end encryption (E2EE) για αποθήκευση. Συγχρονίζει μεταξύ συσκευών μέσω:
    - Joplin Cloud (επί πληρωμή, περιλαμβάνει συνεργασία)
    - Nextcloud / ownCloud (WebDAV)
    - Dropbox, OneDrive (WebDAV)
    - Filesystem (π.χ. Syncthing)
- **Εξαγωγή (Export):** Markdown, JSON, PDF, HTML, JEX (Joplin format).
- **Πλατφόρμες:** Windows, macOS, Linux (Desktop), Android, iOS.

**Joplin vs Evernote vs Obsidian:**

| Χαρακτηριστικό | Joplin | Evernote (Free) | Obsidian |
|---|---|---|---|
| **Markdown editor** | ✅ | ❌ (rich text) | ✅ |
| **End-to-End Encryption** | ✅ | ❌ | ❌ (local files) |
| **Web clipper** | ✅ (δωρεάν) | ✅ (περιορισμένος) | ❌ |
| **Backlinks (graph view)** | ⚠️ (βηματικά) | ❌ | ✅ (core) |
| **Plugin ecosystem** | ✅ (επέκταση) | ❌ | ✅ (τεράστιο) |
| **Cost** | Δωρεάν (self-sync) | Freemium | Δωρεάν (local) |

> **Σημείωση:** Ιδανικό για χρήστες που μεταναστεύουν από Evernote και θέλουν ασφαλή συγχρονισμό και attachments. Για προσωπική γνωσιακή βάση (PKM) με advanced backlinks και graph, το **Obsidian** (δεν είναι πλήρως open source) ή το **Logseq** (open source) είναι καλύτερα.
