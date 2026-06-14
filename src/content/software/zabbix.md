---
title: "Zabbix"
alternative_to: ["SolarWinds (commercial)", "Datadog (commercial)", "Nagios Core (traditional)", "PRTG (commercial)"]
categories: ["Παραγωγικότητα", "Εργαλεία", "Παρακολούθηση"]
website: "https://www.zabbix.com/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Enterprise-grade, open-source λύση παρακολούθησης για δίκτυα, διακομιστές (Linux, Windows, Unix), εφαρμογές, cloud υπηρεσίες (AWS, Azure), βάσεις δεδομένων, containers, και IoT συσκευές. Παρέχει αυτόματη ανακάλυψη, προηγμένες αναφορές, distributed monitoring (Zabbix proxy), web UI, και ισχυρό σύστημα ειδοποιήσεων."
featured: true
---

Το Zabbix είναι ο πιο σημαντικός ανταγωνιστής του Nagios Core, που ξεχωρίζει για την **ολοκληρωμένη λύση** (all-in-one). Ενώ το Nagios απαιτεί plugins για τα πάντα, το Zabbix έχει ενσωματωμένους ελέγχους για δημοφιλείς υπηρεσίες (HTTP, MySQL, PostgreSQL, JMX, IPMI, SNMP, κλπ.). Η διαμόρφωση γίνεται μέσω Web UI (αντί για αρχεία κειμένου) και υποστηρίζει auto-discovery (ανίχνευση νέων servers/services).

**Βασικές Δυνατότητες:**

- **Data Collection (Πολλαπλοί τρόποι):**
    - **Agent-based (Zabbix agent)** για Linux, Windows, Unix.
    - **Agentless (SNMP, JMX, IPMI, HTTP checks).**
    - **Trapper (passive checks):** Περιμένει δεδομένα από εξωτερικά scripts.
- **Auto-discovery (προσθήκη hosts αυτόματα) με βάση δίκτυο (network discovery) ή rule-based (agent detection).**
- **Web Monitoring (scenario-based):** Προσομοίωση browser (login, click links) και μέτρηση χρόνου απόκρισης.
- **Visualization (Dashboards, Graphs, Maps):** Custom dashboards, γεωγραφικοί χάρτες, network maps, screen sharing.
- **Alerting (Ειδοποιήσεις):** Email, SMS, Slack, Telegram, PagerDuty, custom webhooks, με escalation chains και recovery notifications.
- **Distributed Monitoring (Zabbix Proxy):** Proxy servers για remote locations (firewalled) – συγκεντρώνουν δεδομένα και τα στέλνουν στο central Zabbix server.
- **Trending & Forecasting:** Υπολογισμός τάσεων (forecasting) βασισμένο σε ιστορικά δεδομένα.
- **API (REST-like):** Πλήρης πρόσβαση για provisioning, reports, integration.
- **High Availability (Zabbix HA):** Automatic failover (6.0+).

**Zabbix vs Prometheus (Cloud-native monitoring):**

| Χαρακτηριστικό | Zabbix | Prometheus |
|---|---|---|
| **Primary use** | Traditional infrastructure monitoring | Cloud-native, Kubernetes, microservices |
| **Data model** | Time-series σε SQL DB | Custom TSDB (local disk) |
| **Pull vs Push** | Push (agent) + Pull (trapper) | Pull (HTTP) |
| **Built-in alerting** | ✅ (πλήρες, με escalation) | ✅ (Alertmanager) |
| **Long-term storage** | ✅ (SQL) | ⚠️ (μέσω Thanos/Cortex) |

> **Σημείωση:** Το Zabbix είναι η κορυφαία επιλογή για on-premise ή υβριδικά περιβάλλοντα (servers, VMs, networking gear). Για Kubernetes/microservices, το Prometheus + Grafana είναι πιο δημοφιλές. Το Zabbix έχει καμπύλη εκμάθησης (αλλά μικρότερη από Nagios).
