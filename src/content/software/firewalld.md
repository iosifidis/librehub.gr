---
title: "firewalld (Dynamic Firewall Manager)"
alternative_to: ["iptables (traditional, less dynamic)", "nftables (newer, firewalld can use as backend)", "UFW (simpler, Ubuntu)"]
categories: ["Ασφάλεια", "Δίκτυα", "Λειτουργικά Συστήματα"]
website: "https://firewalld.org/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Δυναμικός διαχειριστής τείχους προστασίας (firewall) για Linux (default in Red Hat, CentOS, Fedora, SUSE). Υποστηρίζει ζώνες δικτύου (zones) που ορίζουν διαφορετικά επίπεδα εμπιστοσύνης (trust levels), επιτρέποντας την εύκολη εναλλαγή κανόνων (π.χ. 'public' vs 'home' vs 'internal'). Σε αντίθεση με το iptables (static, requires restart), το firewalld εφαρμόζει αλλαγές σε runtime χωρίς να διακόπτει υπάρχουσες συνδέσεις."
featured: false
---

Το firewalld είναι ένα frontend (daemon) για το netfilter του Linux kernel (iptables/nftables). Εισάγει την έννοια των **ζωνών (zones)**. Κάθε ζώνη έχει ένα σύνολο κανόνων (services, ports, protocols, masquerading, ICMP) και μπορείτε να αναθέσετε μια network interface (π.χ. eth0) σε μία ζώνη.

**Βασικές Έννοιες:**

- **Zones (προκαθορισμένες):** `drop` (απορρίπτει όλα), `block` (απορρίπτει με ICMP reject), `public` (default, δεν εμπιστεύεσαι άλλους υπολογιστές), `external` (NAT/masquerading), `home` (εμπιστεύεσαι), `internal` (εμπιστεύεσαι, για DMZ-like), `trusted` (αποδέχεται όλα).
- **Runtime vs Permanent configuration:** Οι αλλαγές μπορούν να είναι προσωρινές (runtime) ή μόνιμες (--permanent).
- **Services (προκαθορισμένα):** ssh, http, https, mysql, vnc-server, κλπ. (ορίζονται port/protocol).
- **Rich Rules (Advanced):** Σύνθετοι κανόνες (logging, source/destination IP, time-based).

**firewalld vs iptables vs UFW:**

| Χαρακτηριστικό | firewalld | iptables (legacy) | UFW (Ubuntu) |
|---|---|---|---|
| **Backend** | nftables ή iptables | netfilter (legacy) | iptables |
| **Dynamic (no restart)** | ✅ | ❌ (συνήθως requires restart) | ⚠️ (enable/disable) |
| **Zones** | ✅ | ❌ | ❌ |
| **Ευκολία χρήσης** | Μέτρια (requires CLI) | Απότομη | ✅ (απλή) |
| **Default distribution** | RHEL, Fedora, CentOS | Κάθε Linux (παλαιότερα) | Ubuntu |

> **Σημείωση:** Αν χρησιμοποιείτε RHEL/Fedora/CentOS, το firewalld είναι η προεπιλεγμένη λύση. Για Ubuntu, προτιμήστε UFW (απλό) ή iptables (άμεσο). Για νέα συστήματα, εξετάστε **nftables** (αντικατάσταση iptables).
