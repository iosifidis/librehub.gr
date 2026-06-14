---
title: "FreeRDP (Remote Desktop Protocol Client)"
alternative_to: ["Microsoft Remote Desktop Client (proprietary)", "Remmina (based on FreeRDP)", "xfreerdp CLI"]
categories: ["Απομακρυσμένη Πρόσβαση", "Εργαλεία", "Δίκτυα"]
website: "https://www.freerdp.com/"
logo: "/images/placeholder.svg"
license: "Apache-2.0"
description: "Μια ελεύθερη υλοποίηση του πρωτοκόλλου Microsoft Remote Desktop Protocol (RDP). Παρέχει βιβλιοθήκη (libfreerdp) και εφαρμογές (xfreerdp, wlfreerdp) για σύνδεση σε Windows RDP servers (Windows Professional/Server), Windows Virtual Desktop, και άλλες υλοποιήσεις RDP. Υποστηρίζει πολλαπλές οθόνες, redirection (printer, drive, audio), και Network Level Authentication (NLA)."
featured: false
---

Το FreeRDP είναι η ανοιχτή υλοποίηση RDP, που χρησιμοποιείται ως backend για πολλούς RDP clients στο Linux (π.χ. Remmina, Krdc, Vinagro). Προσφέρει command-line client (`xfreerdp`) και σύνδεση σε Windows machines, χωρίς να χρειάζεται η εμπορική άδεια (όπως το Microsoft Remote Desktop Client for Mac που είναι δωρεάν, αλλά κλειστό).

**Βασικές Δυνατότητες (xfreerdp):**

- **Basic usage:** `xfreerdp /v:windows-server /u:username /p:password`
- **Multi-monitor:** `/multimon`
- **Drive redirection:** `/drive:home,/home/user` (πρόσβαση σε τοπικά αρχεία).
- **Printer redirection (printing από το remote session).**
- **Audio redirection (sound από remote).**
- **Clipboard synchronization.**
- **Network Level Authentication (NLA) / TLS.**
- **RemoteApp (προσάρτηση εφαρμογών).**

**FreeRDP vs Remmina:**

| Χαρακτηριστικό | FreeRDP (CLI) | Remmina (GUI) |
|---|---|---|
| **User interface** | CLI (command line) | ✅ (GTK) |
| **Supports RDP** | ✅ (core) | ✅ (uses FreeRDP) |
| **Supports other protocols** | ❌ | ✅ (VNC, SSH, SPICE, etc.) |
| **Scripting/automation** | ✅ (bash scripts) | ❌ |

> **Σημείωση:** Το FreeRDP χρησιμοποιείται συνήθως **έμμεσα** μέσω άλλων προγραμμάτων (Remmina, GNOME Boxes). Το CLI είναι χρήσιμο για scripting (π.χ. αυτόματη σύνδεση για backups).
