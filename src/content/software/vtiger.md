---
title: "VTiger CRM"
alternative_to: ["Salesforce Sales Cloud", "HubSpot CRM (starter)", "Zoho CRM", "Pipedrive"]
categories: ["Παραγωγικότητα", "Γραφείο", "CRM", "Cloud"]
website: "https://www.vtiger.com/"
logo: "/images/placeholder.svg"
license: "Vtiger Public License (open source, based on SugarCRM 4.5x)"
description: "Πλήρες CRM ανοιχτού κώδικα για πωλήσεις, μάρκετινγκ και υποστήριξη πελατών, με δυνατότητα on-premise εγκατάστασης. Συνδυάζει features enterprise CRM με ευκολία χρήσης."
featured: false
---

Το VTiger CRM (πρώην "Vtiger Open Source") είναι ένα από τα δημοφιλέστερα open source CRM συστήματα, με περισσότερες από 3 εκατομμύρια λήψεις. Ξεκίνησε ως fork του SugarCRM 4.x και έκτοτε έχει εξελιχθεί σε αυτόνομη πλατφόρμα με δικό της ecosystem. Υπάρχουν δύο εκδόσεις: Vtiger Open Source (δωρεάν, self-hosted) και Vtiger Cloud (SaaS, επί πληρωμή).

**Core Modules (Sales, Marketing, Support):**

- **Sales (Πωλήσεις):**
    - Leads, Contacts, Accounts (εταιρείες), Opportunities (sales pipeline).
    - Quotes, Sales Orders, Invoices (βασικό invoicing).
    - Sales forecasting, territory management, sales targets.
- **Marketing (Μάρκετινγκ):**
    - Campaign management (target lists, email campaigns, tracking).
    - Email templates, mass mailing, open/click tracking.
    - Web-to-lead forms (generate leads from website).
- **Customer Support (Υποστήριξη):**
    - Tickets (case management), service contracts, solutions (knowledge base).
    - Customer portal (self-service).
    - Email-to-ticket (convert emails to tickets automatically).
- **Inventory (Βασικό):**
    - Products & Services catalog, price books, quotes/invoices, purchase orders (basic).
- **Workflow & Automation:**
    - Workflow rules (conditions + actions: email, task, update field).
    - Approval processes, task management, calendar events.

**Εκδόσεις:**

| Έκδοση | Hosting | Άδεια | Χαρακτηριστικά |
|---|---|---|---|
| **Vtiger Open Source (5.x)** | Self-hosted (LAMP) | Open source (VPL) | Full features (invoicing, reports, inventory). Κανένα υποστήριξη από Vtiger. |
| **Vtiger Cloud** | Vtiger SaaS | Εμπορική | Ίδια features + easy setup, mobile apps, 24/7 support, integrations (QuickBooks, Mailchimp). |

**Τεχνικά (Open Source):**

- Γλώσσα: PHP (backend), JavaScript (Smarty templates).
- Database: MySQL / MariaDB.
- Απαιτήσεις: Apache/Nginx, PHP 7.x, MySQL (2GB RAM προτείνεται).
- Documentation: Community wikis, forums (limited official support).

> **Σημείωση:** Το Vtiger Open Source είναι μια καλή επιλογή για μικρές επιχειρήσεις που θέλουν πλήρες CRM (sales + support + inventory) χωρίς κόστος αδειοδότησης, αλλά χρειάζονται τεχνικές γνώσεις για εγκατάσταση και συντήρηση. Για νέα projects, το **SuiteCRM** (πιο μοντέρνο) ή **ERPNext** (αν χρειάζεται full ERP) συχνά προτιμώνται.