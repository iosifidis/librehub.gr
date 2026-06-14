---
title: "Checkmate (Uptime Monitoring)"
alternative_to: ["Pingdom (commercial)", "UptimeRobot (commercial tier)", "BetterStack Uptime (commercial)"]
categories: ["Παραγωγικότητα", "Εργαλεία", "Παρακολούθηση"]
website: "https://github.com/bluewave-labs/Checkmate"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Ελαφρύ, self-hosted εργαλείο παρακολούθησης uptime (εναλλακτική Pingdom/UptimeRobot). Υποστηρίζει monitoring HTTP(s), ping, ports, keywords, SSL expiry, και domain expiry. Διαθέτει status page, notifications (email, Slack, Discord, Webhook), και βασική αναφορά uptime. Ιδανικό για μικρές ομάδες που χρειάζονται απλό monitoring χωρίς την εγκατάσταση Zabbix."
featured: false
---

Το Checkmate είναι μια νεότερη, minimal επιλογή για uptime monitoring (παρόμοια με Uptime Kuma). Γραμμένο σε JavaScript (Node.js + React), μερικές λειτουργίες του είναι πιο περιορισμένες (π.χ. λιγότεροι notification providers), αλλά είναι πολύ ελαφρύ. Έχει σχεδιαστεί για να τρέχει σε Docker (ή manual).

**Βασικές Λειτουργίες:**

- **Monitor Types:** HTTP(s) (status code, response time, keyword check), ping (ICMP), port checking (TCP).
- **SSL Certificate Monitoring (ημ. λήξης).**
- **Domain Expiry Monitoring (whois).**
- **Status Page (public, με uptime charts).**
- **Notifications (Webhook, Email, Discord, Slack, Pushover, Telegram).**
- **REST API (για διαχείριση monitors).**
- **Docker-ready** (docker-compose).
- **Data persistence (SQLite ή PostgreSQL).**

**Checkmate vs Uptime Kuma (γρήγορα):**

| Χαρακτηριστικό | Checkmate | Uptime Kuma |
|---|---|---|
| **Monitors** | HTTP, Ping, Port, SSL, Domain | + DNS, MySQL, MongoDB, Docker, Steam, κλπ. |
| **Notification providers** | ~10 | 90+ |
| **Status page themes** | ✅ (βασικό) | ✅ (με custom CSS) |
| **Popularity (GitHub stars)** | ~350 | ~20.000+ |

> **Σημείωση:** Το Checkmate είναι λιγότερο ώριμο, αλλά λειτουργικό. Για νέα projects, συνιστάται το **Uptime Kuma** (πιο δημοφιλές, περισσότερα features).
