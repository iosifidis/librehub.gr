---
title: "Mailcow"
alternative_to: ["Microsoft Exchange", "Google Workspace"]
categories: ["Email", "Cloud", "Επικοινωνία"]
website: "https://mailcow.email/"
logo: "/images/placeholder.svg"
license: "GPL-3.0"
description: "Μια σύγχρονη, πλήρης σουίτα email και groupware βασισμένη σε containers (Docker), που προσφέρει εύκολη εγκατάσταση, διαχείριση μέσω web interface, και κορυφαία ασφάλεια."
featured: false
---

Το mailcow: dockerized είναι μια ολοκληρωμένη, open-source σουίτα email και groupware, σχεδιασμένη για να καλύπτει τις ανάγκες από μικρές ομάδες έως και μεγάλες επιχειρήσεις. Αξιοποιώντας τη δύναμη του Docker, λύνει το πρόβλημα της δύσκολης εγκατάστασης και συντήρησης ενός mail server, προσφέροντας μια έτοιμη, αυτοματοποιημένη λύση.

Τα κύρια χαρακτηριστικά του περιλαμβάνουν:
- **Εγκατάσταση με Docker**: Όλες οι υπηρεσίες (Postfix, Dovecot, Nginx, SOGo, Rspamd, κ.ά.) τρέχουν σε ξεχωριστά containers, διασφαλίζοντας απομόνωση και ευκολία στη διαχείριση.
- **Σύγχρονο Web Interface (UI)**: Η διαχείριση γίνεται μέσω ενός εύχρηστου γραφικού περιβάλλοντος (mailcow UI), όπου μπορείτε να προσθέτετε domains, χρήστες, aliases, να διαχειρίζεστε το spam και να βλέπετε το quarantine.
- **Ισχυρό Anti-Spam & Anti-Virus**: Ενσωματώνει τους Rspamd (για spam) και ClamAV (για ιούς), με δυνατότητα αυτόματης εκμάθησης και σάρωσης macro σε έγγραφα Office.
- **Ολοκληρωμένο Groupware**: Ο ενσωματωμένος webmailer SOGo παρέχει email, ημερολόγια (CalDAV) και επαφές (CardDAV), επιτρέποντας στους χρήστες να συγχρονίζουν τις συσκευές τους.
- **Υψηλή Ασφάλεια**: Περιλαμβάνει DKIM, ARC, αυτόματη δημιουργία SSL/TLS πιστοποιητικών με Let's Encrypt, έλεγχο ταυτότητας δύο παραγόντων (2FA/TOTP) και προστασία fail2ban για μη εξουσιοδοτημένες προσπάθειες σύνδεσης.