---
title: "Shlink (URL Shortener)"
alternative_to: ["Bitly (Enterprise)", "Rebrandly (Pro)", "YOURLS (less modern)"]
categories: ["URL Shortener", "QR", "Εργαλεία", "Παραγωγικότητα", "Ανάλυση Ιστού"]
website: "https://shlink.io/"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Σύγχρονος, self-hosted URL shortener (συντομευτής συνδέσμων) γραμμένος σε PHP (Mezzio/Doctrine). Προσφέρει REST API, web interface, QR codes generation, detailed statistics (geolocation, referrers, browsers, devices), tag management, και built-in support for GDPR (anon IP)."
featured: false
---

Το Shlink είναι ένας self-hosted URL shortener που εστιάζει στην **απόδοση** και την **αναλυτική πληροφόρηση**. Σε αντίθεση με το YOURLS (ελαφρύ αλλά λιγότερο σύγχρονο), το Shlink παρέχει JSON REST API εξ αρχής, υποστηρίζει redirect rules (π.χ. 302 vs 301), custom slugs, QR codes, και αναλυτικά clicks (με IP geolocation, browser, OS, referrer). Είναι ιδανικό για μάρκες που θέλουν να συντομεύουν συνδέσμους (π.χ. `brand.link/offer`) και να μετρούν engagement.

**Λειτουργίες (Core):**

- **Short URL Generation:** από API ή web interface (Vue.js dashboard). Custom slugs (προσαρμοσμένα aliases), tags (ετικέτες), μέγιστες επισκέψεις (max visits).
- **Redirection:** 301 (moved permanently) ή 302 (temporary redirect). Υποστήριξη redirects με βάση user agent (π.χ. διαφορετικό URL για mobile).
- **Analytics (Statistics):** Για κάθε short URL: total clicks, unique clicks, countries, cities (if GeoIP), browsers, platforms (OS), devices (desktop/mobile/tablet), referrers.
- **QR Codes:** Αυτόματη δημιουργία QR code για κάθε URL (customizable size/format).
- **Tags Management:** Ομαδοποίηση short URLs με tags, φιλτράρισμα αναφορών ανά tag.
- **API-first:** Πλήρες REST API (JSON) για δημιουργία, ενημέρωση, διαγραφή, και analytics. SDKs available for PHP, JS, Python, Ruby, Go.
- **Multi-tenancy:** Υποστήριξη πολλαπλών domains (π.χ. `sh.link`, `brand.link`) από την ίδια εγκατάσταση.
- **GDPR:** Δυνατότητα ανωνυμοποίησης IP addresses (αφαίρεση του τελευταίου οκτάντα) πριν αποθηκευτούν.
- **Visits tracking (προαιρετικά):** Μπορείτε να απενεργοποιήσετε tracking για συγκεκριμένα URLs.

**Εγκατάσταση & Απαιτήσεις:**

- **Docker** (συνιστώμενο): `docker run -d -p 8080:8080 shlinkio/shlink`
- **Traditional:** PHP 8.1+ (Swoole ή RoadRunner ή Apache), MySQL/PostgreSQL/SQLite, Redis (προαιρετικά, για caching).
- **Web Client:** Ένα Vue.js-based web interface (Shlink-web-client) μπορεί να εγκατασταθεί ξεχωριστά (ή να χρησιμοποιήσετε API μόνο).

**Σύγκριση (Self-hosted Shorteners):**

| Χαρακτηριστικό | Shlink | YOURLS | Kutt (deprecated) |
|---|---|---|---|
| **REST API** | ✅ (πλήρες, documented) | ✅ (παλαιότερο) | ✅ |
| **Analytics (geolocation)** | ✅ (με GeoIP database) | ⚠️ (basic, no GeoIP) | ✅ |
| **QR Codes** | ✅ | ❌ (plugin) | ✅ |
| **Multi-tenancy (domains)** | ✅ | ⚠️ (workaround) | ❌ |
| **Docker** | ✅ (official) | ❌ (unofficial) | ❌ |

> **Σημείωση:** Το Shlink είναι η προτεινόμενη λύση για businesses που θέλουν self-hosted URL shortener με advanced analytics και API. Για μικρά projects (προσωπική χρήση, blog), το YOURLS (απλούστερο) μπορεί να αρκεί.
