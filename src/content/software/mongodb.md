---
title: "MongoDB"
alternative_to: ["Amazon DocumentDB (compatible)", "Couchbase (commercial)", "Cassandra (wide-column)"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Βάσεις Δεδομένων"]
website: "https://www.mongodb.com/"
logo: "/images/placeholder.svg"
license: "SSPL (Server Side Public License) – controversial, not OSI approved"
description: "Η πιο δημοφιλής NoSQL βάση δεδομένων εγγράφων (document-oriented), που αποθηκεύει δεδομένα σε μορφή BSON (JSON-like). Είναι σχεδιασμένη για high scalability, οριζόντια διαμερισμό (sharding), high availability (replica sets), και ευέλικτο schema (χωρίς προκαθορισμένες στήλες). Ιδανική για εφαρμογές με ημι-δομημένα δεδομένα (logs, content management, catalogs)."
featured: true
---

Η MongoDB είναι η κορυφαία NoSQL βάση, που χρησιμοποιείται από χιλιάδες εταιρείες (eBay, Adobe, Forbes, Coinbase, Verizon). Σε αντίθεση με τις SQL βάσεις (πίνακες, γραμμές, στήλες), η MongoDB χρησιμοποιεί **έγγραφα (documents)** σε συλλογές (collections), παρόμοια με JSON. Αυτό επιτρέπει διαφορετική δομή για κάθε έγγραφο (flexible schema), εύκολη κλιμάκωση (sharding), και γρήγορη ανάπτυξη (no migrations).

**Βασικές Έννοιες:**

- **Document (έγγραφο):** BSON (Binary JSON) – υποστηρίζει nested documents, arrays, dates, object IDs. Κάθε έγγραφο έχει ένα μοναδικό `_id`.
- **Collection (συλλογή):** Αντίστοιχη πίνακα σε SQL.
- **Replica Set:** Σύνολο αντιγράφων (primary + secondary) για high availability, automatic failover.
- **Sharding:** Οριζόντιος διαμερισμός (horizontal partitioning) δεδομένων σε πολλούς servers (shards), με μία διαδρομή ρουτεριστή (mongos). Υποστηρίζει shard key (πεδίο που κατανέμει τα δεδομένα).

**Βασικές Δυνατότητες:**

- **Flexible Schema:** Δεν χρειάζεται να ορίσετε columns εκ των προτέρων. Μπορείτε να προσθέσετε νέα πεδία χωρίς downtime.
- **Indexing (Δευτερεύοντα ευρετήρια):** Υποστηρίζει single field, compound, multikey (arrays), geospatial, text, hashed, wildcard indexes.
- **Aggregation Pipeline:** Framework για ETL, complex analytics, joins (lookup), grouping, sorting, projections – παρόμοιο με SQL's GROUP BY, JOIN, κλπ.
- **Transactions (ACID):** Από την έκδοση 4.0, υποστηρίζει multi-document ACID transactions (αλλά με μικρότερη απόδοση από SQL).
- **GridFS:** Αποθήκευση μεγάλων αρχείων (>16MB).
- **Change Streams:** Παρακολούθηση αλλαγών σε πραγματικό χρόνο.
- **MongoDB Atlas (Cloud):** Managed service (AWS, Azure, GCP) – περιλαμβάνει backup, monitoring, automated sharding.

**MongoDB vs SQL (Πότε να χρησιμοποιήσετε):**

| Περίπτωση | MongoDB | SQL (PostgreSQL, MySQL) |
|---|---|---|
| **Ευέλικτο schema (μεταβάλλεται συχνά)** | ✅ | ⚠️ (χρειάζεται migrations) |
| **Οριζόντια κλιμάκωση (sharding) out-of-box** | ✅ | ⚠️ (πιο δύσκολο, χρειάζεται 3rd party) |
| **Ανάγκες ACID (τραπεζικές, οικονομικές)** | ⚠️ (υπάρχει, αλλά λιγότερο ώριμο) | ✅ |
| **Complex joins (πολλές σχέσεις 1-to-many, many-to-many)** | ⚠️ (denormalization προτιμάται) | ✅ |
| **Ιστορική αναφορά (reporting, BI)** | ⚠️ (γίνεται, αλλά SQL υπερέχει) | ✅ |

> **Σημείωση:** Η MongoDB είναι ιδανική για rapid prototyping, content management systems (CMS), catalogs, logs, IoT, real-time analytics. Δεν είναι ιδανική για συστήματα με πολύπλοκες σχέσεις (π.χ. λογιστική, CRM) όπου απαιτούνται complex joins. Το licensing της (SSPL) από το 2018 είναι controversial (δεν θεωρείται OSI-approved open source από πολλούς).
