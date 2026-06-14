---
title: "MediaWiki (Wiki Platform)"
alternative_to: ["Confluence", "Notion", "DokuWiki"]
categories: ["Εκπαίδευση", "Τεκμηρίωση", "Wiki"]
website: "https://www.mediawiki.org"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Η πλατφόρμα wiki που τρέχει τη **Wikipedia**. Ιδανική για τη δημιουργία γνωσιακών βάσεων, εσωτερικών wikis, αποθετηρίων τεκμηρίωσης, και συνεργατικών εγχειριδίων. Υποστηρίζει πολλαπλούς χρήστες, εκδόσεις, πρότυπα, επεκτάσεις , γλωσσικές μεταφράσεις, και είναι κλιμακώσιμη (για εκατομμύρια σελίδες)."
featured: true
---

Το MediaWiki είναι το standard εργαλείο για μεγάλης κλίμακας wiki projects, ειδικά για τεχνική τεκμηρίωση, γνωσιακές βάσεις, και ακαδημαϊκή συνεργασία.

**Βασικές Λειτουργίες:**

- **Πυρήνας (Core):**
    - **Wiki markup:** Η γλώσσα σήμανσης της Wikipedia (παρόμοια με HTML, αλλά ελαφρύτερη).
    - **Visual Editor (WYSIWYG):** Επεξεργασία κειμένου με μορφοποίηση (πίνακες, εικόνες, links) – προαιρετική εγκατάσταση.
    - **Categories & Tags (Namespace).**
    - **Histories & Diffs:** Κάθε σελίδα αποθηκεύει το πλήρες ιστορικό εκδόσεων. Σύγκριση αλλαγών (diff).
    - **Discussion (Talk pages) & Flow (board).**
    - **Search (Lucene-powered).**
- **Πρότυπα (Templates):** Δημιουργία επαναχρησιμοποιήσιμων πλαισίων (π.χ. ενημερώσεις, δείγμα κώδικα, citations). Υποστηρίζει parameters.
- **Extensions (2500+):**
    - **ParserFunctions** (λογική if/then/else), **Semantic MediaWiki** (δομημένα δεδομένα), **Cite** (παραπομπές), **SyntaxHighlight** (χρωματισμός κώδικα).
    - **LDAP, OAuth, SAML** για SSO.
    - **PDF Export (Collection).**
- **User Permissions:** Λεπτομερή δικαιώματα ανά σελίδα/namespace (read, edit, delete, protect). Επιπέδα συντακτών (sysop, bureaucrat).
- **Caching:** Υποστήριξη Memcached, Redis, Varnish (για high traffic).
- **Πλατφόρμες:** LAMP stack (Linux, Apache, MySQL/MariaDB, PHP). Μπορεί να τρέξει και σε Windows (IIS) με λιγότερη υποστήριξη.

> **Σημείωση:** Ιδανικό για πανεπιστήμια (γνωσιακή βάση), οργανισμούς (τεκμηρίωση), και open source projects (developer wiki). Για μικρά projects (10-50 σελίδες), προτιμήστε **DokuWiki** (ελαφρύ, χωρίς database) ή **Wiki-Go**.
