---
title: "HomeBank"
alternative_to: ["Microsoft Money", "Quicken (basic features)", "GnuCash (lightweight alternative)"]
categories: ["Γραφείο", "Παραγωγικότητα"]
website: "https://www.gethomebank.org/en/index.php"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Ελαφρύ, διαισθητικό λογισμικό προσωπικής οικονομικής διαχείρισης (personal finance) για desktop, με εστίαση σε λογαριασμούς τραπέζης, προϋπολογισμούς, αναφορές, και εισαγωγή από QIF/OFX/CSV."
featured: false
---

Το HomeBank είναι ένα δημοφιλές εργαλείο για οικιακή (ή μικρής επιχείρησης) διαχείριση οικονομικών, σχεδιασμένο για απλότητα και ταχύτητα. Λειτουργεί σε Windows, macOS, Linux, και προσφέρει όλες τις βασικές λειτουργίες ενός προσωπικού λογισμικού budget χωρίς φουσκώματα.

**Βασικές Δυνατότητες:**

- **Διαχείριση Λογαριασμών:** Λογαριασμοί όψεως, ταμιευτηρίου, πιστωτικές κάρτες, μετρητά, επενδύσεις (αποτίμηση). Υποστήριξη πολλαπλών νομισμάτων.
- **Εισαγωγή Συναλλαγών (Import):** Από QIF (Quicken), OFX (Open Financial Exchange), CSV (προσαρμόσιμο), και από Excel (copy-paste). Υποστήριξη κατηγοριοποίησης με κανόνες (automatic assignment).
- **Budgeting (Προϋπολογισμοί):** Μηνιαίοι προϋπολογισμοί ανά κατηγορία (π.χ. "Ψώνια", "Ενοίκιο", "Διασκέδαση"), με οπτική σύγκριση έναντι πραγματικών δαπανών.
- **Dashboard & Αναφορές:**
    - **Εξοδα ανά Κατηγορία (Pie chart, Bar chart).**
    - **Cash Flow (Εισροές/Εκροές) ανά μήνα.**
    - **Time Reports (Line chart) για παρακολούθηση δαπανών σε βάθος χρόνου.**
    - **Vehicle Cost (tracking expenses per vehicle).**
- **Προγραμματισμός (Scheduled Transactions):** Προγραμματισμένες συναλλαγές (π.χ. μηνιαία πληρωμή λογαριασμού).
- **Fine-grained Search & Filters:** Αναζήτηση συναλλαγών (περιγραφή, ημερομηνία, ποσό).

**Τεχνικά Χαρακτηριστικά:**

- Γραμμένο σε C (GTK+ toolkit) — εξαιρετικά γρήγορο, χαμηλή κατανάλωση μνήμης.
- Δεν απαιτεί database server (χρησιμοποιεί SQLite) — φορητό (portable version available).
- Διαθέτει online banking import (για λίγες τράπεζες μέσω aqbanking) — αλλά συνήθως προτιμάται manual import.

> **Σημείωση:** Το HomeBank είναι ιδανικό για freelancers, νοικοκυριά, ή πολύ μικρές επιχειρήσεις (π.χ. solo) που θέλουν να παρακολουθούν εισόδημα/έξοδα χωρίς πολυπλοκότητα. Δεν είναι λύση για full accounting (δεν έχει διπλογραφικά, invoicing, payroll). Για διπλογραφικά → GnuCash.
