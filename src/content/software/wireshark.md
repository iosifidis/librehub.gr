---
title: "Wireshark (Network Protocol Analyzer)"
alternative_to: ["Microsoft Message Analyzer (discontinued)", "tcpdump (CLI-only)", "TShark (CLI version of Wireshark)"]
categories: ["Ασφάλεια", "Εργαλεία", "Ανάλυση Δικτύου"]
website: "https://www.wireshark.org/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Το κορυφαίο open-source εργαλείο ανάλυσης πρωτοκόλλων δικτύου (packet analyzer) παγκοσμίως. Συλλαμβάνει (capture) πακέτα σε πραγματικό χρόνο και τα εμφανίζει σε μια φιλική προς τον χρήστη διεπαφή (GUI). Υποστηρίζει **deep inspection** εκατοντάδων πρωτοκόλλων (TCP/IP, HTTP, DNS, TLS, SMB, SMTP, κλπ.), φιλτράρισμα, χρωματισμό πακέτων, ανακατασκευή ροών (Follow TCP Stream), εξαγωγή αντικειμένων (HTTP objects), VoIP ανάλυση, κλπ. Ιδανικό για debugging δικτύου, ανάλυση ασφαλείας (επιθέσεις, malware traffic), και εκπαίδευση."
featured: true
---

Το Wireshark (πρώην Ethereal) είναι το standard εργαλείο για network administrators, security analysts, και developers που χρειάζεται να δουν τι "ταξιδεύει" στο δίκτυο.

**Βασικές Δυνατότητες:**

- **Live Packet Capture (από Ethernet, WiFi, Bluetooth, USB, κλπ.)** – υποστηρίζει πολλές interfaces (libpcap/WinPcap/Npcap).
- **Filtering (Display filters & Capture filters):** Χρησιμοποιεί γλώσσα παρόμοια με BPF (π.χ. `tcp.port == 443`, `ip.src == 192.168.1.1`).
- **Coloring Rules (χρωματισμός)** για γρήγορη αναγνώριση πακέτων (π.χ. red για TCP retransmissions).
- **Follow Stream (παρακολούθηση ροής):** Ανακατασκευή TCP streams (βλέπετε ολόκληρη τη συνομιλία HTTP, SMTP, κλπ.) σε ASCII/HEX.
- **Protocol Dissectors (3500+):** HTTP/2, TLS (αποκρυπτογράφηση με pre-master secret), DNS, DHCP, ICMP, ARP, SMB, CIFS, NFS, SIP, RTP, VoIP, κλπ.
- **Expert Information (Ανίχνευση προβλημάτων):** Αυτόματη εύρεση retransmissions, connection resets, malformed packets.
- **Statistics (Στατιστικά):** Protocol hierarchy, endpoints, conversations, I/O graph, flow graph, κλπ.
- **Extraction of Objects (HTTP exports):** Ανακτήστε εικόνες, PDFs, executables από captured traffic.
- **Command-line (TShark, capinfos, editcap, mergecap, κλπ.)** για scripting και batch processing.
- **Cross-platform:** Windows, macOS, Linux, Solaris, FreeBSD.

**Wireshark vs tcpdump (CLI):**

| Χαρακτηριστικό | Wireshark (GUI) | tcpdump (CLI) |
|---|---|---|
| **Ευκολία ανάλυσης** | ✅ (visual, filtering, coloring) | ❌ (μόνο raw output, χρειάζεται εισαγωγή σε Wireshark) |
| **Protocol decoding** | ✅ (3500+ dissectors) | ⚠️ (βασικό) |
| **Real-time capture** | ✅ | ✅ |
| **Scripting/automation** | ⚠️ (μέσω tshark) | ✅ |

> **Σημείωση:** Το Wireshark είναι απαραίτητο εργαλείο για οποιονδήποτε ασχολείται με δίκτυα ή ασφάλεια. Μπορείτε να το συνδυάσετε με **tcpdump** σε headless servers (capture) και να μεταφέρετε το αρχείο .pcap για ανάλυση στο Wireshark GUI.
