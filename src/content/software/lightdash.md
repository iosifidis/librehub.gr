---
title: "Lightdash (dbt-native BI)"
alternative_to: ["Looker (Google, commercial)", "Metabase (dbt optional)", "Superset (no dbt integration)"]
categories: ["Ανάλυση Δεδομένων", "Εργαλεία", "Cloud"]
website: "https://www.lightdash.com/"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Σύγχρονη, open-source πλατφόρμα Business Intelligence (BI) σχεδιασμένη για να λειτουργεί απευθείας πάνω από το **dbt (data build tool)**. Αντί να χρειάζεται ξεχωριστό semantic layer, το Lightdash διαβάζει τα dbt models, metrics, descriptions, και tests, δημιουργώντας αυτόματα ένα API για εξερεύνηση δεδομένων (no-code). Ιδανικό για data teams που ήδη χρησιμοποιούν dbt (ELT) και θέλουν το «Looker»."
featured: false
---

Το Lightdash (προφέρεται "light-dash") είναι μια νέα γενιά BI tool (πρώτη stable το 2023) που αξιοποιεί το dbt (το πιο δημοφιλές εργαλείο μετασχηματισμού δεδομένων στην ELT stack). Αντί να ορίζετε metrics μέσα στο BI (όπως σε Tableau/Metabase), τα ορίζετε στο dbt (YAML) – το Lightdash το διαβάζει αυτόματα, παρέχοντας:

- **Αυτόματη δημιουργία Explore interface** (no-code drag & drop) βασισμένη στις σχέσεις dbt (joins).
- **Metric catalog** (reusable metrics, π.χ. `total_revenue`).
- **Lineage (από το dbt).**
- **SQL Runner (για ερωτήματα) με autocomplete από dbt models.**

**Βασικές Λειτουργίες:**

- **dbt Integration:** Συνδέεται με dbt Cloud ή dbt Core (project). Διαβάζει `manifest.json` και `catalog.json`.
- **Explore (Visual Query Builder):** Drag & drop dimensions (π.χ. `country`) και metrics (π.χ. `sum(sales)`) – δημιουργεί SQL query (με joins) εγγενώς.
- **Dashboards:** Interactive filters, drill-through, scheduled refreshes.
- **Semantic Layer (metrics & dimensions):** Ορίζονται στο dbt YAML (ενιαία πηγή αλήθειας). Υποστήριξη custom SQL metrics (με window functions, κλπ).
- **Permissions (Row-level, via dbt tags).**
- **SQL IDE (Lightdash SQL Runner).**
- **API (REST & GraphQL).**

**Lightdash vs Looker (Google Cloud, commercial):**

| Χαρακτηριστικό | Lightdash | Looker |
|---|---|---|
| **Semantic layer definition** | dbt YAML | LookML (Looker proprietary) |
| **dbt native** | ✅ (first-class) | ⚠️ (integration μέσω 3rd party) |
| **Open source** | ✅ (MIT) | ❌ |
| **Αυτόματη lineage (γράφημα)** | ✅ (dbt docs) | ✅ |
| **Embedding (iframe)** | ✅ (beta) | ✅ |

**Περιπτώσεις Χρήσης:**

- Data teams που ήδη χρησιμοποιούν **dbt** (ELT) και θέλουν ένα lightweight BI εργαλείο που μοιράζεται το ίδιο semantic layer.
- Μετάβαση από **Looker** (λόγω κόστους) σε open source, διατηρώντας παρόμοια λειτουργικότητα.
- Projects όπου χρειάζεται **version control** για όλες τις μετατροπές (metrics, models, dashboards) – αποθηκεύονται στο dbt repo (git).

> **Σημείωση:** Το Lightdash είναι ακόμα νέο (not as mature as Metabase), αλλά εξελίσσεται γρήγορα. Για ομάδες που δεν χρησιμοποιούν dbt, είναι προτιμότερο το **Metabase** ή **Superset**.
