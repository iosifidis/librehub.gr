---
title: "Borgmatic"
alternative_to: ["Acronis", "Time Machine"]
categories: ["Εργαλεία", "Ασφάλεια", "Backup"]
website: "https://torsion.org/borgmatic/"
logo: "/images/borgmatic.svg"
license: "GPL-3.0"
description: "Εργαλείο command-line που απλοποιεί δραματικά τη χρήση του BorgBackup — του ισχυρότερου ανοιχτού κώδικα backup συστήματος. Μέσω YAML αρχείου ρυθμίσεων, αυτοματοποιεί δημιουργία, prune και check αντιγράφων ασφαλείας, με ειδοποιήσεις και hooks για monitoring."
featured: false
---
Το BorgBackup είναι ένα από τα πιο ισχυρά backup εργαλεία — αλλά η χρήση του από command line απαιτεί εμπειρία. Το Borgmatic λύνει αυτό: ένα YAML αρχείο ρυθμίσεων αντικαθιστά μεγάλες εντολές, και αυτοματοποιεί ολόκληρο τον κύκλο backup (create → prune → check → notify).

**Κύρια Χαρακτηριστικά:**
- **YAML Configuration:** Απλή, αναγνώσιμη ρύθμιση directories, exclusions, retention policies.
- **Αυτόματο Pruning:** Καθαρισμός παλαιών backups βάσει πολιτικής (7 ημερήσια, 4 εβδομαδιαία, 6 μηνιαία κ.ά.).
- **Verification:** Αυτόματος έλεγχος ακεραιότητας αρχείων.
- **Hooks:** Εκτέλεση scripts πριν/μετά το backup για dump databases (PostgreSQL, MySQL, MongoDB).
- **Notifications:** Ειδοποιήσεις μέσω email, Slack, Healthchecks.io, PagerDuty.
- **Multiple Repositories:** Backup σε πολλαπλά repositories ταυτόχρονα (local + remote).

**Πλεονεκτήματα:**
- Η ευκολότερη διαδρομή προς BorgBackup για sysadmins.
- Database hook ενσωμάτωση — ιδανικό για server backup με PostgreSQL/MySQL.
- Ιδανικό για cron jobs σε Linux servers.
