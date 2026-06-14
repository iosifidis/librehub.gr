---
title: "Forgejo (Soft Fork of Gitea)"
alternative_to: ["GitHub (SaaS)", "GitLab (self-hosted)", "Gitea (less community governance)"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία"]
website: "https://forgejo.org/"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Ανεξάρτητη, αποκεντρωμένη πλατφόρμα διαχείρισης κώδικα, fork του Gitea που ιδρύθηκε το 2022. Εστιάζει στην ελευθερία του λογισμικού, την καλή διακυβέρνηση (community-driven), τη διαλειτουργικότητα (ActivityPub federation) και τη χαμηλή κατανάλωση πόρων. Πλήρως συμβατή με Gitea (1.19+) και υποστηρίζει Forgejo Actions (CI/CD)."
featured: false
---

Το Forgejo (προφέρεται "Forge-jo") είναι ένα community-driven fork του Gitea, που δημιουργήθηκε όταν μέρος της κοινότητας του Gitea ανησύχησε για τη μετάβαση της εταιρίας πίσω από το Gitea σε for-profit μοντέλο. Το Forgejo στοχεύει να παραμείνει 100% μη κερδοσκοπικό, με ανοιχτή διακυβέρνηση, και να πειραματιστεί με **federation** (ActivityPub) ώστε forge servers να μπορούν να αλληλεπιδρούν (π.χ. ένα issues από Forgejo instance να εμφανίζεται σε άλλο).

**Πλεονεκτήματα vs Gitea:**

| Χαρακτηριστικό | Forgejo | Gitea |
|---|---|---|
| **Federation (ActivityPub)** | ✅ (under development, experimental) | ❌ |
| **Governance** | Non-profit, community-owned | For-profit company (Gitea Ltd) |
| **CI/CD** | Forgejo Actions (ίδια με Gitea Actions) | Gitea Actions |
| **Συμβατότητα** | 100% με Gitea 1.19+ (μπορείτε να μεταφερθείτε εύκολα) | N/A |
| **Corporate backing** | Όχι (μόνο δωρεές) | Ναι (Gitea Ltd) |

**Υποστηριζόμενες Λειτουργίες (όσες και Gitea):**

- Git hosting (public/private repos), branching, tags, releases.
- Issue tracking, pull requests, wiki, projects (kanban).
- Code review (inline comments, approvals).
- Organizations & teams, LDAP/SSO, 2FA.
- Webhooks, API (Gitea compatible).
- Forgejo Actions (CI/CD) – εγγενώς.

**Περιπτώσεις Χρήσης:**

- Οργανισμοί που εμπιστεύονται περισσότερο community-run projects.
- Χρήστες που θέλουν να υποστηρίξουν το fediverse (ActivityPub) και τη διαλειτουργικότητα μεταξύ forges (π.χ. GitHub, GitLab, Gitea, Forgejo).
- Όσοι θέλουν "Gitea" αλλά με πιο αργό ρυθμό αλλαγών (σταθερότητα).

> **Σημείωση:** Για τυπικές ανάγκες Git hosting (pull requests, issues), τα Gitea και Forgejo είναι σχεδόν ταυτόσημα. Η επιλογή είναι πολιτική/φιλοσοφική. Για production, και τα δύο είναι αξιόπιστα.
