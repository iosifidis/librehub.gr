---
title: "Lynis"
alternative_to: ["McAfee VirusScan", "Vulnerability Scanners"]
categories: ["Ασφάλεια", "Λειτουργικά Συστήματα", "Εργαλεία"]
website: "https://cisofy.com/lynis/"
logo: "/images/lynis.svg"
license: "GPL-3.0"
description: "Εξελιγμένο εργαλείο ελέγχου ασφαλείας (security audit) και σκλήρυνσης (hardening) για Linux, macOS και Unix συστήματα. Εκτελεί εκατοντάδες αυτοματοποιημένους ελέγχους — από ρυθμίσεις kernel και SSH μέχρι δικαιώματα αρχείων και εγκατεστημένα packages — και παράγει λεπτομερή αναφορά με προτεραιοποιημένες συστάσεις βελτίωσης."
featured: false
---
Το Lynis είναι το εργαλείο που χρησιμοποιούν sysadmins και security professionals για να αξιολογήσουν την ασφάλεια ενός Linux/Unix συστήματος. Σε αντίθεση με ένα antivirus (που ψάχνει γνωστά malware), το Lynis ελέγχει τη **διαμόρφωση** του συστήματος — εντοπίζει αδυναμίες πριν τις εκμεταλλευτεί κάποιος.

**Τι Ελέγχει το Lynis:**
- Ρυθμίσεις bootloader (GRUB) και kernel parameters.
- Διαμόρφωση SSH (αδύναμοι αλγόριθμοι, root login, κ.ά.).
- Δικαιώματα αρχείων και directories (SUID/SGID bits).
- Εγκατεστημένα packages και διαθέσιμες ενημερώσεις ασφαλείας.
- Firewall διαμόρφωση (iptables, nftables, ufw).
- Logging και auditing ρυθμίσεις.
- Κρυπτογράφηση αποθηκευτικών μέσων.
- Ρυθμίσεις χρηστών, κωδικών και sudo.

**Αναφορά & Σκορ:**
- Παράγει **Hardening Index** (0-100) για γρήγορη αξιολόγηση.
- Κατηγοριοποιεί ευρήματα σε SUGGESTION, WARNING, CRITICAL.
- Προτείνει συγκεκριμένες εντολές για κάθε διόρθωση.

**Πλεονεκτήματα:**
- Agentless — εκτελείται απευθείας στο σύστημα χωρίς εγκατάσταση agents.
- Ιδανικό πριν από deployment server σε παραγωγικό περιβάλλον.
- Υποστηρίζει CI/CD pipelines για αυτοματοποιημένο έλεγχο.
- Διαθέσιμο για όλες τις Linux διανομές, macOS, FreeBSD, OpenBSD.
