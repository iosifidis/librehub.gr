---
title: "MySQL"
alternative_to: ["Microsoft SQL Server", "Oracle Database", "IBM Db2"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Βάσεις Δεδομένων"]
website: "https://www.mysql.com/"
logo: "/images/placeholder.svg"
license: "GPL-2.0 (Community Edition), Commercial (Enterprise)"
description: "Η πιο διαδεδομένη open-source σχεσιακή βάση δεδομένων (RDBMS) παγκοσμίως, γνωστή για την ταχύτητα, αξιοπιστία και ευκολία χρήσης. Χρησιμοποιείται από εκατομμύρια εφαρμογές, από μικρές ιστοσελίδες έως τεράστιες web πλατφόρμες (Facebook, Twitter, YouTube, Wikipedia). Υποστηρίζει SQL, transactions (ACID με InnoDB), replication, partitioning, και full-text search."
featured: false
---

Η MySQL είναι μια από τις πιο δημοφιλείς βάσεις δεδομένων ανοιχτού κώδικα, ιδανική για web εφαρμογές (LAMP stack: Linux, Apache, MySQL, PHP/Python/Perl). Ανήκει στην Oracle Corporation (από το 2010), αλλά η Community Edition παραμένει ελεύθερη (GPL). Χρησιμοποιείται ευρέως από CMS (WordPress, Joomla, Drupal), e-commerce (WooCommerce, Magento), και frameworks (Laravel, Symfony, Django, Ruby on Rails).

**Βασικές Δυνατότητες:**

- **Storage Engines:** InnoDB (default, ACID compliant, foreign keys, row-level locking), MyISAM (παλαιότερο, table-level locking, full-text search), Memory (in-memory), NDB (clustering).
- **Transactions (ACID):** Υποστήριξη COMMIT, ROLLBACK, savepoints (με InnoDB).
- **Replication:** Master-slave (ασύγχρονο) replication, semi-synchronous replication, group replication (MySQL 5.7+).
- **Partitioning (Range, List, Hash, Key):** Για μεγάλους πίνακες.
- **Full-text search (MyISAM και InnoDB από 5.6).**
- **Triggers, Stored Procedures, Views, Events (scheduler).**
- **JSON Support (από 5.7):** Συναρτήσεις για JSON_* (JSON_EXTRACT, JSON_ARRAY, κλπ.), indexing generated columns.
- **MySQL HeatWave (Cloud, Commercial):** In-memory analytics accelerator, vector store για AI/ML.
- **Security:** SSL/TLS encryption, role-based access control (8.0), auditing (Enterprise), data masking.

**Εκδόσεις & Άδειες:**

| Έκδοση | Άδεια | Χαρακτηριστικά |
|---|---|---|
| **MySQL Community Edition** | GPL-2.0 | Πλήρης λειτουργικότητα, χωρίς technical support. |
| **MySQL Enterprise Edition** | Εμπορική | Προσθέτει: MySQL Enterprise Monitor, Backup, Firewall, Thread Pool, Audit, Encryption (TDE), Technical Support. |
| **MySQL Cluster CGE** | Εμπορική | Carrier Grade Edition (NDB Cluster, high availability, 99.999% uptime). |

**MySQL vs PostgreSQL (γρήγορη σύγκριση):**

| Χαρακτηριστικό | MySQL | PostgreSQL |
|---|---|---|
| **ACID compliance** | ✅ (InnoDB) | ✅ (πλήρης) |
| **JSON support** | ✅ (βασικό) | ✅ (προηγμένο, JSONB) |
| **Full-text search** | ✅ | ✅ (πιο προχωρημένο) |
| **Partitioning** | ✅ (range, list, hash) | ✅ (range, list, hash, more) |
| **Concurrency (multi-version)** | ⚠️ (InnoDB έχει MVCC) | ✅ (MVCC, better) |
| **Θεωρητική μέγιστη βάση** | Πολύ μεγάλη | Πολύ μεγάλη |

> **Σημείωση:** Η MySQL παραμένει η default επιλογή για απλές web εφαρμογές, λόγω τεράστιου οικοσυστήματος, εύκολης διαχείρισης και υψηλής απόδοσης σε read-heavy workloads. Αν χρειάζεστε προηγμένες λειτουργίες (custom types, complex queries, array/hstore, JSONB, full-text ranking), η PostgreSQL υπερέχει.
