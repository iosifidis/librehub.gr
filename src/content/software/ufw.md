---
title: "UFW (Uncomplicated Firewall)"
alternative_to: ["Windows Firewall", "Hardware Firewalls"]
categories: ["Ασφάλεια", "Δίκτυα", "Λειτουργικά Συστήματα"]
website: "https://launchpad.net/ufw"
logo: "/images/ufw.svg"
license: "GPL-3.0"
description: "Απλοποιημένο frontend για τη ρύθμιση του iptables firewall σε Linux. Σχεδιασμένο για χρήση από αρχάριους και προχωρημένους χρήστες — απλές εντολές αντικαθιστούν σύνθετους κανόνες iptables. Προεγκατεστημένο στο Ubuntu και ιδανικό για γρήγορη ασφάλιση Linux servers."
featured: false
---
Το UFW (Uncomplicated Firewall) κάνει ακριβώς αυτό που υπόσχεται το όνομά του: απλοποιεί δραματικά τη ρύθμιση του Linux firewall. Αντί για πολύπλοκες εντολές iptables, το UFW προσφέρει ανθρώπινα αναγνώσιμες εντολές που λειτουργούν αμέσως.

**Βασικές Εντολές:**
```bash
ufw enable              # Ενεργοποίηση firewall
ufw allow ssh           # Επιτρέψτε SSH
ufw allow 80/tcp        # Επιτρέψτε HTTP
ufw deny 23             # Μπλοκάρετε Telnet
ufw status verbose      # Εμφάνιση κανόνων
```

**Κύρια Χαρακτηριστικά:**
- **Απλή Σύνταξη:** `ufw allow ssh` αντί για πολύπλοκα iptables rules.
- **Application Profiles:** Έτοιμα profiles για κοινές υπηρεσίες (Apache, Nginx, OpenSSH).
- **IPv6 Support:** Αυτόματη εφαρμογή κανόνων σε IPv4 και IPv6.
- **Logging:** Ρυθμιζόμενη καταγραφή αποκλεισμένης/επιτρεπόμενης κίνησης.
- **GUFW:** Γραφική διεπαφή για χρήστες χωρίς terminal.

**Πλεονεκτήματα:**
- Προεγκατεστημένο στο Ubuntu — άμεση χρήση.
- Ιδανικό για αρχάριους sysadmins που θέλουν να ασφαλίσουν VPS γρήγορα.
- Διαθέσιμο για κάθε διανομή Linux.

---
