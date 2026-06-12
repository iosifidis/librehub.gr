---
title: "GNU Sipwitch"
alternative_to: ["Avaya IP PBX", "Cisco Unified Communications Manager", "3CX (Proprietary Edition)"]
categories: ["Επικοινωνία", "Τηλεφωνία", "Λειτουργικά Συστήματα"]
website: "https://www.gnu.org/software/sipwitch/"
logo: "/images/placeholder.svg"
license: "GPL-3.0"
description: "Εξυπηρετητής τηλεφωνικών κλήσεων γραφείου (SIP server / IP PBX) που παρέχει διαχείριση εσωτερικών δικτύων επικοινωνίας, προώθηση κλήσεων, τηλεφωνικές ομάδες και σύνδεση με το δημόσιο δίκτυο (PSTN)."
featured: false
---

Το GNU Sipwitch είναι ένας πλήρης, secure, κλιμακούμενος SIP server (IP PBX - Private Branch Exchange) για γραφεία και μικρές επιχειρήσεις. Σε αντίθεση με μονολιθικές λύσεις, το Sipwitch είναι σχεδιασμένο να λειτουργεί σαν μια υπηρεσία (daemon) σε υπάρχοντα λειτουργικά συστήματα, με έντονη εστίαση στην απλότητα και την ασφάλεια.

Λειτουργίες:
- **Πυρήνας IP PBX**: Καταχωρεί SIP devices (softphones, hardphones, IP gateways), διαχειρίζεται τις συνεδρίες κλήσεων, και δρομολογεί εσωτερικές κλήσεις χωρίς καμία εξωτερική εξάρτηση.
- **Χρήση χωρίς διαχειριστή (Zero-config operation)**: Σε μικρά δίκτυα, το Sipwitch μπορεί να λειτουργήσει χωρίς καμία ρύθμιση (auto-configuration), ανακαλύπτοντας αυτόματα τις συσκευές SIP μέσω multicast DNS (Zeroconf).
- **Προηγμένη Διαχείριση**: Υποστηρίζει δημιουργία χρηστών, ομάδων κλήσεων (rings groups), τηλεφωνικών καταλόγων, προώθηση κλήσεων (forwarding), και φωνητικό ταχυδρομείο (voicemail).
- **Ασφάλεια**: Χρησιμοποιεί πρότυπα SIP digest authentication, TLS για κρυπτογράφηση σήματος, και μπορεί να ενσωματωθεί με το υπάρχον σύστημα LDAP/Active Directory.
- **Διαλειτουργικότητα**: Μπορεί να λειτουργήσει ως sip proxy/registrar, ή να συνδεθεί με trunk providers για πραγματοποίηση εξερχόμενων κλήσεων στο PSTN (μέσω gateway).

> **Σημείωση**: Το GNU Sipwitch δεν έχει ενεργό development την τελευταία δεκαετία, αλλά παραμένει μια απλή και λειτουργική λύση για μικρές εγκαταστάσεις. Για νέα έργα, συνιστώνται πιο ενεργά projects όπως Asterisk, FreeSWITCH ή Kamailio.
