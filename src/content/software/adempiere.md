---
title: "ADempiere"
alternative_to: ["SAP ERP (Small/Medium Business)", "Oracle E-Business Suite", "Compiere ERP"]
categories: ["Παραγωγικότητα", "Cloud", "ERP", "CRM" "SCM", "Γραφείο"]
website: "https://adempiere.io/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Ολοκληρωμένο σύστημα ERP, CRM και SCM ανοιχτού κώδικα (fork του Compiere), σχεδιασμένο για μεσαίες και μεγάλες επιχειρήσεις, με έμφαση στην επεκτασιμότητα, τις πολλαπλές οντότητες και το προηγμένο reporting."
featured: false
---

Το ADempiere (σημαίνει "ολοκλήρωση" ή "εκπλήρωση" στα ιταλικά) είναι ένα δημοφιλές ERP fork του Compiere, το οποίο δημιουργήθηκε το 2006 όταν η κοινότητα ζήτησε περισσότερη ανοιχτή διακυβέρνηση. Είναι μια πλήρης ERP λύση, γραμμένη σε Java, κατάλληλη για περίπλοκες επιχειρηματικές διαδικασίες (multinational, manufacturing, logistics).

**Core Functionality:**

- **ERP (Enterprise Resource Planning):**
    - **Financials (Λογιστικά):** General Ledger, AR/AP, Cash Management, Fixed Assets, Budgeting, Multicurrency, Multi-organization.
    - **Supply Chain (SCM):** Inventory, Replenishment, Internal Consumption, Physical Inventory, Drop-shipments.
    - **Manufacturing (Παραγωγή):** Bill of Materials (BOM), Work Orders, Routing, Material Requirements Planning (MRP), Costing.
    - **Sales & Purchasing:** Quotations, Orders, Shipments, Invoices, Pricing (Discounts, Promotions).
- **CRM:** Opportunity management, Contact management, Campaigns.
- **Project Management:** Projects, Tasks, Phase management, Budget control.
- **POS (Point of Sale):** Integrated POS module (web-based or client).

**Μοναδικά Χαρακτηριστικά:**

- **Model-View-Controller (MVC) 2-tier architecture:** Client (Java Swing) + Application Server (JBoss/WildFly) + Database (Oracle, PostgreSQL, MySQL).
- **ADempiere Kitchen:** Complete low-code customization platform (Dictionary-driven). Μπορείτε να προσθέσετε πίνακες, πεδία, reports, workflows, και windows χωρίς κώδικα.
- **Multi-tenant & Multi-organization:** Υποστηρίζει πολλές νομικές οντότητες (π.χ. παράρτημα στην Ελλάδα, στην Αγγλία) με ξεχωριστά βιβλία.
- **Reporting (JasperReports):** Ενσωματωμένο reporting engine, με δυνατότητα custom reports (SQL/iReport).

**Σύγκριση με Odoo/ERPNext:**

| Χαρακτηριστικό | ADempiere | Odoo (Community) | ERPNext |
|---|---|---|---|
| Γλώσσα | Java (Swing client) | Python | Python |
| Client | Desktop (Swing) + Web (ZK plugin) | Web (modern) | Web (modern) |
| Καμπύλη εκμάθησης | Απότομη (ERP expert) | Μεσαία | Μέτρια |
| Customization (no-code) | Dictionary & Kitchen (παραδοσιακό) | Studio (επί πληρωμή) | Frappe (low-code) |
| Ιδανικό για | Medium-Large Enterprises (10-500+ users) | SMBs (5-150 users) | SMBs (10-200 users) |

> **Σημείωση:** Το ADempiere είναι λιγότερο φιλικό για αρχάριους (το Swing client μοιάζει "παλιομοδίτικο"), αλλά είναι εξαιρετικά σταθερό και ισχυρό για βιομηχανίες με περίπλοκες διαδικασίες (manufacturing, logistics). Η κοινότητα είναι μικρότερη από Odoo, αλλά αφοσιωμένη. Για νέα projects, συχνά προτιμάται το Odoo (νεότερη τεχνολογία, web UI).
