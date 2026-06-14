---
title: "CanvasBlocker"
alternative_to: ["Anti-tracking software"]
categories: ["Ιδιωτικότητα", "Ασφάλεια", "Πλοήγηση"]
website: "https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/"
logo: "/images/canvasblocker.svg"
license: "MIT"
description: "Επέκταση Firefox που αποτρέπει την ψηφιακή αποτύπωση μέσω Canvas API (Canvas Fingerprinting) — μία από τις πιο δύσκολες μεθόδους παρακολούθησης που δεν αντιμετωπίζουν τα παραδοσιακά ad blockers. Προσθέτει ελεγχόμενο «θόρυβο» στα canvas δεδομένα ώστε κάθε αναγνώρισή σας να αποτυγχάνει."
featured: false
---
Το Canvas Fingerprinting είναι μια «αόρατη» μέθοδος παρακολούθησης: ο ιστότοπος ζητά από τον περιηγητή να σχεδιάσει μια κρυφή εικόνα στο canvas, και τα pixel αυτής της εικόνας διαφέρουν ελαφρώς ανάλογα με το υλικό (GPU, drivers, λειτουργικό). Το αποτέλεσμα είναι ένα μοναδικό «αποτύπωμα» για κάθε συσκευή — που δεν αλλάζει ακόμα και αν σβήσετε cookies ή αλλάξετε IP.

**Τρόποι Λειτουργίας:**
- **Fake Readout:** Επιστρέφει ψεύτικα δεδομένα canvas (συνιστάται — δεν σπάει ιστότοπους).
- **Block:** Μπλοκάρει εντελώς την πρόσβαση στο Canvas API.
- **Ask:** Ρωτά τον χρήστη κάθε φορά που ένας ιστότοπος προσπαθεί να διαβάσει canvas.
- **Allow:** Λευκή λίστα για ιστότοπους που εμπιστεύεστε.

**Τι Επίσης Προστατεύει:**
- AudioContext fingerprinting.
- WebGL fingerprinting.
- History API.

**Πλεονεκτήματα:**
- Αντιμετωπίζει fingerprinting που τα uBlock Origin / Privacy Badger δεν καλύπτουν.
- Λεπτομερείς ρυθμίσεις για ισορροπία μεταξύ ιδιωτικότητας και λειτουργικότητας.
- Διαθέσιμο για Firefox (το Chrome έχει ενσωματωμένη μερική προστασία).
