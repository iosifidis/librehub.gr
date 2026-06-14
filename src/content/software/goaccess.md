---
title: "GoAccess (Real-time Web Log Analyzer)"
alternative_to: ["Google Analytics (server-side alternative)", "AWStats (deprecated)", "Webalizer (old)"]
categories: ["Ανάλυση Ιστού", "Εργαλεία"]
website: "https://goaccess.io/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Ένας αναλυτής καταγραφών (log analyzer) ιστού σε πραγματικό χρόνο, λειτουργεί από τερματικό (terminal) ή παράγει HTML reports. Διαβάζει αρχεία logs (Apache, Nginx, Amazon S3, CloudFront) και παρουσιάζει στατιστικά (unique visitors, requested files, 404 errors, referrers, browsers, OS, location, κλπ.) χωρίς να χρειάζεται JavaScript tracking (server-side analytics)."
featured: false
---

Το GoAccess είναι ένα μοναδικό analytics εργαλείο: δεν χρησιμοποιείται client-side (όπως το GA) αλλά διαβάζει απευθείας τα access logs του web server σας (π.χ. `/var/log/nginx/access.log`). Αυτό σημαίνει:

- **Απόλυτη ιδιωτικότητα** (δεν υπάρχει tracking code).
- **Πλήρης ανεξαρτησία από blockers** (AdBlock, uBlock).
- **Λειτουργεί σε πραγματικό χρόνο** (tail logs).
- **Χαμηλό overhead** (δεν επηρεάζει ταχύτητα ιστοσελίδας).
- **Για λειτουργικά συστήματα** (Linux, BSD, macOS) – μέσω terminal.

**Τρόποι χρήσης:**

1.  **Terminal (real-time):** `goaccess access.log -o /dev/stdout --log-format=COMBINED` (απεικόνιση σε ncurses interface).
2.  **HTML Report (static):** `goaccess access.log -o report.html --log-format=COMBINED` (παράγει interactive HTML).
3.  **WebSocket (real-time στο browser):** `goaccess access.log -o /var/www/html/goaccess.html --real-time-html --log-format=COMBINED`.

**Μετρικές που παρέχει (από logs):**

| Κατηγορία | Μετρικές |
|---|---|
| **Γενικά** | Unique visitors, total requests, bandwidth, average request size, not found (404) |
| **Συχνότητα** | Ημερήσιο, εβδομαδιαίο, μηνιαίο, ωριαίο histogram |
| **Visitors** | Top IP addresses (με γεωγραφική προέλευση αν has GeoIP), hosts |
| **Requested Files** | Στατιστικά ανά URL, ανά status code (200, 304, 404, 403, 500) |
| **Referrers** | Top referrers (ποια sites στέλνουν traffic) |
| **Browsers & OS** | Chrome, Firefox, Safari, Edge, Android, iOS, Windows, Linux |
| **Location** | Xώρες (μέσω GeoIP – απαιτεί database) |
| **Virtual Hosts** | Αναλύσεις ανά domain (αν logs περιέχουν vhost info) |

**Παράδειγμα εντολής (Apache/Nginx combined log format):**

```bash
goaccess /var/log/nginx/access.log -o /var/www/html/stats.html --log-format=COMBINED --real-time-html
```

> **Σημείωση:** Το GoAccess δεν αντικαθιστά πλήρως το Google Analytics (δεν έχει bounce rate, conversion funnels, user journeys), αλλά είναι τέλειο για server-side analytics, debugging (π.χ. 404 errors), και monitoring bandwidth. Ιδανικό για sysadmins και DevOps.
