---
title: "GLPI (Gestionnaire Libre de Parc Informatique)"
alternative_to: ["ServiceNow (ITSM)", "Freshservice (commercial)", "OTRS (commercial support)", "ManageEngine ServiceDesk"]
categories: ["Εργαλεία", "Helpdesk"]
website: "https://glpi-project.org/"
logo: "/images/placeholder.svg"
license: "GPL-3.0"
description: "Μια ολοκληρωμένη λύση ανοιχτού κώδικα για Διαχείριση Περιουσιακών Στοιχείων Πληροφορικής (IT Asset Management) και Helpdesk (ITIL Service Desk). Διαχειρίζεται inventory υπολογιστών, περιφερειακών, software licenses, συμβόλαια, incidents, requests, problems, changes, knowledge base, και reserves. Υποστηρίζει αυτόματο inventory μέσω FusionInventory/OCS Inventory, DCIM, και είναι επεκτάσιμο με plugins. Στα ακρωνύμια: GLPI (Gestionnaire Libre de Parc Informatique) ."
featured: true
---

Το GLPI είναι μια ώριμη (πρώτη έκδοση 2003) πλατφόρμα ITSM (IT Service Management) και ITAM, γραμμένη σε PHP. Χρησιμοποιείται ευρέως στον δημόσιο τομέα, σε μεγάλες επιχειρήσεις, και σε παρόχους υπηρεσιών διαχείρισης πληροφορικής.

**Βασικές Λειτουργίες:**

- **IT Asset Management (ITAM):**
    - **Inventory (Απογραφή):** Διαχειριστείτε υπολογιστές (Windows, Linux, macOS, κλπ.), servers, routers, switches, printers, smartphones, και κάθε άλλο στοιχείο hardware .
    - **Software Licensing (Διαχείριση αδειών λογισμικού):** Παρακολούθηση αδειών (Microsoft, Adobe, κλπ.), σύνδεση με inventory, ειδοποιήσεις για λήξη.
    - **Contracts & Financials (Συμβόλαια & Οικονομικά):** Διαχείριση εγγυήσεων, συμβολαίων συντήρησης, τιμολογίων αγοράς, αποσβέσεων (damping).
    - **DCIM (Data Center Infrastructure Management):** Διαχείριση racks, servers, PDUs, cable management .
- **ITIL Service Desk (Helpdesk):**
    - **Tickets (Incidents, Requests):** Διαχείριση αναφορών προβλημάτων (incidents) και αιτημάτων (service requests) με workflows, SLAs (Service Level Agreements), escalations, και matrix.
    - **Problems & Changes (ITIL):** Διαχείριση προβλημάτων (root cause analysis) και αιτημάτων αλλαγής (change management) με approvals.
    - **Knowledge Base (Βάση Γνώσης):** Άρθρα λύσεων, FAQs, συνδεδεμένα με tickets .
    - **Asset Reservations (Κρατήσεις):** Κράτηση δωματίων συνεδριάσεων, laptops, projectors.
- **Plugins (Ecosystem):** 200+ plugins: form creator, report generator, dashboard builder, OAuth2, LDAP sync, και integration με OCS Inventory/FusionInventory για αυτόματη απογραφή .

**Απαιτήσεις & Εκδόσεις:**

- **Backend:** PHP 7.4-8.1 (GLPI 10.0.x), MySQL/MariaDB (5.7+) ή PostgreSQL .
- **Web server:** Apache, Nginx, IIS .
- **Άδεια:** GPL-3.0. Δωρεάν self-hosted. Εμπορική υποστήριξη από συνεργάτες (Teclib', κλπ.).

> **Σημείωση:** Το GLPI είναι η κορυφαία open-source επιλογή για IT departments που χρειάζονται ταυτόχρονα **asset management και helpdesk**. Για pure helpdesk (χωρίς inventory), εναλλακτικές είναι τα **Zammad** (πιο σύγχρονο UI) ή **FreeScout** (ελαφρύτερο).
