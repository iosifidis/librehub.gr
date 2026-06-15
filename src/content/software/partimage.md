---
title: "PartImage"
alternative_to: ["Norton Ghost"]
categories: ["Εργαλεία", "Λειτουργικά Συστήματα"]
website: "https://www.partimage.org/"
logo: "/images/partimage.svg"
license: "GPL-2.0"
description: "Εργαλείο δημιουργίας αντιγράφων ασφαλείας κατατμήσεων δίσκου και ανάκτησης δεδομένων για Linux. Αποθηκεύει μόνο τα χρησιμοποιούμενα blocks (όχι ολόκληρο τον δίσκο), με compression και δυνατότητα αποθήκευσης σε τοπικό δίσκο, NFS ή SMB share."
featured: false
---
Το PartImage είναι η κλασική λύση disk imaging για Linux — αντίστοιχο του Norton Ghost για το Linux περιβάλλον. Δημιουργεί compressed images κατατμήσεων για γρήγορη επαναφορά ολόκληρου συστήματος.

> **Σημείωση:** Το PartImage δεν αναπτύσσεται ενεργά. Σύγχρονες εναλλακτικές: **Clonezilla** (disk cloning), **Kopia** ή **Duplicati** (file backup). Το PartImage παραμένει χρήσιμο σε legacy Linux περιβάλλοντα.

**Κύρια Χαρακτηριστικά:**
- **Block-level Imaging:** Αντιγραφή μόνο χρησιμοποιούμενων blocks — γρηγορότερο από dd.
- **Compression:** gzip/bzip2 compression για μικρότερα αρχεία image.
- **Network Backup:** Αποθήκευση σε NFS ή Samba share μέσω δικτύου.
- **Supported Filesystems:** Ext2/3/4, ReiserFS, FAT16/32, HPFS, JFS, XFS.
- **Live CD:** Διαθέσιμο σε SystemRescue CD για backup ανενεργών κατατμήσεων.

**Πλεονεκτήματα:**
- Ελαφρύ και γρήγορο για τον σκοπό για τον οποίο σχεδιάστηκε.
- Διαθέσιμο σε rescue live environments.
