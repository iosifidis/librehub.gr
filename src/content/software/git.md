---
title: "Git (Distributed Version Control System)"
alternative_to: ["Perforce (Helix Core)", "Mercurial (hg)", "Subversion (SVN - centralized)"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία"]
website: "https://git-scm.com/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Το πιο δημοφιλές κατανεμημένο σύστημα ελέγχου εκδόσεων (DVCS) παγκοσμίως. Σχεδιάστηκε από τον Linus Torvalds για την ανάπτυξη του Linux kernel, και πλέον χρησιμοποιείται από εκατομμύρια projects (από solo developers έως megacorporations). Υποστηρίζει non-linear workflows, branching/merging, local commits, staging area, και πολλαπλά remote repositories."
featured: true
---

Το Git είναι ένα DVCS που επιτρέπει σε κάθε developer να έχει ένα πλήρες αντίγραφο του repository (όλη η ιστορία, branches) τοπικά, χωρίς να χρειάζεται συνεχή σύνδεση με κεντρικό server. Δίνει έμφαση στην ταχύτητα, την ακεραιότητα δεδομένων (cryptographic SHA-1 hashes), και την υποστήριξη κατανεμημένων, μη γραμμικών ροών εργασίας (branching & merging). Είναι το standard for open source (GitHub, GitLab, Gitea) και enterprise development.

**Βασικές Έννοιες:**

- **Repository (repo):** Σύνολο αρχείων και φακέλων που παρακολουθούνται (με history).
- **Commit:** Snapshot της κατάστασης των αρχείων σε μια χρονική στιγμή (συνοδεύεται από message, author, timestamp, και parent commit(s)).
- **Branch:** Ανεξάρτητη γραμμή ανάπτυξης (π.χ. `main`, `feature/new-login`). Δημιουργία branch σε O(1).
- **Merge:** Ενοποίηση αλλαγών από ένα branch σε άλλο (π.χ. feature → main).
- **Remote:** Copy του repository που φιλοξενείται σε server (π.χ. GitHub, GitLab, local server).
- **Staging area (index):** Ενδιάμεση περιοχή πριν το commit (μπορείτε να επιλέξετε ποιες αλλαγές θα μπουν στο επόμενο commit).
- **Clone:** Αντιγραφή remote repository στον τοπικό υπολογιστή.

**Πλεονεκτήματα (vs SVN, Perforce):**

| Χαρακτηριστικό | Git | Subversion (SVN) | Perforce |
|---|---|---|---|
| **Αρχιτεκτονική** | Κατανεμημένο (DVCS) | Κεντρικό (CVCS) | Κεντρικό (client-server) |
| **Offline commits** | ✅ | ❌ | ⚠️ (limited) |
| **Branching cost** | Πολύ φθηνό | Ακριβό (copy) | Μέτριο |
| **Local history** | ✅ (πλήρες repo) | ❌ | ❌ |
| **Δημοτικότητα (open source)** | Ναι (συντριπτικό) | Legacy | Enterprise (gaming, embedded) |

**Βασικές Εντολές (CLI):**

```bash
git init                      # δημιουργία repo
git clone <url>               # κλωνοποίηση
git add <file>                # προσθήκη στο staging area
git commit -m "message"       # commit
git push origin main          # αποστολή στο remote
git pull origin main          # λήψη αλλαγών + merge
git branch feature-X          # δημιουργία branch
git checkout feature-X        # εναλλαγή branch
git merge feature-X           # merge στο τρέχον branch
git log --oneline --graph     # visual history
```

> **Σημείωση**: Το Git έχει απότομη καμπύλη εκμάθησης (ειδικά merge conflicts, rebase, reflog). Αλλά αποτελεί απαραίτητο εργαλείο για κάθε προγραμματιστή σήμερα. GUI clients (GitHub Desktop, GitKraken, Sourcetree) απλοποιούν βασικές λειτουργίες.
