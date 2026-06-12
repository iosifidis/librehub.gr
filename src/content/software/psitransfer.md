---
title: "PsiTransfer"
alternative_to: ["WeTransfer Plus", "Dropbox Transfer", "SendSafely"]
categories: ["Cloud", "Παραγωγικότητα"]
website: "https://github.com/psi-4ward/psitransfer"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Απλή, ελαφριά και self-hosted λύση για προσωρινό διαμοιρασμό αρχείων (temporary file sharing), με διεπαφή drag-and-drop, κωδικούς πρόσβασης και λήξη συνδέσμων."
featured: false
---

Το PsiTransfer είναι μια minimal, open-source εφαρμογή για τον γρήγορο και προσωρινό διαμοιρασμό αρχείων, σχεδιασμένη να λειτουργεί ως εναλλακτική του WeTransfer. Μπορείτε να την εγκαταστήσετε στον δικό σας server (self-hosted) και να δημιουργείτε συνδέσμους για upload/download.

**Δυνατότητες:**

- **Απλό UI:** Διεπαφή τύπου "drag-and-drop" – οι χρήστες ανεβάζουν αρχεία, δημιουργείται σύνδεσμος, τον μοιράζονται.
- **Προσωρινή Αποθήκευση:** Κάθε μεταφόρτωση μπορεί να έχει ημερομηνία λήξης (TTL) ή περιορισμό αριθμού λήψεων.
- **Προστασία:** Δυνατότητα προσθήκης κωδικού πρόσβασης για λήψη ή upload, αποτρέποντας μη εξουσιοδοτημένη πρόσβαση.
- **Ελαφρύ & Γρήγορο:** Γραμμένο σε Node.js, λειτουργεί με πολύ λίγους πόρους (RAM/CPU), ιδανικό για μικρούς server ή Docker.
- **Χωρίς Βάση Δεδομένων:** Αποθηκεύει τα μετα-δεδομένα σε απλά JSON αρχεία – εύκολο backup και συντήρηση.
