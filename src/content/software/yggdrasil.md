---
title: "Yggdrasil"
alternative_to: ["Mesh Networking Solutions", "VPN Services"]
categories: ["Δίκτυα", "Ιδιωτικότητα", "Ασφάλεια"]
website: "https://yggdrasil-network.github.io/"
logo: "/images/yggdrasil.svg"
license: "LGPL-3.0"
description: "Πειραματική υλοποίηση ενός πλήρως κρυπτογραφημένου, αυτο-οργανούμενου mesh δικτύου IPv6. Κάθε κόμβος δρομολογεί αυτόματα την κίνηση — χωρίς κεντρική διαχείριση, χωρίς ISP εξάρτηση. Ιδανικό για ανθεκτικά, ανεξάρτητα τοπικά δίκτυα και privacy-focused επικοινωνία."
featured: false
---
Το Yggdrasil είναι ένα πειραματικό project που υλοποιεί μια ριζικά διαφορετική αρχιτεκτονική δικτύου: αντί για κεντρικά routers και ISPs, κάθε κόμβος (υπολογιστής, Raspberry Pi, server) είναι ταυτόχρονα client και router. Το αποτέλεσμα: ένα δίκτυο που δεν μπορεί να «κλείσει» από κανέναν κεντρικό φορέα.

**Αρχιτεκτονική:**
- Κάθε κόμβος αποκτά μια IPv6 διεύθυνση παραγόμενη από το public key του.
- Η δρομολόγηση χρησιμοποιεί spanning tree αλγόριθμο — αυτόματη εύρεση μονοπατιών.
- Κάθε σύνδεση κρυπτογραφείται end-to-end (Curve25519 + ChaCha20).

**Κύρια Χαρακτηριστικά:**
- **Self-organizing:** Νέοι κόμβοι ενσωματώνονται αυτόματα χωρίς χειροκίνητη ρύθμιση.
- **End-to-End Encryption:** Κάθε packet κρυπτογραφείται — ακόμα και μεταξύ κόμβων.
- **Peer-to-Peer:** Δεν υπάρχει κεντρικός server ή ISP εξάρτηση.
- **TUN Interface:** Εμφανίζεται ως κανονική network interface — διαφανές για εφαρμογές.
- **Cross-platform:** Τρέχει σε Linux, Windows, macOS, Android, iOS, OpenBSD.

**Πλεονεκτήματα:**
- Ιδανικό για community networks, disaster recovery και ανθεκτική επικοινωνία.
- Ακόμα και σε περίπτωση internet shutdown, το δίκτυο λειτουργεί τοπικά.
- Ελαφρύ — τρέχει άνετα σε Raspberry Pi.
