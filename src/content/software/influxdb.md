---
title: "InfluxDB (Time-Series Database)"
alternative_to: ["Kdb+ (commercial, high-performance)", "TimescaleDB (PostgreSQL-based)", "Prometheus (metrics & monitoring)"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Βάσεις Δεδομένων"]
website: "https://www.influxdata.com/"
logo: "/images/placeholder.svg"
license: "MIT (InfluxDB 2.x OSS), Commercial (Cloud, Enterprise)"
description: "Εξειδικευμένη βάση δεδομένων χρονοσειρών (time-series database) βελτιστοποιημένη για αποθήκευση και ερώτηση μεγάλων όγκων δεδομένων με χρονική σήμανση (timestamps) – π.χ. μετρήσεις IoT, server metrics (CPU, μνήμη), δεδομένα από αισθητήρες, financial tick data. Υποστηρίζει SQL-like γλώσσα (InfluxQL) και Flux (scripting)."
featured: false
---

Η InfluxDB είναι η πιο δημοφιλής time-series database, σχεδιασμένη για high-write workloads (εκατομμύρια σημεία δεδομένων ανά δευτερόλεπτο) και αποτελεσματικές ερωτήσεις χρονικών παραθύρων (time-range queries). Αποθηκεύει δεδομένα ως **measurements** (παρόμοια με πίνακες) με tags (ευρετήρια, π.χ. `host`, `region`) και fields (τιμές, π.χ. `cpu_usage`, `temperature`).

**Βασικές Έννοιες & Χαρακτηριστικά:**

- **Line Protocol (text-based format):** `measurement,tag1=val1 field1=val1i field2=val2i timestamp`.
- **Downsampling & Retention Policies:** Αυτόματη συμπίεση δεδομένων (π.χ. διατήρηση raw δεδομένων για 2 ημέρες, μετά aggregate κάθε 5 λεπτά).
- **Continuous Queries (CQ):** Προ-υπολογισμός ερωτημάτων (aggregations) σε τακτά διαστήματα.
- **Flux (scripting language):** Γλώσσα για ETL, joins, μετασχηματισμούς (αντικατέστησε την InfluxQL σε 2.x).
- **InfluxQL (SQL-like query language):** Παρόμοια με SQL, με εκτεταμένες συναρτήσεις χρόνου.
- **Storage Engine (TSM - Time-Structured Merge Tree):** Βελτιστοποιημένο για sequential writes, compression (διάφοροι αλγόριθμοι ανά τύπο).
- **Clustering (Enterprise):** High availability, sharding, replication.
- **Integrations:** Telegraf (agent για συλλογή metrics από 200+ πηγές), Grafana (dashboard visualization), Kapacitor (alerting/processing).

**Εκδόσεις:**

| Έκδοση | Άδεια | Χαρακτηριστικά |
|---|---|---|
| **InfluxDB OSS (2.x)** | MIT | Single node, full functionality (Flux, InfluxQL, downsampling). Δεν έχει clustering. |
| **InfluxDB Cloud** | Commercial | Managed service (AWS, Azure, GCP), με clustering, auto-scaling, free tier περιορισμένος. |
| **InfluxDB Enterprise** | Commercial | On-premise με clustering, high availability, LDAP/SSO, backup/restore. |

**InfluxDB vs Prometheus (popular in DevOps):**

| Χαρακτηριστικό | InfluxDB | Prometheus |
|---|---|---|
| **Use case** | Γενική time-series (IoT, finance, metrics) | Monitoring (Kubernetes, microservices) |
| **Data model** | Measurement + tags + fields | Metric + labels |
| **Query language** | InfluxQL, Flux | PromQL (ισχυρή για metrics) |
| **Storage** | Disk (TSM engine) | Local disk (block storage) |
| **Clustering** | Enterprise only | ❌ (δεν υποστηρίζει, χρησιμοποιείς Thanos/Cortex) |
| **UI** | Διαθέτει (βασικό) | Grafana (standard) |

> **Σημείωση:** Η InfluxDB είναι ιδανική για **IoT data**, **devices telemetry**, **financial tick data**, **sensor data**, και **application metrics** (όταν δεν θέλετε Prometheus). Για Kubernetes monitoring (Prometheus + Grafana) είναι πιο standard. Για time-series + SQL (σχεσιακές δυνατότητες), δείτε TimescaleDB (PostgreSQL).
