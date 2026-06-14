---
title: "torsocks (Torify applications)"
alternative_to: ["proxychains (similar, SOCKS4/5)", "tsocks (deprecated)", "SOCKS5 proxy configuration (manual)"]
categories: ["Ιδιωτικότητα", "Δίκτυα", "Ασφάλεια"]
website: "https://gitweb.torproject.org/torsocks.git"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Βιβλιοθήκη (LD_PRELOAD) που επιτρέπει σε εφαρμογές που υποστηρίζουν SOCKS (ή μπορούν να χρησιμοποιούν δίκτυο μέσω της libc) να δρομολογούν την κίνησή τους μέσω του δικτύου Tor, χωρίς να χρειάζεται να τροποποιηθεί η ίδια η εφαρμογή. Λειτουργεί δημιουργώντας SOCKS5 proxy (localhost:9050) και 'κολλάει' τις system calls. Ιδανικό για torify εφαρμογές που δεν υποστηρίζουν proxy (π.χ. old applications)."
featured: false
---

Το torsocks είναι ένα wrapper (παρόμοιο με `proxychains`), ειδικά σχεδιασμένο για Tor. Χρησιμοποιεί `LD_PRELOAD` για να περικλείσει τις συναρτήσεις δικτύου (`connect()`, `sendto()`, κλπ.) και να τις ανακατευθύνει μέσω Tor's SOCKS5 proxy. Δεν απαιτεί αλλαγές στην εφαρμογή.

**Πλεονεκτήματα έναντι proxychains:**

| Χαρακτηριστικό | torsocks | proxychains (ng) |
|---|---|---|
| **Designed for Tor** | ✅ (προβλέπει Tor ports, DNS via Tor) | ⚠️ (generic SOCKS) |
| **DNS resolution** | Μέσω Tor (αποτρέπει DNS leaks) | Προαιρετικά (πρέπει να ρυθμιστεί) |
| **UDP support** | ❌ (Tor δεν υποστηρίζει UDP) | ✅ (through proxy chain) |
| **Configuration** | Minimal (default :9050) | Πιο πολύπλοκο (multiple proxies) |

> **Σημείωση:** Χρησιμοποιήστε `torsocks` για torify εφαρμογές όπως `curl`, `wget`, `git`, `ssh` (για hidden services). Μην χρησιμοποιείτε για UDP-based apps (π.χ. gaming). Για γενικό SOCKS proxy wrapping, το `proxychains-ng` είναι πιο ευέλικτο.
