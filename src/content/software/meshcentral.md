---
title: "MeshCentral (Remote Management)"
alternative_to: ["TeamViewer (commercial)", "LogMeIn (commercial)", "AnyDesk (commercial)", "Splashtop (commercial)"]
categories: ["Απομακρυσμένη Πρόσβαση", "Εργαλεία", "Δίκτυα"]
website: "https://meshcentral.com/"
logo: "/images/placeholder.svg"
license: "Apache-2.0"
description: "Μια πλήρης, web-based πλατφόρμα ανοιχτού κώδικα για απομακρυσμένη διαχείριση και υποστήριξη υπολογιστών μέσω διαδικτύου (Remote Monitoring and Management - RMM). Σας επιτρέπει να ελέγχετε την επιφάνεια εργασίας (remote desktop), κονσόλα, μεταφορά αρχείων, τερματισμό λειτουργιών, και εκτέλεση εντολών, όλα μέσω browser. Υποστηρίζει πολλαπλούς χρήστες, 2FA, πύλες (relays), και ενσωμάτωση με Intel AMT (vPro). Ιδανική για MSPs (Managed Service Providers) και IT διαχειριστές."
featured: true
---

Το MeshCentral είναι ένα πλήρες σύστημα απομακρυσμένης διαχείρισης (remote administration), σχεδιασμένο για να αντικαταστήσει εμπορικά εργαλεία TeamViewer/LogMeIn. Είναι αυτο-φιλοξενούμενο (self-hosted) ή cloud (MeshCentral.com). Υποστηρίζει Windows, Linux, macOS, FreeBSD, και ακόμα Intel AMT (vPro) hardware management.

**Βασικές Λειτουργίες:**

- **Remote Desktop (web-based):** Προβολή και έλεγχος της επιφάνειας εργασίας (VNC, RDP, or Intel AMT KVM) μέσα από browser (HTML5). Υποστήριξη πολλαπλών οθονών.
- **Terminal (SSH/CMD) & Shell Access.**
- **File Transfer (upload/download) μεταξύ client και server.**
- **Power Management (shutdown, restart, wake-on-LAN).**
- **Script Execution (PowerShell, Bash) σε απομακρυσμένα συστήματα, με αποτελέσματα (output).**
- **Intel AMT (vPro) integration:** Διαχείριση εκτός σύνδεσης (Out-of-Band) ακόμα και αν το OS δεν ανταποκρίνεται (KVM, power cycle, boot from ISO).
- **Group Policy (προφίλ ομάδων):** Αυτοματοποιημένη ρύθμιση νέων εγκαταστάσεων agent.
- **Multi-tenancy (Support για πολλούς πελάτες/MSPs).**
- **User permissions (granular access control).**
- **2FA, LDAP, Active Directory integration.**
- **Mobile apps (view only).**

**MeshCentral vs TeamViewer (Self-hosted advantage):**

| Χαρακτηριστικό | MeshCentral (Self-hosted) | TeamViewer (Business) |
|---|---|---|
| **Κόστος (100 endpoints)** | Δωρεάν (hosting cost) | ~$400/έτος+ |
| **Data privacy** | ✅ (πλήρης έλεγχος) | ❌ (TeamViewer servers) |
| **Web-based (HTML5)** | ✅ (πλήρης διαχείριση) | ⚠️ (περιορισμένη) |
| **Intel AMT (vPro)** | ✅ (ενσωματωμένο) | ❌ |
| **Mobile app (full control)** | ⚠️ (web app view-only) | ✅ |

> **Σημείωση:** Το MeshCentral είναι η καλύτερη open-source επιλογή για remote management, ειδικά αν έχετε Infrastructure με Intel vPro ή θέλετε να αποφύγετε τα έξοδα TeamViewer. Η εγκατάσταση γίνεται εύκολα (Node.js + MongoDB ή NeDB).
