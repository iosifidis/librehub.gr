---
title: "OWASP Maryam (OSINT Framework)"
alternative_to: ["Maltego (commercial)", "theHarvester (OSINT)", "Recon-ng (OSINT)"]
categories: ["Ασφάλεια", "Εργαλεία", "Παρακολούθηση"]
website: "https://github.com/saeeddhqan/Maryam"
logo: "/images/placeholder.svg"
license: "GPL-3.0"
description: "Ισχυρό, modular πλαίσιο OSINT (Open Source Intelligence) ανοιχτού κώδικα, βασισμένο στο OWASP project. Συλλέγει πληροφορίες από δημόσιες πηγές (search engines, social media, DNS records, whois, web archives, κλπ.) για έναν στόχο (domain, email, person). Χρησιμοποιείται από security researchers, penetration testers, και investigative journalists για την συλλογή ψηφιακών αποτυπωμάτων (digital footprints) χωρίς να καλεί APIs (όπου είναι δυνατόν)."
featured: false
---

Το OWASP Maryam (προφέρεται "Maryam", που σημαίνει "Miriam" ή "νόσος" στα αραβικά? ) είναι ένα εργαλείο γραμμής εντολών (CLI) γραμμένο σε Python (κυρίως). Ανήκει στο OWASP (Open Web Application Security Project) και παρέχει modules για:

- **Web Search Engines:** Google, Bing, Yahoo, Yandex, Baidu, Ask, κλπ. (με scraping, χωρίς API keys).
- **Social Media:** Twitter, Instagram (περιορισμένα λόγω rate limiting), Facebook, LinkedIn (βασική).
- **DNS recon:** DNS lookup, reverse DNS, subdomain enumeration (via brute force ή virus total).
- **Whois lookup:** Domain registration details.
- **Email reconnaissance (theHarvester-like).**
- **Web archives (Wayback Machine).**
- **Document meta-data extraction (PDF, DOC, XLS).**
- **Shodan (IoT device search) integration (requires API key).**

**Βασικές Λειτουργίες (Modules):**

- **Modules structure (επέκταση με νέα modules).**
- **Output formats (JSON, CSV, HTML).**
- **Built-in web UI (BETA) για ευκολότερη χρήση.**
- **Proxy support (TOR, SOCKS).**

**Maryam vs theHarvester vs Maltego:**

| Εργαλείο | Τύπος | Χαρακτηριστικά |
|---|---|---|
| **Maryam** | CLI (Python) | Modules for search engines, DNS, email, web archives. Λιγότερο δημοφιλές. |
| **theHarvester** | CLI (Python) | Εξειδικευμένο σε emails, subdomains, PGP keys (πιο συνηθισμένο). |
| **Recon-ng** | CLI (Python framework) | Πλήρες framework, marketplace modules (πιο ισχυρό, αλλά μεγαλύτερη καμπύλη). |
| **Maltego** | GUI (commercial) | Graph-based, visual link analysis, transformers (πληρώνεις). |

> **Σημείωση:** Το Maryam είναι χρήσιμο για pentesters και ερευνητές που θέλουν ένα lightweight, modular OSINT εργαλείο. Ωστόσο, το **Recon-ng** (επίσης open source) είναι πιο δημοφιλές και ενεργό (περισσότερες πηγές). Για γραφική απεικόνιση (graph), το **Maltego CE** (Community Edition, δωρεάν αλλά περιορισμένο) ή το **SpiderFoot** (web UI) είναι καλές εναλλακτικές.
