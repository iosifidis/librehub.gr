---
title: "Kener (Status Page)"
alternative_to: ["Statuspage.io (commercial)", "Cachet (older)", "CState (static)"]
categories: ["Παραγωγικότητα", "Εργαλεία", "Παρακολούθηση"]
website: "https://github.com/rajnandan1/kener"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Σύγχρονη, responsive σελίδα κατάστασης (status page) ανοιχτού κώδικα, σχεδιασμένη για να ενημερώνει τους χρήστες σχετικά με την διαθεσιμότητα των υπηρεσιών σας. Υποστηρίζει monitoring (HTTP, ping, port) – αλλά βασικό. Η κύρια λειτουργία του είναι η παρουσίαση (UI) και το ιστορικό uptime (προσαρμοσμένη περίοδος). Μπορείτε να συνδέσετε τα monitors σας (μέσω API) ή να ενημερώνετε χειροκίνητα (status updates)."
featured: false
---

Το Kener (Ινδονησιακά: "simple") εστιάζει στην **status page** (η οποία εμφανίζει στους πελάτες σας αν οι υπηρεσίες σας είναι operational). Δεν είναι πλήρης monitoring λύση (δεν έχει advanced alerting), αλλά προσφέρει έναν όμορφο, δυναμικό πίνακα (chart uptime) και μπορεί να καταναλώσει δεδομένα από Uptime Kuma, UptimeRobot, ή άλλο σύστημα (μέσω API). Είναι ιδανικό αν θέλετε status page "σαν του GitHub" (https://www.githubstatus.com/).

**Βασικές Λειτουργίες:**

- **Status Page UI:** Χωρισμένη σε ομάδες υπηρεσιών, εμφάνιση τρέχουσας κατάστασης (Operational/Degraded/Outage), history chart (διάγραμμα uptime).
- **Monitor types (Built-in, basic):** HTTP(s), ping, port check (για να μην χρειάζεται εξωτερικό monitoring).
- **API endpoints (status update):** Μπορείτε να στέλνετε updates από εξωτερικά συστήματα (Uptime Kuma, Checkmk, κλπ.).
- **Incident Reports:** Δημιουργία αναφορών (manual) για προγραμματισμένη συντήρηση (Maintenance) ή έκτακτα περιστατικά (Incident) με updates (timeline).
- **Customizable (Branding, CSS).**
- **JSON persistence (no database required).**
- **Docker deployment.**

**Kener vs Cachet (παλαιότερο):**

| Χαρακτηριστικό | Kener | Cachet |
|---|---|---|
| **Modern UI** | ✅ | ⚠️ (παλαιότερο, Bootstrap 3) |
| **API** | ✅ (status update) | ✅ (REST) |
| **Built-in monitoring** | ✅ (βασικό) | ❌ (μόνο manual) |
| **Active development** | ✅ (2024-2025) | ❌ (παγωμένο, 2020) |

> **Σημείωση:** Το Kener είναι καλύτερο για νέα projects status page. Για πλήρη λύση "monitoring + status page", προτιμήστε **Uptime Kuma** (το οποίο έχει built-in status page).
