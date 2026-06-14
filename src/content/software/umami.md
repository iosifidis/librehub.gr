---
title: "Umami"
alternative_to: ["Google Analytics (GA4)", "Plausible Analytics (self-hosted alternative)", "GoAccess (real-time logs)"]
categories: ["Ιδιωτικότητα", "Ανάλυση Ιστού"]
website: "https://umami.is/"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Απλή, εύχρηστη, και εστιασμένη στην ιδιωτικότητα εναλλακτική λύση analytics (παρόμοια με Plausible). Συλλέγει μόνο απαραίτητες μετρικές (σελίδες, referrers, browsers, devices), δεν χρησιμοποιεί cookies, και είναι πλήρως συμβατή με GDPR. Μπορεί να self-hosted (Node.js + PostgreSQL ή MySQL) ή μέσω cloud."
featured: false
---

Το Umami (ιαπωνικά για "γεύση umami") είναι ένα lightweight, open-source analytics εργαλείο που μοιάζει λειτουργικά με το Plausible, αλλά γραμμένο σε **Node.js** (Next.js + Prisma) και με άδεια MIT (πιο permissive). Προσφέρει ένα καθαρό, minimal dashboard, real-time tracking, και δεν χρησιμοποιεί cookies ή persistent identifiers. Είναι δημοφιλές για self-hosting λόγω απλότητας (Docker) και χαμηλής κατανάλωσης πόρων.

**Βασικές Λειτουργίες (παρόμοιες με Plausible):**

- **Dashboard Metrics:** Page views, unique visitors, bounce rate, average session duration, total sessions, events.
- **Real-time Data:** Εμφάνιση ενεργών χρηστών (active visitors) στην τρέχουσα ώρα.
- **Referrers:** Λίστα domains που στέλνουν traffic, με δυνατότητα filtering (π.χ. google.com, direct, social).
- **Pages:** Λίστα δημοφιλών σελίδων (URLs) με page views.
- **Browsers & Devices:** Chrome, Firefox, Safari, κλπ., και διάκριση desktop/mobile/tablet.
- **Countries:** Γεωγραφική προέλευση (δεν αποθηκεύει IP, χρησιμοποιεί GeoIP lookup).
- **Event Tracking:** Παρακολούθηση custom events (π.χ. button clicks, form submissions, video plays) μέσω `umami.trackEvent()`.
- **Goals (στόχοι):** Δημιουργία στόχων (π.χ. visit to /thank-you page) και παρακολούθηση conversions.
- **No Cookies:** Χρησιμοποιεί local storage (προαιρετικά) για αναγνώριση επιστρέφοντων χρηστών, αλλά μπορεί να απενεργοποιηθεί.

**Plausible vs Umami (Self-hosted):**

| Χαρακτηριστικό | Plausible | Umami |
|---|---|---|
| **Backend** | Elixir (Phoenix) | Node.js (Next.js) |
| **Database** | PostgreSQL + ClickHouse (cloud) | PostgreSQL, MySQL, SQLite (via Prisma) |
| **Script size** | ~1 KB | ~2-3 KB |
| **API** | ✅ (read-only) | ✅ (full read/write, με API keys) |
| **Multi-tenancy (πολλά sites)** | ✅ | ✅ |
| **Docker support** | ✅ | ✅ (official) |

> **Σημείωση:** Το Umami είναι εξαιρετικό για developers που θέλουν full control (MIT license), προτιμούν Node.js stack, και χρειάζονται απλά, privacy-first analytics. Για πιο ώριμο οικοσύστημα και μεγαλύτερη κοινότητα, το Plausible έχει μικρό προβάδισμα.
