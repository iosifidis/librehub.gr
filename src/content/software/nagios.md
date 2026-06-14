---
title: "Nagios Core"
alternative_to: ["SolarWinds (commercial)", "Datadog (commercial)", "Zabbix (alternative)"]
categories: ["Παραγωγικότητα", "Εργαλεία", "Παρακολούθηση"]
website: "https://www.nagios.org/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Το βιομηχανικό πρότυπο ανοιχτού κώδικα για παρακολούθηση IT υποδομών (monitoring). Παρακολουθεί servers, networks, applications, services, και συσκευές δικτύου (routers, switches). Χρησιμοποιεί plugins (5.000+ community addons) για να ελέγχει uptime, απόκριση (response time), disk usage, CPU load, memory, service status, κλπ. Ειδοποιεί μέσω email, SMS, Slack, κλπ. όταν ανιχνεύεται πρόβλημα."
featured: true
---

Το Nagios Core είναι το πιο δημοφιλές open-source σύστημα παρακολούθησης IT υποδομών, με πάνω από 25 χρόνια ζωής. Είναι η "μηχανή" πίσω από πολλές εμπορικές λύσεις (Nagios XI). Η δύναμή του βρίσκεται στην **αρχιτεκτονική plugins**: ο πυρήνας (Nagios Core) είναι απλός, και κάθε έλεγχος (π.χ. check ping, check HTTP, check disk) γίνεται μέσω ενός script (plugin). Υπάρχουν χιλιάδες έτοιμα plugins στο Nagios Exchange, καλύπτοντας κάθε δυνατή συσκευή ή υπηρεσία.

**Βασικές Λειτουργίες:**

- **Host & Service Monitoring:** Ορίζετε hosts (servers, routers) και services (HTTP, SSH, SMTP, disk, load, κλπ.) που ελέγχονται περιοδικά.
- **Alerting (Ειδοποιήσεις):** Όταν ένα service είναι "critical" ή "warning", στέλνει notifications (email, SMS, custom script). Υποστηρίζει escalation (αν δεν επιλυθεί, ειδοποιεί ανώτερους).
- **Passive Checks (NRDP, NSCA):** Μπορείτε να στέλνετε results από remote agents (NRPE, NCPA) ή external applications.
- **Graphing & Reporting:** Βασικές γραφικές παραστάσεις (performance data) με integration με PNP4Nagios, Grafana, ή NagVis (plugins).
- **Event Handlers (Αυτοματισμοί):** Εκτέλεση script όταν ένα service αλλάξει κατάσταση (π.χ. restart υπηρεσία αυτόματα).
- **Distributed Monitoring (Multi-site):** Παρακολούθηση υποκαταστημάτων μέσω passive checks (NSCA) ή distributed Nagios instances.

**Nagios Core vs Zabbix (γρήγορη σύγκριση):**

| Χαρακτηριστικό | Nagios Core | Zabbix |
|---|---|---|
| **Database support** | Τυπικά MySQL/PostgreSQL (via plugin) | MySQL/PostgreSQL/Oracle (native) |
| **Web UI (built-in)** | ⚠️ (βασικό, "classic UI") | ✅ (σύγχρονο, αναβαθμισμένο) |
| **Auto-discovery (υπηρεσιών)** | ⚠️ (απαιτεί plugins) | ✅ (native) |
| **Distributed monitoring** | ⚠️ (μέσω mod-gearman ή εξωτερικά) | ✅ (Zabbix proxy) |
| **Learning curve** | Απότομη (config files) | Μέτρια (Web UI configuration) |

> **Σημείωση:** Το Nagios Core εξακολουθεί να χρησιμοποιείται ευρέως, ειδικά σε περιβάλλοντα που απαιτούν ευελιξία (custom plugins). Ωστόσο, το **Zabbix** (νεότερο, με σύγχρονο UI) και το **Checkmk** (πιο εύκολο) κερδίζουν έδαφος. Για enterprise, η εμπορική έκδοση Nagios XI (βασισμένη στο Core) προσφέρει GUI configuration, dashboards, and support.
