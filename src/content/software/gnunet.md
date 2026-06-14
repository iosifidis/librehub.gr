---
title: "GNUnet (Decentralized P2P Networking Framework)"
alternative_to: ["Tor (anonymity network)", "I2P (anonymous network)", "IPFS (decentralized storage)", "ZeroNet (decentralized web)"]
categories: ["Ιδιωτικότητα", "Δίκτυα", "Ασφάλεια"]
website: "https://gnunet.org/"
logo: "/images/placeholder.svg"
license: "GPL-3.0"
description: "Ένα πλαίσιο ανοιχτού κώδικα για ασφαλή, αποκεντρωμένη (decentralized) και ανθεκτική στη λογοκρισία δικτύωση (P2P). Δεν βασίζεται σε κεντρικούς διακομιστές. Παρέχει υπηρεσίες: anonymous file sharing, decentralized naming (GNS - GNU Name System), chat, VPN (mesh), και distributed version control. Στόχος του GNUnet είναι να δημιουργήσει ένα ανοιχτό, ασφαλές, και αποκεντρωμένο internet protocol stack (εναλλακτικό στο TCP/IP)."
featured: false
---

Το GNUnet (από το GNU Project) είναι μια σουίτα πρωτοκόλλων και εφαρμογών για P2P (peer-to-peer) επικοινωνία. Σε αντίθεση με το Tor (κεντρικοί directory servers), το GNUnet χρησιμοποιεί ένα completely decentralized mesh network. Οι υπηρεσίες του περιλαμβάνουν:

**Βασικά Subsystems:**

- **GNS (GNU Name System):** Αποκεντρωμένη αντικατάσταση DNS (όπως το .bit, χωρίς blockchain). Χρησιμοποιείτε names like `www.example.gnu`.
- **File Sharing (P2P):** Αναζήτηση και λήψη αρχείων (ανθεκτική στη λογοκρισία).
- **CADET (End-to-end encrypted chat & file transfer).**
- **VPN (Mesh routing):** Δημιουργία εικονικών δικτύων (overlay networks).
- **Peer information & routing (δεδομένα δεν αποθηκεύονται κεντρικά).**
- **Conversation (VoIP over P2P).**

**GNUnet vs Tor vs I2P:**

| Χαρακτηριστικό | GNUnet | Tor | I2P |
|---|---|---|---|
| **Αρχιτεκτονική** | P2P (πλήρως αποκεντρωμένο) | Onion routing (directory servers) | P2P (distributed netDb) |
| **Focus** | Ανθεκτικότητα, αποκέντρωση | Ανωνυμία web browsing | Ανώνυμες υπηρεσίες (eepsites) |
| **DNS alternative** | GNS | Tor hidden services (`.onion`) | I2P eepsites (`.i2p`) |
| **File sharing** | ✅ (built-in) | ❌ (slow, discouraged) | ✅ (via I2PSnark) |
| **Maturity** | Ερευνητικό (complex setup) | Πολύ ώριμο | Ώριμο |

> **Σημείωση:** Το GNUnet είναι πειραματικό/ερευνητικό, με μικρότερη κοινότητα από Tor. Ιδανικό για ακαδημαϊκή μελέτη (decentralized networks) ή για όσους θέλουν απόλυτη αποκέντρωση. Για καθημερινή ανώνυμη περιήγηση, το Tor παραμένει η προεπιλογή.
