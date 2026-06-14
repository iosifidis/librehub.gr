---
title: "Metabase"
alternative_to: ["Tableau (commercial)", "Microsoft Power BI (commercial)", "Looker (commercial, now Google)"]
categories: ["Ανάλυση Δεδομένων", "Εργαλεία", "Παραγωγικότητα"]
website: "https://www.metabase.com"
logo: "/images/placeholder.svg"
license: "AGPL-3.0"
description: "Εξαιρετικά εύχρηστη, open-source πλατφόρμα Business Intelligence (BI) και οπτικοποίησης δεδομένων. Επιτρέπει σε μη-τεχνικούς χρήστες (αναλυτές, managers) να δημιουργούν ερωτήματα (queries), dashboards, και να εξερευνούν δεδομένα μέσω visual query builder ή natural language (AI). Υποστηρίζει 20+ βάσεις δεδομένων (PostgreSQL, MySQL, MongoDB, Snowflake, κ.ά.)."
featured: true
---

Το Metabase είναι η πιο δημοφιλής open-source εναλλακτική των Tableau/Power BI, εστιάζοντας στην απλότητα χρήσης (self-serve analytics). Μπορείτε να το εγκαταστήσετε σε 5 λεπτά (Docker) και να αρχίσετε να κάνετε ερωτήσεις χωρίς να γράφετε SQL (αν και υποστηρίζει και raw SQL). Χρησιμοποιείται από 90.000+ εταιρείες (π.χ. GitLab, Reddit, Cloudflare, Docker).

**Βασικές Λειτουργίες:**

- **Visual Query Builder (no-code):** Επιλέξτε πίνακες, φίλτρα, aggregates (sum, count, average), group by, sorting, χωρίς SQL.
- **Natural Language (Metabot AI):** Κάντε ερωτήσεις στα Αγγλικά (π.χ. "show me total sales by product category last month") – προαιρετικό (BYO LLM).
- **Dashboards & Interactive Charts:** Line, bar, pie, map, gauge, scatter, funnel, pivot table, number, progress bar, plus custom (with plugins).
- **Filters & Drill-down:** Οι χρήστες μπορούν να εξερευνήσουν (drill-down) από ένα dashboard σε λεπτομέρειες.
- **Subscriptions & Alerts:** Αυτόματη αποστολή αναφορών μέσω email/Slack (π.χ. "daily sales report").
- **Permissions (Row/Column level):** Διαχείριση δικαιωμάτων ανά ομάδα χρηστών (π.χ. μόνο δεδομένα Ελλάδας για το τμήμα Sales GR).
- **Embedding (ενσωμάτωση):** Ενσωματώστε dashboards σε web εφαρμογές (iframe ή React SDK) – white-labeling (προαιρετικό).
- **Data modeling:** Δημιουργία custom metrics, segments, table metadata (friendly column names).
- **Database Support (20+):** PostgreSQL, MySQL, SQL Server, Oracle, MongoDB, Snowflake, BigQuery, Redshift, ClickHouse, Druid, κ.ά.

**Metabase vs Tableau (key differences):**

| Χαρακτηριστικό | Metabase (Open Source) | Tableau (Commercial) |
|---|---|---|
| **Ευκολία χρήσης (non-technical)** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Visual query builder (drag & drop)** | ✅ (εξαιρετικό) | ✅ (ισχυρό) |
| **Complex calculations (LOD, table calcs)** | ❌ (περιορισμένο) | ✅ (προηγμένο) |
| **Dashboard interactivity (actions)** | ✅ (βασική) | ✅ (advanced) |
| **Κόστος** | Δωρεάν (self-hosted) | $70/μήνα (Creator) |

> **Σημείωση:** Το Metabase είναι ιδανικό για μικρές/μεσαίες επιχειρήσεις (SMBs) και startups που χρειάζονται γρήγορη, self-service BI χωρίς προϋπολογισμό για Tableau/Power BI. Για προηγμένες αναλύσεις (forecasting, clusters, complex calculated fields), προτιμήστε **Apache Superset** (πιο ισχυρό, αλλά μεγαλύτερη καμπύλη μάθησης).
