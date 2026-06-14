---
title: "OpenVAS (Greenbone Vulnerability Manager)"
alternative_to: ["Tenable Nessus (commercial)", "Qualys (commercial)", "Rapid7 Nexpose (commercial)"]
categories: ["Ασφάλεια", "Εργαλεία", "Παρακολούθηση"]
website: "https://www.openvas.org/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Το κορυφαίο open-source πλαίσιο ανίχνευσης ευπαθειών για δίκτυα, servers, web applications, και συσκευές. Αποτελεί τον πυρήνα της λύσης Greenbone Vulnerability Management (GVM). Εκτελεί πάνω από 50.000 δοκιμές ευπαθειών (NVT - Network Vulnerability Tests), βασισμένες σε βάση δεδομένων που ενημερώνεται συχνά. Χρησιμοποιείται για compliance (PCI DSS, GDPR) και προληπτική ασφάλεια."
featured: true
---

Το OpenVAS (Open Vulnerability Assessment System) είναι η δημοφιλέστερη open-source εναλλακτική του Nessus (Tenable). Σαρώνει δίκτυα και hosts για γνωστά vulnerabilities (CVE), λανθασμένες ρυθμίσεις (misconfigurations), αδύναμους κωδικούς (weak passwords), outdated software, κλπ. Η μηχανή του OpenVAS έχει πάνω από 50.000 δοκιμές, που ενημερώνονται τακτικά (μέσω Greenbone Community Feed, ελεύθερο, με 24-48h καθυστέρηση έναντι commercial).

**Βασικές Λειτουργίες (Greenbone Community Edition):**

- **Vulnerability Scanning:** Port scanning (Nmap-like), service detection, CVE/CWE checks, OWASP Top 10 (web εφαρμογές).
- **Targets (Scanning):** Hosts, δίκτυα (CIDR), domain names, με authenticated scanning (μέσω SSH, SMB, SNMP) για βαθύτερους ελέγχους.
- **Reports:** Detailed vulnerability reports (PDF, HTML, XML, CSV) με CVSS scores, περιγραφές, και recommendations.
- **Scheduling (Προγραμματισμός) scans.**
- **Greenbone Security Manager (GSM) Web UI (GSA).**
- **Greenbone Community Feed:** Δωρεάν updates (σχεδόν καθημερινά) με NVTs (Network Vulnerability Tests) και συσχετισμούς.
- **REST API (GVM).**

**OpenVAS vs Nessus (Commercial):**

| Χαρακτηριστικό | OpenVAS (GVM) | Tenable Nessus |
|---|---|---|
| **Κόστος** | Δωρεάν | $2.500+/έτος (Professional) |
| **Number of plugins (NVTs)** | ~50.000 | ~100.000 |
| **Zero-day vulnerability response** | Μέτρια (24-48h καθυστέρηση) | Πολύ γρήγορη (ώρες) |
| **Web UI (που έρχεται)** | GSA (βασικό) | Nessus UI (πλουσιότερο) |
| **Compliance scanning (PCI, HIPAA)** | ✅ (βασικό) | ✅ (προσαρμοσμένο) |

> **Σημείωση:** Το OpenVAS είναι ισχυρό, αλλά η εγκατάσταση είναι πολύπλοκη (συνιστάται η χρήση του Greenbone Community Container ή εφαρμογών όπως **Security Onion**). Για μικρές υποδομές, μπορείτε να χρησιμοποιήσετε **Nuclei** (fast template-based scanner) ή **Lynis** (για local hardening).
