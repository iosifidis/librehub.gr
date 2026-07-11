---
title: "Checkmk"
alternative_to: ["Nagios XI (commercial)", "SolarWinds (commercial)"]
categories: ["Παραγωγικότητα", "Εργαλεία", "Παρακολούθηση"]
website: "https://checkmk.com/"
logo: "/images/checkmk.png"
license: "GPL-2.0 (Raw Edition), Commercial (Enterprise, Cloud)"
description: "Ολοκληρωμένο σύστημα παρακολούθησης υποδομών που συνδυάζει την ευελιξία του Nagios (plugins) με μια σύγχρονη web UI, αυτόματη ανακάλυψη, agent-based και agentless monitoring, distributed setup, και ενσωματωμένη γραφική παρουσίαση. Το Checkmk Raw Edition (CRE) είναι πλήρως open source."
featured: false
---

Το Checkmk ξεκίνησε ως "Nagios wrapper" (2009) και εξελίχθηκε σε αυτόνομο monitoring system με δικό του agent και web UI. Υποστηρίζει monitoring servers, network devices, cloud, containers (Docker, Kubernetes), databases, applications. Είναι δημοφιλές για την **ταχύτητα** (πολλαπλά checks ανά λεπτό) και την **ευκολία διαμόρφωσης** (μέσω GUI rule-based).

**Βασικές Δυνατότητες:**

- **Data Collection (Agent-based, SNMP, agents for Windows/Linux/Unix, special agents for VMware, AWS, etc.)**
- **Auto-discovery (Service discovery):** Ανιχνεύει αυτόματα services (MySQL, Apache, network interfaces) σε ένα host.
- **GUI Configuration (Rule-based):** Δημιουργία rules (π.χ. "apply disk check on all Linux hosts with threshold 90%"). Αλλάζετε μια rule και εφαρμόζεται σε πολλά hosts.
- **User-friendly Dashboard & Views (Customizable).**
- **Distributed Monitoring (Remote sites).**
- **Event Console (Syslog, SNMP traps).**
- **Reporting (PDF reports).**
- **Notifications via email, Slack, PagerDuty, κλπ.**

**Checkmk vs Zabbix (απόψεις χρηστών):**

| Χαρακτηριστικό | Checkmk (Raw) | Zabbix |
|---|---|---|
| **Ευκολία διαμόρφωσης (Setup)** | ✅ (Rule-based GUI) | Μέτρια (GUI + templates) |
| **Agent (μοναδικό χαρακτηριστικό)** | Checkmk agent (πολύ ελαφρύ) | Zabbix agent |
| **Custom checks (scripts)** | ✅ (Nagios plugins compatible) | ✅ (User parameters) |
| **Scalability (Big environments)** | ✅ (site distributed) | ✅ (proxy) |

> **Σημείωση:** Το Checkmk Raw Edition είναι μια πολύ καλή εναλλακτική για όσους θέλουν "Nagios without the complexity". Για enterprise features (SLA reporting, advanced dashboards, support), υπάρχει Checkmk Enterprise (Commercial).
