---
title: "Vaultwarden (formerly Bitwarden_RS)"
alternative_to: ["1Password Business (commercial)", "LastPass Enterprise (commercial)", "Dashlane (commercial)"]
categories: ["Ιδιωτικότητα", "Ασφάλεια", "Password Manager"]
website: "https://github.com/dani-garcia/vaultwarden"
logo: "/images/placeholder.svg"
license: "AGPL-3.0"
description: "Μια ελαφριά, self-hosted υλοποίηση του Bitwarden API, γραμμένη σε Rust. Χρησιμοποιεί πολύ λιγότερους πόρους (RAM, CPU) από την επίσημη έκδοση Bitwarden (η οποία βασίζεται σε .NET και SQL Server), ενώ παραμένει πλήρως συμβατή με τους official Bitwarden clients (desktop, mobile, browser extensions). Ιδανική για προσωπική χρήση ή μικρές ομάδες."
featured: true
---

Το Vaultwarden (πρώην Bitwarden_RS) είναι η πιο δημοφιλής ελαφριά εναλλακτική για self-hosted password manager. Αντί να εγκαταστήσετε την επίσημη, "βαριά" έκδοση Bitwarden (απαιτεί .NET, Docker Compose με 8 containers, ~300MB RAM), το Vaultwarden τρέχει σαν ένα μόνο δυαδικό binary (Rust) ή Docker container, καταναλώνοντας ~10-20MB RAM.

**Βασικές Δυνατότητες:**

- **Πλήρης συμβατότητα με Bitwarden clients (API):** Μπορείτε να χρησιμοποιήσετε οποιοδήποτε Bitwarden app (iOS, Android, desktop, browser extension) απλά αλλάζοντας το server URL.
- **Organizations (ομάδες):** Δημιουργία οργανισμών (ομάδων) με shared collections (κωδικοί πρόσβασης, σημειώσεις) και διαχείριση μελών.
- **File attachments (attachments):** Αποθήκευση αρχείων (π.χ. κλειδιά αδειοδότησης, εικόνες) στα στοιχεία.
- **Two-Factor Authentication (2FA):** Υποστηρίζει 2FA για τον λογαριασμό χρήστη (TOTP, Duo, YubiKey OTP) και μπορεί να λειτουργήσει και ως authenticator (TOTP generator).
- **Bitwarden Send:** Δημιουργία προσωρινών, κρυπτογραφημένων συνδέσμων για ασφαλή ανταλλαγή κειμένου/αρχείων.
- **Admin Web UI:** Διαχείριση χρηστών, οργανισμών, invitions, πολιτικών ασφαλείας.
- **Live logging & backups (SQLite/MySQL/PostgreSQL).**

**Vaultwarden vs Official Bitwarden (Self-hosted):**

| Χαρακτηριστικό | Vaultwarden | Bitwarden (Official) |
|---|---|---|
| **RAM** | ~10-20 MB | ~200-400 MB (ελάχιστο) |
| **Containers** | 1 (binary) ή 2 (με web server) | 8-10 (Docker Compose) |
| **Database** | SQLite (default), MySQL, PostgreSQL | SQL Server (MSSQL) ή PostgreSQL |
| **Καμπύλη εγκατάστασης** | Εύκολη (1 binary / docker) | Μέτρια (docker-compose up) |
| **Admin UI** | ✅ (βασικό) | ✅ (πλήρες) |
| **Support for official clients** | ✅ (πλήρες) | ✅ |

> **Σημείωση:** Το Vaultwarden είναι η καλύτερη επιλογή για self-hosted password management, ειδικά αν έχετε περιορισμένους πόρους (Raspberry Pi). Για μεγάλες επιχειρήσεις (>50 χρήστες) που χρειάζονται enterprise support, προτιμήστε την επίσημη Bitwarden (Cloud ή Self-hosted).
