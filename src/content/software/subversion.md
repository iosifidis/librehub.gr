---
title: "Apache Subversion (SVN)"
alternative_to: ["Perforce (Helix Core)", "Git (for centralized workflows)", "Mercurial"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία",]
website: "https://subversion.apache.org/"
logo: "/images/placeholder.svg"
license: "Apache-2.0"
description: "Κεντρικό (centralized) σύστημα ελέγχου εκδόσεων (CVCS), σχεδιασμένο ως διάδοχος του CVS. Κρατά ένα κεντρικό repository και κάθε developer 'checkout' ένα αντίγραφο. Υποστηρίζει atomic commits, versioned directories, renames, file meta-data, και branching (αν και λιγότερο ευέλικτο από Git)."
featured: false
---

Το Apache Subversion (SVN) είναι ένα CVCS που χρησιμοποιήθηκε ευρύτατα πριν την κυριαρχία του Git (ειδικά σε enterprise environments, ανάπτυξη λογισμικού με μοντέλο κεντρικού repository). Αν και η δημοτικότητά του μειώθηκε, παραμένει σε χρήση σε legacy projects και οργανισμούς που προτιμούν το απλό μοντέλο lock-edit-unlock (π.χ. game development, μεγάλα binary assets).

**Βασικές Διαφορές με Git:**

| Χαρακτηριστικό | Subversion (SVN) | Git |
|---|---|---|
| **Repository** | Κεντρικό (1 server) | Κατανεμημένο (κάθε developer έχει πλήρες αντίγραφο) |
| **Commit** | Στον κεντρικό server (απαιτεί δίκτυο) | Τοπικά (μπορεί να γίνει offline) |
| **Branching** | Ακριβό (αντιγράφει ολόκληρο directory tree) | Πολύ φθηνό (pointer) |
| **Revision numbers** | Αύξοντας αριθμός (r12345) | SHA-1 hash (40 χαρακτήρες) |
| **Atomic commits** | ✅ (all or nothing) | ✅ |
| **Διαχείριση μεγάλων binaries** | Καλύτερη (partial checkout) | Χειρότερη (git-lfs) |

**Βασικές Εντολές (CLI):**

```bash
svn checkout <url>           # κλωνοποίηση (checkout)
svn update                   # λήψη αλλαγών από server
svn add <file>               # προσθήκη νέου αρχείου
svn commit -m "message"      # commit (απαιτεί δίκτυο)
svn merge <branch>           # ενσωμάτωση branch
svn log                      # προβολή ιστορικού (γραμμικό)
```

> **Σημείωση**: Αν ξεκινάτε νέο project το 2026, χρησιμοποιήστε Git. Το SVN είναι χρήσιμο μόνο αν εργάζεστε σε legacy repository (π.χ. Apache Software Foundation SVN, εταιρικά projects) ή αν έχετε πολλά binary assets (τότε εξετάστε Git LFS ή Perforce).
