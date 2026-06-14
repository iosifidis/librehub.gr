---
title: "TimescaleDB (Time-Series on PostgreSQL)"
alternative_to: ["InfluxDB (pure time-series)", "Prometheus (for metrics)", "Kdb+ (commercial high-performance)"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Βάσεις Δεδομένων"]
website: "https://www.timescale.com/"
logo: "/images/placeholder.svg"
license: "Apache-2.0 (Community Edition), Commercial (Timescale Cloud, Enterprise)"
description: "Μια βάση δεδομένων χρονοσειρών (time-series) που χτίζεται πάνω στην PostgreSQL (ως extension). Συνδυάζει την πλήρη συναρτησιακότητα της PostgreSQL (SQL, ACID, joins, transactions) με βελτιστοποιήσεις για time-series (hypertables, continuous aggregates, data retention policies, compression). Ιδανική για εφαρμογές που χρειάζονται both relational και time-series δεδομένα."
featured: false
---

Το TimescaleDB είναι μια **extension** της PostgreSQL (όχι fork), που προσθέτει δυνατότητες time-series διατηρώντας πλήρη συμβατότητα με PostgreSQL. Αυτό σημαίνει ότι μπορείτε να χρησιμοποιήσετε όλες τις δυνατότητες της Postgres (π.χ. JOINs με άλλους πίνακες, complex SQL, FOREIGN KEYS) σε time-series data. Είναι η βάση επιλογής για όσους γνωρίζουν PostgreSQL και θέλουν να αποθηκεύουν μετρήσεις χωρίς να θυσιάζουν relational features.

**Βασικές Δυνατότητες (TimescaleDB-specific):**

- **Hypertables (Υπέρ-πίνακες):** Αφηρημένα partitions (shards) σε chunks (μικρά πίνακες ανά χρονική περίοδο). Η εισαγωγή/ερώτηση γίνεται σε hypertable (διαφανώς).
- **Continuous Aggregates (Υλικοποιημένες όψεις):** Αυτόματη προ-συγκέντρωση (π.χ. 5-λεπτα averages) που ενημερώνονται σταδιακά (incremental). Ιδανικό για dashboards.
- **Data Retention Policies:** Αυτόματη διαγραφή old chunks (π.χ. delete after 30 days).
- **Compression (Lossless):** Συμπίεση chunks με αλγόριθμο (δελτα, δυαδική, run-length), μειώνοντας αποθηκευτικό χώρο 10-20x.
- **Time-series SQL functions:** `time_bucket()`, `first()`, `last()`, `histogram()`.
- **Drop-chunks (automatic partitioning).**
- **Support for large cardinality (many tags)** – καλύτερα από InfluxDB.

**TimescaleDB vs InfluxDB (Key Differences):**

| Χαρακτηριστικό | TimescaleDB | InfluxDB |
|---|---|---|
| **Base technology** | PostgreSQL (extension) | Custom storage engine (TSM) |
| **SQL support** | ✅ (πλήρης SQL, joins, subqueries) | ⚠️ (InfluxQL, Flux – not full SQL) |
| **ACID (Transactions)** | ✅ (PostgreSQL transactions) | ⚠️ (υπάρχει αλλά όχι default) |
| **Data Compression** | ✅ (10x+) | ✅ (high compression) |
| **Continuous Aggregates** | ✅ (incremental) | ✅ (continuous queries) |
| **Joins with relational data** | ✅ (φυσικά) | ❌ (πρέπει να denormalize) |
| **Ease of use (for PostgreSQL users)** | ✅ (οικείο) | ❌ (νέα μοντέλα) |

**Πότε να επιλέξετε TimescaleDB:**

- **Έχετε ήδη PostgreSQL infrastructure** (θέλετε να επεκτείνετε για time-series).
- **Χρειάζεστε να κάνετε JOIN time-series data με relational tables** (π.χ. sensor readings JOIN device metadata table).
- **Θέλετε ACID properties για ingestion (π.χ. financial data).**
- **Προτιμάτε SQL (αντί για Flux/InfluxQL).**

> **Σημείωση:** Το TimescaleDB είναι η ιδανική λύση για time-series workloads σε PostgreSQL environments. Χρησιμοποιείται από εταιρείες όπως **Comcast, Rockwell Automation, Siemens, Yamaha**. Για pure time-series χωρίς relational requirements (π.χ. IoT metrics, monitoring) η InfluxDB μπορεί να είναι πιο γρήγορη (ειδικά σε single node), αλλά η TimescaleDB κερδίζει σε ευελιξία.
