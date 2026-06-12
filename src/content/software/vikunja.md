---
title: "Vikunja"
alternative_to: ["Todoist", "Asana", "Trello", "ClickUp"]
categories: ["Παραγωγικότητα", "Εργαλεία", "Cloud"]
website: "https://vikunja.io/"
logo: "/images/placeholder.svg"
license: "GPL-3.0"
description: "Ευέλικτη, self-hostable εφαρμογή διαχείρισης εργασιών (to-do), που επιτρέπει οργάνωση projects με λίστες, πίνακες Kanban, Gantt charts, ημερολόγια, και προβολή πίνακα (table view)."
featured: false
---

Το Vikunja είναι μια μοντέρνα, ελαφριά πλατφόρμα διαχείρισης εργασιών και projects, σχεδιασμένη για self-hosting. Σε αντίθεση με τα βαριά συστήματα (Jira, OpenProject), το Vikunja εστιάζει στην απλότητα και την ταχύτητα, προσφέροντας πολλαπλούς τρόπους οργάνωσης (λίστες, kanban, gantt, calendar, table). Αποτελεί εξαιρετική εναλλακτική του Todoist ή Asana για ομάδες που θέλουν έλεγχο δεδομένων.

**Προβολές (Views) για Εργασίες:**

- **Λίστα (List):** Κλασική λίστα εργασιών με checkboxes, ημερομηνίες, ετικέτες, προτεραιότητες.
- **Kanban Board:** Πίνακες με custom στήλες (π.χ. "Backlog", "In Progress", "Done"), με drag-and-drop.
- **Gantt View:** Διάγραμμα Gantt (μέσω integration με το gantt‑elixir), υποστήριξη εξαρτήσεων εργασιών.
- **Ημερολόγιο (Calendar):** Εμφάνιση εργασιών με ημερομηνίες λήξης/έναρξης σε εβδομαδιαία/μηνιαία βάση.
- **Πίνακας (Table):** Προβολή εργασιών ως πίνακα (spreadsheet-like) με προσαρμοσμένα πεδία (custom fields).

**Χαρακτηριστικά για Ομάδες:**

- **Projects & Subprojects:** Ιεραρχική οργάνωση projects (ένα project περιέχει άλλα).
- **Μερίδιο (Sharing):** Μοιραστείτε projects με άλλους χρήστες, με δικαιώματα (read, write, admin).
- **Assignees & Labels:** Ανάθεση εργασιών σε μέλη ομάδας, ετικέτες (tags), προτεραιότητες.
- **Attachments & Comments:** Επισύναψη αρχείων (εικόνες, PDFs), σχολιασμός εργασιών, @mentions.
- **Favorites & Filters:** Αγαπημένα projects, αποθηκευμένα φίλτρα (π.χ. "δικές μου εργασίες λήγουν σήμερα").
- **Import/Export:** Εισαγωγή από Todoist, Trello, Asana (CSV), εξαγωγή σε JSON, CSV, PDF.

**Τεχνικά Χαρακτηριστικά (Self-Hosting):**

- Γραμμένο σε Go (backend) + Vue.js (frontend).
- Ελαφρύ: τρέχει και σε Raspberry Pi ή μικρό VPS (256MB RAM).
- Εγκατάσταση μέσω Docker (εύκολο), ή binary, ή από source.
- Υποστηρίζει SQLite (default), PostgreSQL, MySQL.
- REST API (Swagger documented) και Webhook integration.

> **Σημείωση:** Το Vikunja διαθέτει επίσης επίσημες εφαρμογές για iOS, Android (από τα F-Droid/App Store), CLI client και integration με Nextcloud.

