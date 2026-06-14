---
title: "openITCOCKPIT"
alternative_to: ["Nagios XI (commercial)", "Checkmk Enterprise"]
categories: ["Παραγωγικότητα", "Εργαλεία", "Παρακολούθηση"]
website: "https://openitcockpit.io/"
logo: "/images/placeholder.svg"
license: "GPL-3.0"
description: "Πλατφόρμα παρακολούθησης υποδομών ανοιχτού κώδικα που συνδυάζει διάφορα εργαλεία (Nagios, Prometheus, Graphite, InfluxDB) σε μια ενιαία, σύγχρονη web διεπαφή (dashboard, reporting, maps). Χρησιμοποιεί ως backend Nagios (engine) ή Prometheus (μέσω Grafana). Παρέχει configuration management (CMDB), SLA reports, και distributed monitoring."
featured: false
---

Το openITCOCKPIT είναι μια "υβριδική" πλατφόρμα που στοχεύει να απλοποιήσει τη διαχείριση monitoring. Αντί να διαμορφώνετε ξεχωριστά Nagios, Prometheus, Grafana, το openITCOCKPIT παρέχει μια ενοποιημένη διεπαφή. Μπορείτε να παρακολουθείτε με Nagios checks (plugins) και ταυτόχρονα να συλλέγετε time-series metrics (μέσω Graphite/InfluxDB) για γραφικές παραστάσεις (όπως Prometheus).

**Βασικά Χαρακτηριστικά:**

- **Backend (Nagios Core + Prometheus):** Υποστήριξη classic checks (plugins) και modern metrics (PromQL).
- **CMDB (Configuration Management Database):** Διαχείριση hosts, groups, templates, rules (αντί για config files).
- **Web UI (React-based):** Dashboards, charts (grafana integration), monitoring maps, host/service browser.
- **Role-Based Access Control (RBAC):** Διαχείριση χρηστών με permissions.
- **Distributed Monitoring (Satellites):** Remote instances που στέλνουν δεδομένα στο κεντρικό server.
- **Reporting (PDF, SLA reports).**
- **API (REST).**

> **Σημείωση:** Το openITCOCKPIT είναι λιγότερο δημοφιλές από Zabbix/Checkmk, αλλά χρήσιμο για οργανισμούς που ήδη χρησιμοποιούν Nagios (και θέλουν μοντέρνο UI) ή θέλουν να συνδυάσουν classic checks με time-series.
