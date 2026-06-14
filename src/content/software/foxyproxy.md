---
title: "FoxyProxy (Proxy Management for Browsers)"
alternative_to: ["SwitchyOmega (Proxy switcher)", "Manual proxy configuration (browser settings)"]
categories: ["Ιδιωτικότητα", "Εργαλεία", "Πλοήγηση"]
website: "https://getfoxyproxy.org/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Πρόσθετο για Firefox, Chrome, και Edge για προηγμένη διαχείριση proxy (SOCKS, HTTP, HTTPS, FTP). Σας επιτρέπει να ορίζετε πολλαπλούς proxy servers και να εναλλάσσεστε μεταξύ τους με ένα κλικ. Υποστηρίζει patterns (wildcards, regular expressions) για αυτόματη επιλογή proxy ανάλογα με το domain (pattern-based proxy switching). Ιδανικό για χρήστες Tor, VPNs, ή αποκλεισμένους ιστότοπους."
featured: false
---

Το FoxyProxy είναι ένα εργαλείο αυτοματισμού proxy: αντί να αλλάζετε χειροκίνητα (Settings -> Network -> Proxy), μπορείτε να ορίσετε κανόνες (π.χ. use Tor (SOCKS5) for *.onion, use Work Proxy for *.company.com, use Direct for everything else). Υπάρχει FoxyProxy Standard (free) και FoxyProxy Basic (simpler version).

**Βασικές Δυνατότητες:**

- **Proxy Profiles (πολλαπλά profiles):** SOCKS4, SOCKS5, HTTP, HTTPS, FTP, (Tor, SSH tunnel, commercial proxies).
- **Pattern-based rules (Url matching):**
    - Wildcards (`*.google.com`, `*wikipedia*`)
    - Regular Expressions (`^https?://(.*\.)?example\.com`)
    - White/blacklist.
- **Quick switch toolbar button (cycling through profiles).**
- **Logging (βλέπετε ποια proxy χρησιμοποιήθηκε για κάθε domain).**
- **Import/Export settings.**
- **Color-coded toolbar icon** (ένδειξη ενεργού proxy).

**FoxyProxy vs SwitchyOmega:**

| Χαρακτηριστικό | FoxyProxy | Proxy SwitchyOmega |
|---|---|---|
| **Platforms** | Firefox, Chrome, Edge | Chrome, Firefox, Edge |
| **Pattern matching (regex)** | ✅ | ✅ |
| **PAC script support** | ✅ (auto) | ✅ (auto) |
| **User interface** | Παραδοσιακό, λειτουργικό | Μοντέρνο, γυάλινο |
| **Popularity (Chrome Web Store)** | 500k+ users | 2M+ users |

> **Σημείωση:** Και τα δύο είναι εξαιρετικά. Το **SwitchyOmega** (δεν είναι open source; repository archived) είναι πιο μοντέρνο. Το FoxyProxy (open source) είναι πιο παλιό και σταθερό. Για περιβάλλον Tor (SOCKS5), και τα δύο λειτουργούν.
