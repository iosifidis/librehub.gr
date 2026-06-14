---
title: "iptables (Linux Firewall)"
alternative_to: ["firewalld (dynamic, frontend)", "Cisco ASA (hardware)", "pf (BSD)"]
categories: ["Ασφάλεια", "Δίκτυα", "Λειτουργικά Συστήματα"]
website: "https://netfilter.org/projects/iptables/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Το κλασικό, πανίσχυρο εργαλείο διαμόρφωσης του τείχους προστασίας (firewall) στον πυρήνα του Linux (Netfilter). Επιτρέπει την δημιουργία κανόνων (rules) για το φιλτράρισμα πακέτων (filter), NAT, και mangle. Υποστηρίζει IPv4 (iptables) και IPv6 (ip6tables). Είναι η θεμελιώδης τεχνολογία πίσω από πολλά frontends (UFW, firewalld). Σταδιακά αντικαθίσταται από το nftables (Linux kernel 3.13+), αλλά παραμένει ευρέως χρησιμοποιούμενο."
featured: false
---

Το iptables είναι το low-level εργαλείο για τον ορισμό κανόνων πυρήνα Netfilter. Λειτουργεί με **πίνακες (tables)** και **αλυσίδες (chains)**. Βασικοί πίνακες:

- **filter (default):** φιλτράρισμα πακέτων (INPUT, OUTPUT, FORWARD).
- **nat:** Network Address Translation (PREROUTING, POSTROUTING).
- **mangle:** Ειδικές τροποποιήσεις πακέτων (TTL, ToS).
- **raw:** configuration exemptions από connection tracking.

**Βασικές Έννοιες & Παράδειγμα:**

- **Rules:** `iptables -A INPUT -p tcp --dport 22 -j ACCEPT` (δέξου SSH).
- **Policy (default):** `iptables -P INPUT DROP` (απόρριψε όλα όσα δεν ταιριάζουν).
- **Stateful inspection (connection tracking):** `-m state --state ESTABLISHED,RELATED` (αποδοχή επιστροφής).

**iptables vs nftables:**

| Χαρακτηριστικό | iptables | nftables |
|---|---|---|
| **Linux kernel version** | 2.4+ (legacy) | 3.13+ (recommended for new) |
| **Syntax** | Περίπλοκη (πολλά flags) | Simpler (unified) |
| **Performance** | Καλό | Καλύτερο (λιγότερη duplication) |
| **Backward compatibility** | N/A | Includes `iptables-translate` |
| **Atomic rule updates** | ❌ (risk of packet loss) | ✅ |

> **Σημείωση:** Αν γράφετε νέα scripts firewall, προτιμήστε **nftables** (αν η distribution σας το υποστηρίζει). Ωστόσο, η γνώση iptables παραμένει απαραίτητη για legacy συστήματα και πολλά cloud environments.
