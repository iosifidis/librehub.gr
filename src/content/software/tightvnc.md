---
title: "TightVNC (Remote Desktop - VNC)"
alternative_to: ["RealVNC (commercial)", "TeamViewer (commercial)", "UltraVNC (Windows only)"]
categories: ["Απομακρυσμένη Πρόσβαση", "Εργαλεία", "Δίκτυα"]
website: "https://www.tightvnc.com/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Εργαλείο απομακρυσμένης διαχείρισης επιφάνειας εργασίας (remote desktop) που βασίζεται στο πρωτόκολλο VNC (Virtual Network Computing). Περιλαμβάνει server (tightvncserver) και viewer (tightvncviewer). Είναι ελαφρύ, γρήγορο, και ιδανικό για LAN environments. Υποστηρίζει compression (Tight encoding) και file transfers. Λιγότερο ασφαλές από RDP (χωρίς κρυπτογράφηση εξ' ορισμού), μπορεί να χρησιμοποιηθεί με SSH tunneling."
featured: false
---

Το TightVNC είναι ένα από τα παλαιότερα και πιο σταθερά VNC implementations. Λειτουργεί σε Windows, Linux, και Unix. Είναι κατάλληλο για απομακρυσμένη πρόσβαση σε εσωτερικά δίκτυα (LAN) ή με VPN, όχι απευθείας μέσω internet (ανεπαρκής ασφάλεια).

**Βασικές Λειτουργίες:**

- **Server (tightvncserver):** Μοιράζεται την τρέχουσα επιφάνεια εργασίας (X11) ή δημιουργεί ένα νέο virtual session (virtual display).
- **Viewer (tightvncviewer):** Σύνδεση σε VNC server (π.χ. `vncviewer 192.168.1.10:5901`).
- **Tight Encoding (συμπίεση)** για καλύτερη απόδοση σε αργές συνδέσεις.
- **File Transfer (αμφίδρομη) – σε νεότερες εκδόσεις.**
- **Password authentication (μόνο, όχι κρυπτογράφηση ροής).**

**Περιορισμοί & Ασφάλεια:**

- **No encryption (χωρίς SSH tunneling, η κίνηση αποστέλλεται σε plaintext)** → ευάλωτο σε sniffing.
- **No session login (όποιος έχει πρόσβαση στο VNC port μπορεί να δει την οθόνη).**

> **Σημείωση:** Το TightVNC (και γενικά VNC) συνιστάται **μόνο σε αξιόπιστα δίκτυα** (LAN) ή με **SSH tunnel** (`ssh -L 5901:localhost:5901 user@server`). Για ασφαλή απομακρυσμένη πρόσβαση από internet, προτιμήστε **RDP** (Windows) ή **Guacamole** (web-based) ή **RustDesk**.
