---
title: "Gatus (Health Dashboard)"
alternative_to: ["Uptime Kuma (UI-focused)", "Better Stack (commercial)", "Prometheus + Blackbox Exporter (heavy stack)", "Pingdom (commercial)"]
categories: ["Παρακολούθηση", "Εργαλεία", "Cloud"]
website: "https://github.com/TwiN/gatus"
logo: "/images/placeholder.svg"
license: "Apache-2.0"
description: "Ένα ελαφρύ, εξαιρετικά παραμετροποιήσιμο εργαλείο υγείας και παρακολούθησης (health dashboard) σχεδιασμένο για developers. Χρησιμοποιεί YAML configuration για δηλωτική παρακολούθηση (GitOps) και υποστηρίζει advanced health checks (HTTP, ICMP, TCP, DNS, gRPC, WebSocket, SSH) με custom conditions (JSON path, certificate expiry, response time). Διαθέτει built-in status page, alerts (Slack, Discord, PagerDuty, Teams, Webhook, κ.ά.), και μηδενική εξάρτηση από database (SQLite)."
featured: true
---

Το Gatus (από τον TwiN) είναι ένας "υβριδικός" monitoring server που ξεχωρίζει γιατί ενώνει δύο κόσμους: την απλότητα και την ταχύτητα του Go με την ευελιξία ενός ισχυρού συστήματος ελέγχων . Σε αντίθεση με τα Uptime Kuma (UI-based), το Gatus είναι **declarative**: όλη η ρύθμιση (monitors, alerts, conditions) γίνεται σε ένα μόνο αρχείο YAML, που μπορεί να μπει σε git . Αυτό το καθιστά ιδανικό για ομάδες που εφαρμόζουν GitOps (ArgoCD, Terraform) .

**Βασικές Διαφορές & Πλεονεκτήματα (vs Uptime Kuma):**

| Χαρακτηριστικό | Gatus | Uptime Kuma |
|---|---|---|
| **Προσέγγιση** | Configuration as Code (YAML)  | UI-based (SQLite) |
| **GitOps / Version Control** | ✅ (Φυσική ενσωμάτωση) | ❌ (Config stored in DB) |
| **Advanced Conditions** | ✅ (Response body JSON path, certificate, IP)  | ✅ (αλλά λιγότερο προχωρημένο) |
| **Resource Usage** | ~30MB RAM (Go binary)  | ~150-200MB RAM (Node.js) |
| **Status Page** | ✅ (built-in, customizable) | ✅ (built-in) |
| **Multi-step APIs (Suites)** | ✅ (Sequential requests with context)  | ❌ |

**Βασικές Λειτουργίες & Προηγμένες Δυνατότητες:**

- **Declarative Configuration (YAML):** Ορίζεις το monitoring σου ως κώδικα. Το μόνο που χρειάζεται είναι ένα config.yaml και το binary .
```yaml
    endpoints:
      - name: "API Gateway"
        url: "https://api.example.com/health"
        interval: 60s
        conditions:
          - "[STATUS] == 200"
          - "[RESPONSE_TIME] < 500"
          - "[CERTIFICATE_EXPIRATION] > 168h" # SSL expiration warning
```
- **Advanced Probing & Assertions:** Υποστηρίζει κάθε είδους validation, από status code και response time, μέχρι regex στο body, XPath, και έλεγχο JSON (π.χ. `[BODY].status == UP`) .
- **CoreDNS & Low-level Checks:** Μπορεί να κάνει check μέσω DNS queries, TCP connection, ICMP (ping), SSH, gRPC, και STARTTLS .
- **Context-aware Monitoring (Suites):** Μια μοναδική λειτουργία που επιτρέπει την αλυσιδωτή εκτέλεση ελέγχων. Μπορείς να προσομοιώσεις ροές εργασίας (π.χ. Login -> Get Resource -> Logout) και να περάσεις δεδομένων (π.χ. session token) μεταξύ των βημάτων .
- **Alerting:** Υποστηρίζει 25+ alerting providers (Slack, Discord, PagerDuty, Teams, Opsgenie, Twilio, Webhook) .
- **Metrics & API:** Εκθέτει metrics σε μορφή Prometheus (endpoint `/metrics`) και διαθέτει REST API (`/api/v1/endpoints/statuses`) για να τραβάς τα δεδομένα .

**Πότε να επιλέξεις Gatus:**
- Είσαι **DevOps/SRE** και θες να διαχειρίζεσαι το monitoring σου μέσα από Git .
- Θες να κάνεις **API workflow validation** (multi-step) όχι απλά uptime check .
- Θες να τρέχεις monitoring σε **περιβάλλοντα με περιορισμένους πόρους** (π.χ. Raspberry Pi, μικρά VPS) .
- Είσαι χρήστης Prometheus αλλά το blackbox exporter σου φαίνεται βαρύ και δύσκολο στη συντήρηση .

> **Σημείωση:** Το Gatus απευθύνεται σε **developers και SREs**. Αν θέλεις μια λύση που να μπορεί να ρυθμιστεί από έναν project manager ή δίνεις access σε πελάτες, το Uptime Kuma (με το γραφικό του UI) είναι πιο φιλικό . Αντίθετα, αν το monitoring σου είναι "infrastructure as code", το Gatus είναι η ιδανική λύση.
```
