---
title: "CiviCRM"
alternative_to: ["Salesforce Nonprofit Edition", "Blackbaud (eTapestry, Raiser's Edge)", "NeonCRM"]
categories: ["Παραγωγικότητα", "CRM"]
website: "https://civicrm.org/"
logo: "/images/civicrm.png"
license: "AGPL-3.0"
description: "Η κορυφαία ανοιχτού κώδικα πλατφόρμα CRM ειδικά σχεδιασμένη για μη κερδοσκοπικούς οργανισμούς, ΜΚΟ, και advocacy groups. Διαχειρίζεται επαφές, δωρεές, εκδηλώσεις, συνδρομές μέλη, email campaigns, και αξιολογήσεις."
featured: true
---

Το CiviCRM δεν είναι ένα γενικό CRM (όπως SuiteCRM ή Vtiger). Είναι εξειδικευμένο για τις ανάγκες μη κερδοσκοπικών οργανισμών: διαχείριση δωρητών (donors), συμμετεχόντων σε events, μελών, εθελοντών, και επικοινωνίας μαζί τους. Ενσωματώνεται ως plugin σε υπάρχον CMS: **WordPress, Drupal, Joomla** (backdrop). Χρησιμοποιείται από πάνω από 10.000 οργανισμούς παγκοσμίως, με >24 εκατομμύρια εγγραφές event participants και >116 εκατομμύρια δωρεές (processing).

**Core Features (Non-profit specific):**

- **Contact Management (Διαχείριση Επαφών):**
    - Αποθήκευση ατόμων, οργανισμών, νοικοκυριά (households).
    - Custom fields (π.χ. "interests", "communication preferences").
    - Relationship mapping (π.χ. John είναι μέλος της "Friends of the Park").
    - Duplicate detection & merging.
- **Donations Management (Διαχείριση Δωρεών):**
    - Δημιουργία campaigns (π.χ. "Save the Forest 2025").
    - Φόρμες δωρεών (online) με υποστήριξη recurring donations, tribute (in honor/memory), και Soft Credits (crediting multiple individuals).
    - Contribution tracking (credit card, PayPal, offline checks, bank transfer).
    - Tax receipts (customizable, PDF).
    - Pledge management (υποσχέσεις δωρεών).
- **Event Management (Εκδηλώσεις):**
    - Online registration forms (paid or free events).
    - Payment integration (PayPal, Stripe, Authorize.net, offline).
    - Discount codes, early-bird pricing, waitlists.
    - Participant tracking (check-in, attendance), name badges, certificates.
- **Membership Management (Συνδρομές μελών):**
    - Member types (annual, lifetime), fee structures.
    - Auto-renew reminders, member directories.
    - Integration with event discounts (members-only pricing).
- **Communications (Email Marketing):**
    - Email campaigns (drag-and-drop builder, templates).
    - Mailing lists based on smart groups (π.χ. "Donors who gave >100€ in last year").
    - Open/click tracking, bounce handling, unsubscribe management.
    - Integration with Mailchimp/Mandrill (through extension).
- **Reporting & Analytics:**
    - Dashboards for donations, memberships, events.
    - Custom reports (donor retention, lifetime value).
    - Export to CSV/Excel, PDF.

**Τεχνικά & Εγκατάσταση:**

- Εγκατάσταση ως plugin σε WordPress/Drupal/Joomla.
- Απαιτεί SQL database (MySQL, MariaDB) και PHP.
- Extensible via extensions (marketplace with 200+ free/paid extensions).
- API: REST, AJAX, JSON, XML.

> **Σημείωση:** Το CiviCRM είναι το **de facto standard CRM για μη κερδοσκοπικούς οργανισμούς** (NPOs) στον χώρο του open source. Είναι όμως πιο βαρύ από απλές λύσεις διαχείρισης επαφών. Απαιτεί εξοικείωση και συχνά μια μικρή ομάδα για διαχείριση. Για πολύ μικρές ΜΚΟ, το **SuiteCRM** (με custom fields) ή ακόμα και το **Dolibarr** (για invoicing) μπορεί να είναι απλούστερες λύσεις, αλλά το CiviCRM υπερέχει στα donor management & membership.
