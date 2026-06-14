---
title: "ThingsBoard (Open-source IoT Platform)"
alternative_to: ["AWS IoT Core (cloud, commercial)", "Azure IoT Hub (commercial)", "Google Cloud IoT (deprecated)", "Datadog IoT (commercial)"]
categories: ["IoT", "Cloud", "Ανάλυση Δεδομένων", "Παρακολούθηση"]
website: "https://thingsboard.io/"
logo: "/images/placeholder.svg"
license: "Apache-2.0 (Community Edition), Commercial (Professional Edition)"
description: "Η κορυφαία open-source πλατφόρμα IoT για συλλογή, επεξεργασία, οπτικοποίηση δεδομένων (telemetry), διαχείριση συσκευών (device management), και κανόνες (rule engine). Υποστηρίζει MQTT, CoAP, HTTP, LwM2M, SNMP, και IoT Gateway (Modbus, BACnet, CAN, OPC-UA). Ιδανική για smart energy, fleet management, industrial IoT, smart farming, and environmental monitoring. Τρέχει on-premise ή στο cloud, με δυνατότητα scaling σε εκατομμύρια συσκευές."
featured: true
---

Το ThingsBoard είναι μια πλήρης, enterprise-grade πλατφόρμα IoT ανοιχτού κώδικα. Σχεδιάστηκε για να γεφυρώσει το χάσμα μεταξύ πρωτοτύπου (prototype) και παραγωγής (production), δίνοντας λύσεις για device connectivity, data processing, visualization, και alarm management. Σε αντίθεση με λύσεις hyperscaler (AWS IoT, Azure IoT), το ThingsBoard μπορεί να τρέξει on-premise (πλήρης έλεγχος δεδομένων) χωρίς vendor lock-in.

**Βασικές Λειτουργίες (IoT Core):**

- **Device Connectivity (Πρωτόκολλα):** Native support για MQTT, CoAP, HTTP, LwM2M, SNMP. Μέσω IoT Gateway υποστηρίζει Modbus, BACnet, CAN, OPC-UA, BLE.
- **Device Management (Διαχείριση συσκευών):** Provisioning, credentials (X.509, access token), remote configuration (attributes), RPC (server-side remote commands, π.χ. toggle relay), OTA updates (firmware/software).
- **Telemetry Collection (Συλλογή μετρήσεων):** Αποθήκευση time-series δεδομένων (μέτρηση θερμοκρασίας, υγρασίας, θέσης GPS) με δυνατότητα retention policies.
- **Data Processing (Rule Engine):** Low-code rule engine (drag-and-drop) για μετασχηματισμό δεδομένων, έλεγχο alarms, forwarding σε εξωτερικά συστήματα (Kafka, RabbitMQ, HTTP). Υποστήριξη custom rule nodes (JavaScript).
- **Alarms & Notifications (Συναγερμοί):** Ορισμός thresholds (π.χ. temperature > 50°C), δημιουργία alarms, αποστολή email/SMS/Slack/Teams.
- **Dashboards (Visualization):** 300+ built-in widgets (charts, gauges, maps) και custom widgets (JavaScript/CSS). Real-time και historical data visualization.
- **Multi-tenancy:** Απομόνωση δεδομένων μεταξύ πελατών (tenants) – ιδανικό για IoT service providers.
- **ThingsBoard Edge:** Decentralized component που επεξεργάζεται δεδομένα τοπικά (on-premise) και συγχρονίζει insights με το cloud (hybrid architecture).

**Εκδόσεις & Κόστος:**

| Έκδοση | Άδεια | Κατάλληλο για |
|---|---|---|
| **Community Edition (CE)** | Apache-2.0 | Μικρές εγκαταστάσεις (έως 10 συσκευές), self-hosted, δωρεάν. |
| **Professional Edition (PE)** | Commercial (subscription) | Επιχειρήσεις, υποστήριξη, advanced analytics, white-labeling, audits. |
| **ThingsBoard Cloud** | Commercial (SaaS) | Hosted λύση, pay-as-you-grow (από $500/μήνα) |

**ThingsBoard vs AWS IoT Core (Cost/Control):**

| Χαρακτηριστικό | ThingsBoard (CE, self-hosted) | AWS IoT Core |
|---|---|---|
| **Κόστος (1.000 devices)** | $0 (hosting cost ~$50-100/μήνα) | ~$53/μήνα (μόνο messaging, 2025 analysis) |
| **Data ownership** | ✅ (πλήρης) | ❌ |
| **Scalability** | ✅ (horizontal scaling, microservices) | ✅ (hyperscale) |
| **Edge computing** | ✅ (ThingsBoard Edge) | ✅ (AWS IoT Greengrass) |
| **Protocol support** | MQTT, CoAP, HTTP, LwM2M, SNMP, Modbus, BACnet, CAN (via Gateway) | MQTT, HTTPS, LoRaWAN (via 3rd party) |
| **Lock-in** | ❌ | ✅ (vendor lock-in) |

**Περιπτώσεις Χρήσης:**

- **Smart Energy:** Παρακολούθηση κατανάλωσης ηλεκτρισμού, ανανεώσιμες πηγές (solar/wind).
- **Fleet Management (στόλοι οχημάτων):** GPS tracking, geofencing, predictive maintenance.
- **Industrial IoT (IIoT):** Σύνδεση PLCs (Modbus, OPC-UA), SCADA integration, predictive analytics.
- **Smart Farming:** Αισθητήρες υγρασίας εδάφους, αυτοματοποιημένα ποτίσματα.

> **Σημείωση:** Το ThingsBoard Community Edition είναι η κορυφαία open-source επιλογή για IoT projects (από proof-of-concept έως παραγωγή με χιλιάδες συσκευές). Δεν έχει τόσο πλούσιο ecosystem όσο AWS IoT, αλλά δίνει πλήρη έλεγχο και αποφεύγει vendor lock-in.
