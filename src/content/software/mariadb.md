---
title: "MariaDB"
alternative_to: ["Microsoft SQL Server", "MySQL (commercial concerns)", "Oracle Database"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Βάσεις Δεδομένων"]
website: "https://mariadb.org/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Η δεύτερη πιο διαδεδομένη open-source σχεσιακή βάση δεδομένων (RDBMS), που ξεκίνησε ως fork της MySQL το 2009, μετά την απόκτηση της MySQL από την Oracle. Στόχος της είναι να παραμείνει ελεύθερη (GPL), διατηρώντας συμβατότητα με MySQL (drop-in replacement), αλλά με προσθήκες: νέες μηχανές αποθήκευσης (Aria, ColumnStore), δυνατότερο query optimizer, και περισσότερες εκτεταμένες λειτουργίες."
featured: true
---

Η MariaDB (από το όνομα Maria, της κόρης του ιδρυτή Michael Widenius) είναι ένα drop-in replacement της MySQL. Οι περισσότερες εφαρμογές που τρέχουν σε MySQL μπορούν να μεταφερθούν σε MariaDB χωρίς αλλαγές κώδικα. Χρησιμοποιείται από πολλές διανομές Linux (Red Hat, Fedora, SUSE) ως default RDBMS, αντί για MySQL.

**Βασικές Διαφορές & Πρόσθετα Χαρακτηριστικά (vs MySQL):**

| Χαρακτηριστικό | MariaDB | MySQL |
|---|---|---|
| **Storage Engines** | Aria (crash-safe MyISAM), ColumnStore (columnar), XtraDB (MySQL 5.1 equivalent), MyRocks (compression) | InnoDB, MyISAM, NDB, Memory |
| **Query optimizer** | Πιο προχωρημένο (extended statistics, optimizer traces) | Καλό, αλλά πιο συντηρητικό |
| **Thread Pool** | ✅ (ενσωματωμένο, δωρεάν) | ✅ (μόνο Enterprise) |
| **Galera Cluster** | ✅ (multi-master synchronous replication) | ❌ (Group Replication διαφορετική υλοποίηση) |
| **Temporary tables** | Aria (faster) | MyISAM ή InnoDB |
| **User roles** | ✅ (από 10.0, πριν την MySQL) | ✅ (από MySQL 8.0) |
| **Public roadmap & development** | Πλήρως ανοιχτό (MariaDB Foundation) | Κλειστό (Oracle) |

**Άλλες Δυνατότητες:**

- **Flashback (ανάκτηση δεδομένων):** Μπορείτε να κάνετε "rollback" σε συγκεκριμένη ώρα (σχεδόν time travel).
- **ColumnStore (Columnar storage engine):** Για αναλυτικές ερωτήσεις (OLAP) – hybrid transactional/analytical processing (HTAP).
- **S3 Storage engine (CONNECT):** Αποθήκευση πινάκων σε AWS S3.
- **Spider (sharding, distributed queries):** Διαμερισμός πινάκων σε πολλούς servers.
- **JSON functions:** Πλήρης συμβατότητα με MySQL JSON functions + προσθήκες.

**MariaDB vs MySQL - Πότε να επιλέξετε:**

| Περίπτωση | Πρόταση |
|---|---|
| **Θέλετε drop-in replacement για MySQL, αλλά με περισσότερες δυνατότητες** | MariaDB |
| **Χρησιμοποιείτε plugins ή features που υπάρχουν μόνο στην MySQL (HeatWave, Enterprise Monitor)** | MySQL (Commercial) |
| **Θέλετε ανοιχτή ανάπτυξη και προβλέψιμο roadmap** | MariaDB |
| **Είστε ήδη οικείοι με MySQL και δεν χρειάζεστε επιπλέον features** | MySQL Community |

> **Σημείωση:** Η MariaDB είναι η προεπιλεγμένη βάση σε πολλές διανομές Linux (RHEL, CentOS, Fedora). Για νέα projects, η επιλογή μεταξύ MySQL (Community) και MariaDB είναι θέμα προτίμησης (αμφότερες αξιόπιστες). Αν θέλετε δωρεάν thread pool, flashback, και Galera cluster, επιλέξτε MariaDB.
