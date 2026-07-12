---
title: "Decentraleyes"
alternative_to: ["Content Delivery Networks"]
categories: ["Ιδιωτικότητα", "Ασφάλεια", "Πλοήγηση"]
website: "https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/"
logo: "/images/decentraleyes.png"
license: "MPL-2.0"
description: "Επέκταση περιηγητή που τοπικά σερβίρει κοινές βιβλιοθήκες JavaScript (jQuery, Bootstrap, Angular κ.ά.) που κανονικά φορτώνονται από CDN τρίτων (Google, Cloudflare, jsDelivr). Αποτρέπει έτσι την παρακολούθηση από αυτά τα δίκτυα και επιταχύνει τη φόρτωση σελίδων."
featured: false
---
Κάθε φορά που επισκέπτεστε έναν ιστότοπο που χρησιμοποιεί jQuery από το `ajax.googleapis.com`, η Google ενημερώνεται για την επίσκεψή σας — ακόμα και αν ο ιστότοπος δεν έχει καμία σχέση με την Google. Αυτό συμβαίνει σε χιλιάδες ιστότοπους. Το Decentraleyes λύνει αυτό το πρόβλημα σερβίροντας τοπικά αυτές τις βιβλιοθήκες.

**Πώς Λειτουργεί:**
1. Ο ιστότοπος ζητά jQuery από το `ajax.googleapis.com`.
2. Το Decentraleyes υποκλέπτει το αίτημα.
3. Σερβίρει τοπικά το αρχείο — χωρίς καμία επικοινωνία με Google.
4. Ο ιστότοπος λειτουργεί κανονικά, η Google δεν ενημερώνεται.

**Βιβλιοθήκες που Περιλαμβάνει:**
- jQuery (Google, Microsoft CDN), Bootstrap, AngularJS, Backbone.js, Ember.js, Moment.js, και πολλές άλλες.

**Πλεονεκτήματα:**
- Διπλό όφελος: ιδιωτικότητα + ταχύτερη φόρτωση (τοπικό αρχείο = άμεσο).
- Συμπληρώνει το uBlock Origin (διαφορετικό layer προστασίας).
- Ενεργή συντήρηση — συνιστάται η χρήση LocalCDN (fork) για ενημερωμένες βιβλιοθήκες.
- Διαθέσιμο για Firefox και Chrome.
