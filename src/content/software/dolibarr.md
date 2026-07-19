---
title: "Dolibarr"
alternative_to: ["SAP Business One", "Odoo (lightweight alternative)", "QuickBooks (for SMBs)"]
categories: ["Παραγωγικότητα", "Γραφείο", "ERP", "CRM", "Cloud"]
website: "https://www.dolibarr.org/"
logo: "/images/dolibarr.png"
license: "GPL-3.0"
description: "Ελαφρύ, modular ERP & CRM ανοιχτού κώδικα για μικρές και μεσαίες επιχειρήσεις, freelancers, και μη κερδοσκοπικούς οργανισμούς. Διακρίνεται για την εξαιρετικά απλή εγκατάσταση (απαιτεί μόνο PHP + MySQL) και το εύχρηστο interface."
featured: false
---

Το Dolibarr είναι ένα σύγχρονο, modular ERP/CRM που ξεχωρίζει για τη μικροσκοπική του επιφάνεια (footprint) και την ευκολία εγκατάστασης. Σε αντίθεση με πολλά ERP (Odoo, ERPNext), το Dolibarr μπορεί να τρέξει ακόμα και σε shared hosting (χωρίς shell access) και δεν απαιτεί πολύπλοκες εξαρτήσεις. Ιδανικό για ΜΜΕ που θέλουν να ξεκινήσουν γρήγορα.

**Modular Design (50+ modules):**
Ενεργοποιείτε μόνο ό,τι χρειάζεστε:

- **CRM (Πωλήσεις):** Third parties (companies/contacts), leads, opportunities, proposals (quotes), contracts.
- **ERP (Λογιστικά & Διαχείριση):**
    - **Orders (Sales/Purchase):** Customer orders, supplier orders.
    - **Invoicing:** Customer invoices, credit notes, supplier invoices (basic).
    - **Inventory (Stocks):** Stock management (απλή αποθήκη), product catalog, barcode.
    - **Accounting:** Γενική λογιστική (general ledger), double-entry, chart of accounts, VAT reports, bank reconciliation.
    - **Projects:** Project management, tasks, time tracking, billing by project.
- **HR (Human Resources):** Employee records, leave requests, expense reports, recruitment (basic).
- **Marketing:** Email campaigns, mailing lists (subscribe/unsubscribe), surveys.
- **Foundation Module (for NGOs):** Members management, contributions, membership cards.
- **Point of Sale (POS):** Απλή λύση για retail (web-based).

**Τεχνικά Πλεονεκτήματα:**

- **Απαιτήσεις:** PHP 7.4+, MySQL/PostgreSQL. Λειτουργεί και σε $5/month hosting (εξαιρετικά οικονομικό).
- **Easy Install:** Upload files, run installer, create database — έτοιμο σε 10 λεπτά.
- **Multi-language:** 60+ γλώσσες (συμπεριλαμβανομένων Ελληνικών).
- **API:** REST API (since v9) for integrations.
- **Mobile app:** Επίσημη εφαρμογή για iOS/Android (βασικές λειτουργίες).

**Σύγκριση με Odoo/ERPNext:**

| Χαρακτηριστικό | Dolibarr | Odoo (CE) | ERPNext |
|---|---|---|---|
| Εγκατάσταση | Πάρα πολύ εύκολη (shared hosting) | Μέτρια (requires Python) | Μέτρια (requires Python/Node) |
| RAM χρήση | ~100-200 MB | ~1-2 GB | ~1-2 GB |
| UI | Απλό, λειτουργικό (bootstrap) | Μοντέρνο (OWL) | Μοντέρνο (Frappe) |
| Accounting | Διπλογραφικό (πλήρες) | Ναι (community περιορισμένο) | Ναι (πλήρες) |
| Manufacturing | Όχι (basic BOM) | Ναι (modules) | Ναι (full) |

> **Σημείωση:** Το Dolibarr είναι ιδανικό για **SMBs, freelancers, associations, retail** που χρειάζονται CRM + invoicing + inventory + accounting, αλλά **δεν** απαιτούν προηγμένη παραγωγή ή πολύπλοκο supply chain. Είναι η πιο εύκολη είσοδος στον κόσμο των open source ERP.
