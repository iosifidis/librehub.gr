---
title: "Uptime Kuma (Self-hosted Uptime Monitoring)"
alternative_to: ["UptimeRobot (SaaS)", "Pingdom (commercial)", "Better Uptime (commercial)"]
categories: ["Παραγωγικότητα", "Εργαλεία", "Παρακολούθηση"]
website: "https://uptimekuma.org/"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Εύχρηστο, self-hosted εργαλείο παρακολούθησης χρόνου λειτουργίας (uptime monitoring) για HTTP(s), TCP, Ping, DNS, Push, Steam Game Server, κλπ. Υποστηρίζει ειδοποιήσεις (notifications) μέσω Telegram, Discord, Slack, Email, Pushover, 90+ providers. Διαθέτει ένα όμορφο, responsive dashboard (status page) που δείχνει την τρέχουσα διαθεσιμότητα και ιστορικό (uptime history)."
featured: true
---

Το Uptime Kuma είναι ένα "μοντέρνο" εργαλείο παρακολούθησης uptime, εστιασμένο στην απλότητα και την ταχύτητα (γραμμένο σε Node.js). Σε αντίθεση με Zabbix (βαρύ), το Uptime Kuma μπορεί να τρέξει ακόμα και σε Raspberry Pi. Είναι ιδανικό για μικρές επιχειρήσεις, developers, sysadmins που θέλουν να παρακολουθούν τα sites/services τους χωρίς να πληρώνουν για UptimeRobot.

**Βασικές Λειτουργίες:**

- **Monitor Types (10+):** HTTP(s) (GET, POST, με keywords, custom headers), TCP port, Ping (ICMP), DNS resolution, Push (έναρξη/λήξη), Docker container, Steam Game Server, MongoDB, MySQL, PostgreSQL, Radius, etc.
- **Multi-language UI (περιλαμβάνει Ελληνικά).**
- **Status Pages (Δημόσιες ή ιδιωτικές):** Μπορείτε να δημιουργήσετε μια status page (π.χ. `status.example.com`) για να ενημερώνετε τους πελάτες σας. Υποστηρίζει custom CSS (white-label).
- **Notifications (90+ providers):** Email (SMTP), Telegram, Discord, Slack, Mattermost, Gotify, Pushover, Line, Teams, Webhook, κλπ.
- **Certificate Monitoring (SSL expiry).**
- **Domain expiry monitoring (whois).**
- **Heartbeat monitoring (Push).**
- **Game Server monitoring (Minecraft, CS:GO, κλπ.).**
- **Docker deployment (one command).**
- **API (REST).**

**Uptime Kuma vs UptimeRobot (SaaS):**

| Χαρακτηριστικό | Uptime Kuma (self-hosted) | UptimeRobot (Free tier) |
|---|---|---|
| **Monitor frequency** | Every 30 seconds (default) | Every 5 minutes |
| **Number of monitors** | Unlimited (depends on your server) | 50 (free) |
| **Status page branding** | Customizable (CSS, logo) | UptimeRobot branding |
| **Data ownership** | ✅ (πλήρης) | ❌ |
| **Κόστος** | Δωρεάν (server cost) | $0 (βασικό) / $8+ (advanced) |

> **Σημείωση:** Το Uptime Kuma είναι **η καλύτερη εναλλακτική open-source για uptime monitoring**, πολύ εύκολο στην εγκατάσταση (Docker). Για μεγάλες υποδομές (1000+ monitors) ή advanced SLA reporting, χρειάζεται πιο βαρύ σύστημα (Zabbix, Checkmk).
