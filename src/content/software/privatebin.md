---
title: "PrivateBin (Secure Pastebin)"
alternative_to: ["Pastebin (Pro, commercial)", "GitHub Gist (public, not private)"]
categories: ["Ιδιωτικότητα", "Ασφάλεια", "Επικοινωνία"]
website: "https://privatebin.info/"
logo: "/images/placeholder.svg"
license: "Zlib (MIT-like)"
description: "Ένας μινιμαλιστικός, ασφαλής online χώρος αποθήκευσης κειμένου (secure pastebin), όπου ο διακομιστής δεν έχει καμία γνώση των δεδομένων (zero-knowledge). Όλα τα δεδομένα κρυπτογραφούνται (AES-256) και αποκρυπτογραφούνται στην πλευρά του browser (client-side) χρησιμοποιώντας JavaScript. Υποστηρίζει self-hosting, burn-after-reading, password protection, expiration, και σύνταξη Markdown/Syntax highlighting. Ιδανικό για ανταλλαγή ευαίσθητων δεδομένων, logs, ή κώδικα χωρίς να εμπιστεύεστε τον server."
featured: false
---

Το PrivateBin είναι ένα open-source pastebin (σαν το Pastebin.com) που σέβεται την ιδιωτικότητα. Σε αντίθεση με το Pastebin (όπου ο server βλέπει raw κείμενο), στο PrivateBin τα δεδομένα κρυπτογραφούνται **στο browser σας** πριν σταλούν στον server. Ο server αποθηκεύει μόνο το κρυπτογραφημένο κείμενο (ciphertext) και ένα salt. Χωρίς το κλειδί (που είναι μέρος του URL), κανείς (ούτε ο διαχειριστής) δεν μπορεί να αποκρυπτογραφήσει.

**Βασικές Λειτουργίες (Client-side Encryption):**

- **Zero-Knowledge Encryption (AES-256 + GCM)**: Η αποκρυπτογράφηση γίνεται στο browser με JavaScript (Web Crypto API). Ο server δεν βλέπει plaintext.
- **Burn-after-reading (self-destruct):** Το paste διαγράφεται αυτόματα μετά την πρώτη ανάγνωση.
- **Password protection:** Μπορείτε να κρυπτογραφήσετε το paste με password (προσθήκη ασφαλείας).
- **Expiration (Αυτόματη λήξη):** 5 λεπτά, 1 ώρα, 1 ημέρα, 1 μήνα, ή never.
- **Syntax highlighting (50+ γλώσσες) και Markdown rendering.**
- **File upload (έως 10MB, κρυπτογραφημένα).**
- **Discussion (σχόλια):** Υποστήριξη ανώνυμων σχολίων (προαιρετικά).
- **Self-hosting (PHP + MySQL/SQLite) ή χρήση δημόσιων instances (privatebin.net).**
- **API (REST) for programmatic paste creation.**

**PrivateBin vs Pastebin (commercial):**

| Χαρακτηριστικό | PrivateBin (self-hosted) | Pastebin (Free) |
|---|---|---|
| **Κρυπτογράφηση (server-side)** | ✅ (end-to-end, client-side) | ❌ (plaintext) |
| **Burn after reading** | ✅ | ❌ |
| **Password protection** | ✅ | ❌ (Pro) |
| **Data control** | ✅ (full) | ❌ |
| **Maximum paste size (default)** | Configurable (π.χ. 10MB) | ~512KB |

> **Σημείωση:** Το PrivateBin είναι ιδανικό για security teams που μοιράζονται logs, credentials (προσοχή: βεβαιωθείτε ότι το URL (που περιέχει το κλειδί) δεν καταγράφεται), source code, ή ευαίσθητες οδηγίες μέσω ανεπίσημων καναλιών (π.χ. Slack, email). Η self-hosted έκδοση προτιμάται για πλήρη έλεγχο.
