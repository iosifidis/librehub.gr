---
title: "QuestDB (High-Performance Time-Series)"
alternative_to: ["InfluxDB (performance focused)", "ClickHouse (analytics)", "Kdb+ (commercial, low-latency)"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Βάσεις Δεδομένων"]
website: "https://questdb.io/"
logo: "/images/placeholder.svg"
license: "Apache-2.0"
description: "Υπερ-γρήγορη (high-performance) βάση δεδομένων χρονοσειρών (time-series) γραμμένη σε Java και C++ (μηδενικές garbage collection pauses). Χρησιμοποιεί columnar storage, SIMD instructions (vectorized execution), και υποστήριξη SQL (PostgreSQL wire protocol) για ingestion και queries. Ιδανική για real-time analytics, market data (tick data), IoT sensor data, και application monitoring, όπου απαιτείται sub-second latency σε μεγάλους όγκους."
featured: false
---

Το QuestDB είναι μια σχετικά νέα time-series database (ξεκίνησε το 2018) που εστιάζει στην **απόλυτη απόδοση** (throughput και latency). Συχνά συγκρίνεται με ClickHouse, αλλά QuestDB είναι βελτιστοποιημένο για append-only time-series και υποστηρίζει native SQL (με extensions για time-series). Είναι γραμμένο για να μην έχει συλλογή σκουπιδιών (GC) σε Java (χρησιμοποιεί off-heap memory και C++ για πυρήνα). Χρησιμοποιείται από fintech (market data), ad tech, IoT, και real-time dashboards.

**Βασικά Χαρακτηριστικά (Performance-oriented):**

- **Columnar Storage (πίνακες σε στήλες):** Μειώνει I/O για queries που αφορούν λίγες στήλες.
- **SIMD (Single Instruction Multiple Data) vectorized execution:** Χρησιμοποιεί vectorized CPU instructions (AVX2) για γρήγορες aggregations (SUM, COUNT, AVG).
- **SQL with time-series extensions (SAMPLE BY, LATEST BY, WHERE timestamp BETWEEN...).** Πλήρης συμβατότητα με PostgreSQL wire protocol (μπορείτε να συνδεθείτε με psql, JDBC, etc.).
- **High ingestion rate (millions of rows/sec):** In-memory (ILP over TCP), με αυτόματο commit σε disk.
- **Low latency queries (milliseconds) σε δισεκατομμύρια σειρές.**
- **Out-of-order data handling (αποδοχή δεδομένων εκτός χρονολογικής σειράς).**
- **Partitioning (by time, π.χ. DAY, MONTH) για εύκολη διαγραφή (DROP PARTITION).**
- **Web Console (built-in) με visualization (charting, SQL editor).**

**QuestDB vs InfluxDB vs TimescaleDB (Performance):**

| Χαρακτηριστικό | QuestDB | InfluxDB (OSS) | TimescaleDB |
|---|---|---|---|
| **Ingestion (rows/sec)** | 10M+ (single node) | 1-2M | ~500K (PostgreSQL overhead) |
| **Query latency (1B rows)** | < 50ms | 100-300ms | 200-500ms |
| **SQL support** | ✅ (full SQL) | ❌ (InfluxQL/Flux) | ✅ (PostgreSQL) |
| **Columnar storage** | ✅ | ❌ (TSM) | ❌ (row-based, but chunks) |
| **SIMD vectorization** | ✅ | ❌ | ❌ |
| **PostgreSQL wire compatibility** | ✅ | ❌ | ✅ |
| **Clustering (horizontal)** | ❌ (work in progress) | ❌ (Enterprise) | ❌ (Community single node) |

**QuestDB vs ClickHouse (time-series analytics):**

| Χαρακτηριστικό | QuestDB | ClickHouse |
|---|---|---|
| **Primary use** | Time-series + real-time analytics | OLAP (analytics on any data) |
| **Insert throughput** | Extremely high (10M+/sec) | Very high (millions/sec) |
| **Query latency (fresh data)** | Υποδευτερόλεπτο | Λίγα δευτερόλεπτα |
| **Deletes & Updates** | Append-only (δεδομένα ενημερώνονται δύσκολα) | Επίσης append-oriented |
| **Ease of use** | Εύκολο (SQL, less config) | Πιο περίπλοκο (cluster setup) |
| **Mutability (schema)** | Schema on write (SQL) | Schema on write |

> **Σημείωση:** Το QuestDB επιλέγεται για **low-latency, high-throughput** time-series workloads (π.χ. algorithmic trading, real-time fleet monitoring). Είναι λιγότερο κατάλληλο για complex analytics (joins, subqueries σε μη-χρονικά δεδομένα) – εκεί το ClickHouse υπερέχει. Για general purpose time-series με moderate load, η InfluxDB (οικειότητα με Flux) ή TimescaleDB (SQL, ACID) μπορεί να είναι πιο εύκολες.
