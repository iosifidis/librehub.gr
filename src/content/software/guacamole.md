---
title: "Apache Guacamole (Clientless Remote Desktop Gateway)"
alternative_to: ["Microsoft Remote Desktop Gateway (RD Gateway)", "Citrix Gateway (commercial)", "Cisco AnyConnect (VPN alternative)"]
categories: ["Απομακρυσμένη Πρόσβαση", "Ασφάλεια"]
website: "https://guacamole.apache.org/"
logo: "/images/placeholder.svg"
license: "Apache-2.0"
description: "Μια πύλη απομακρυσμένης επιφάνειας εργασίας που σας επιτρέπει να συνδέεστε σε RDP, SSH, VNC, και Kubernetes (K8s) servers **χωρίς την εγκατάσταση client**. Απαιτεί μόνο ένα browser (HTML5, WebSocket). Ο Guacamole server δρα ως γέφυρα (proxy) μεταξύ του browser και των backend servers. Ιδανικό για οργανισμούς που θέλουν να προσφέρουν ασφαλή πρόσβαση σε εσωτερικές υποδομές μέσω internet χωρίς VPN."
featured: true
---

Το Apache Guacamole είναι μια "clientless" λύση: οι τελικοί χρήστες δεν χρειάζεται να εγκαταστήσουν RDP client, SSH client, ή VPN. Ανοίγουν τον browser (https://guacamole.example.com), πιστοποιούνται, και βλέπουν μια λίστα από connections (RDP to Windows, SSH to Linux). Ο Guacamole χειρίζεται τα πρωτόκολλα και κάνει rendering σε HTML5.

**Βασικές Λειτουργίες:**

- **Protocol support:** RDP (Windows), SSH (Linux/Unix), VNC (any), Telnet, Kubernetes (K8s exec).
- **Multi-user & Authentication:** LDAP, Active Directory, OpenID Connect, SAML, Duo, TOTP (2FA), Header authentication (reverse proxy).
- **Recording & Auditing:** Καταγραφή (recording) των συνεδριών σε βίντεο (πολύ χρήσιμο για compliance).
- **Connection sharing (session sharing):** Πολλαπλοί χρήστες μπορούν να δουν την ίδια session.
- **File transfer (drag & drop)** μεταξύ client και remote machine (μέσω browser).
- **Clipboard sharing (copy-paste).**
- **SSH Key authentication.**
- **High availability (load balancing) & clustering (Guacamole + Tomcat + Redis).**

**Guacamole vs VPN:**

| Χαρακτηριστικό | Guacamole (Reverse Proxy) | VPN (π.χ. OpenVPN) |
|---|---|---|
| **Client software** | ❌ (only browser) | ✅ (OpenVPN client) |
| **Network-level access** | ❌ (εφαρμογές, μόνο RDP/SSH) | ✅ (full network access) |
| **Auditing (session recording)** | ✅ (εγγενή) | ❌ (must use separate logging) |
| **Multi-factor (2FA)** | ✅ (LDAP + TOTP) | ✅ (depends on configuration) |
| **Performance (latency)** | Χαμηλότερη (rendering επιπλέον) | Υψηλή (network level) |

> **Σημείωση:** Το Guacamole είναι ιδανικό για **secure access to jump servers (bastion)**, Windows admin (RDP), και dev environments (SSH) χωρίς VPN. Δεν αντικαθιστά το VPN (δεν δίνει network access), αλλά μειώνει την επιφάνεια επίθεσης (attack surface).
