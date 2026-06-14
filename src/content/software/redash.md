---
title: "Redash (Query & Visualization)"
alternative_to: ["Metabase (lightweight alternative)", "Looker (commercial)", "Tableau (enterprise)"]
categories: ["Ανάλυση Δεδομένων", "Εργαλεία", "Cloud"]
website: "https://github.com/getredash/redash"
logo: "/images/placeholder.svg"
license: "BSD-2-Clause"
description: "Εργαλείο ανοιχτού κώδικα για σύνδεση σε πηγές δεδομένων (40+), δημιουργία SQL ερωτημάτων, οπτικοποίηση αποτελεσμάτων (charts, pivot tables), και δημιουργία dashboards. Υποστηρίζει προγραμματισμένες αναφορές (scheduled refreshes), alerts, και embedding. Ιδανικό για data analysts που προτιμούν SQL αντί για no-code builders."
featured: false
---

Το Redash είναι παρόμοιο με το Metabase (BI), αλλά με έμφαση στη **SQL ως πρώτη γλώσσα**. Αντί να χρησιμοποιεί visual query builder (Metabase), στο Redash γράφετε SQL (ή NoSQL queries για MongoDB, κλπ.) και αποθηκεύετε τα queries. Μπορείτε να δημιουργήσετε παραμέτρους (dropdowns, date pickers), να προγραμματίσετε refresh (π.χ. κάθε ώρα), και να χτίσετε dashboards. Είναι η αγαπημένη επιλογή data analysts που γνωρίζουν SQL και θέλουν γρήγορη δημιουργία reports.

**Βασικές Δυνατότητες:**

- **Query Editor (SQL):** Autocomplete, query runner, parameterized queries (π.χ. `WHERE date = {{date}}`). Υποστήριξη multiple results (π.χ. έως 1000 σειρές).
- **Visualizations (20+):** Line, bar, area, pie, scatter, pivot table, counter, cohort, sankey, map (choropleth), sunburst, boxplot, και custom (chart.js based).
- **Dashboards (Drag & Drop):** Συνδυασμός queries, auto-refresh, dashboard-level filters (για παραμέτρους).
- **Alerts (Ειδοποιήσεις):** Ελέγχει περιοδικά ένα query value και στέλνει email/slack όταν ξεπεραστεί όριο.
- **Scheduled Refreshes (Caching):** Ανανέωση dataset (π.χ. κάθε 6 ώρες) για γρήγορα dashboards.
- **Data Sources (40+):** PostgreSQL, MySQL, SQL Server, Redshift, BigQuery, Snowflake, MongoDB, Elasticsearch, ClickHouse, Presto, Druid, Python (via script), CSV, κ.ά.
- **REST API:** Δημιουργία queries/dashboards programmatically.
- **Permissions (Groups):** Ομαδική διαχείριση πρόσβασης σε queries/dashboards/data sources.

**Redash vs Metabase (γρήγορη σύγκριση):**

| Χαρακτηριστικό | Redash | Metabase |
|---|---|---|
| **User Interface (for non-tech)** | ⚠️ (απαιτεί SQL) | ✅ (visual query builder) |
| **Parameterized queries (dropdowns)** | ✅ (πολύ ισχυρό) | ❌ (μόνο filters) |
| **Dashboard-level filters** | ✅ (με sync parameters) | ⚠️ (περιορισμένο) |
| **Alerts (value threshold)** | ✅ | ❌ |
| **Visualization library** | 20+ | 20+ |

> **Σημείωση:** Το Redash είναι ιδανικό για ομάδες data analysts που γνωρίζουν SQL και χρειάζονται γρήγορα dashboards με παραμέτρους (π.χ. "sales report με dropdown για επιλογή χώρας"). Δεν είναι κατάλληλο για μη-τεχνικούς χρήστες (χωρίς SQL). Σήμερα η ανάπτυξη του Redash έχει επιβραδυνθεί (αρχικό προϊόν αγοράστηκε από την Databricks, υπάρχει fork Redash CE). Για νέα projects, το **Metabase** (no-code) ή το **Superset** (πιο ισχυρό) συνιστώνται.
