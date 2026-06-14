---
title: "YOURLS (Your Own URL Shortener)"
alternative_to: ["Bitly (free tier)", "Shlink (advanced features)", "Rebrandly"]
categories: ["URL Shortener", "QR", "Εργαλεία", "Παραγωγικότητα"]
website: "https://yourls.org/"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Σύνολο scripts σε PHP (με MySQL) που σας επιτρέπει να τρέχετε τον δικό σας self-hosted URL shortener, με custom domain (π.χ. `yourdomain.com/abc`). Περιλαμβάνει βασική analytics (clicks, referrers), API, plugins, και είναι εξαιρετικά ελαφρύ."
featured: false
---

Το YOURLS (Your Own URL Shortener) είναι το πιο δημοφιλές open-source self-hosted script για shortening URLs, υπάρχει από το 2009. Είναι γραμμένο σε PHP (παλαιότερο codebase), αλλά εξαιρετικά σταθερό και ελαφρύ. Ιδανικό για μικρούς ιστότοπους, bloggers, freelancers που θέλουν τον δικό τους shortener χωρίς εξωτερικές εξαρτήσεις.

**Βασικές Λειτουργίες:**

- **Short URL Creation:** Μέσω web interface (admin) ή API (REST). Υποστήριξη custom slugs (π.χ. `/offer`).
- **Redirection:** 301 (moved permanently) ή 302 (temporary). Υποστήριξη HTTP/HTTPS.
- **Bookmarklet (Quick Shorten):** Bookmarklet που μπορείτε να σύρετε στον browser σας – ένα κλικ συντομεύει την τρέχουσα σελίδα.
- **Analytics (βασική):** Clicks, referrers (προέλευση), clicks ανά URL, time of clicks (γράφημα).
- **Plugins (περιορισμένα):** Υπάρχουν 30+ plugins (από community) για προσθήκη features: QR codes, Google Analytics tracking, reCAPTCHA, API rate limiting, μείωση spam.
- **API (JSONP):** Απλό API για δημιουργία short URLs (`/yourls-api.php?url=...&format=json`).
- **No external dependencies:** MySQL + PHP (όχι Node.js, όχι Docker).

**Εγκατάσταση (Παραδοσιακή):**

1.  Ανεβάστε τα αρχεία (YOURLS) στον web server (Apache/Nginx).
2.  Δημιουργήστε MySQL database.
3.  Αντιγράψτε το `config-sample.php` σε `config.php`, συμπληρώστε credentials.
4.  Επισκεφθείτε `http://yourdomain.com/admin` (installer).

**Shlink vs YOURLS:**

| Χαρακτηριστικό | YOURLS | Shlink |
|---|---|---|
| **Πολυπλοκότητα εγκατάστασης** | Πολύ απλή (παραδοσιακό LAMP) | Μέτρια (Docker ideal) |
| **API** | ✅ (απλό) | ✅ (πλήρες REST) |
| **Advanced analytics (GeoIP, browser)** | ❌ (μόνο referrers, clicks) | ✅ (γεωγραφία, συσκευές, browser) |
| **QR codes** | ❌ (plugin) | ✅ (built-in) |
| **Plugins ecosystem** | ✅ 30+ | ❌ (δεν έχει plugin system) |
| **Ideal for** | Personal, μικρά blogs, prototypers | Business, marketing teams |

> **Σημείωση:** Για προσωπική χρήση ή μικρή ιστοσελίδα (≤10.000 κλικ/μήνα), το YOURLS είναι η απλούστερη λύση. Για προχωρημένη ανάλυση (marketing campaigns), προτιμήστε Shlink.
