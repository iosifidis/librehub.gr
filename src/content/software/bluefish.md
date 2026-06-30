---
title: "Bluefish"
alternative_to: ["Adobe Dreamweaver (proprietary)", "VS Code (for web dev)", "Sublime Text"]
categories: ["Ανάπτυξη Λογισμικού", "Editor", "Προγραμματισμός"]
website: "https://bluefish.openoffice.nl/"
logo: "/images/bluefish.png"
license: "GPL-3.0"
description: "Ισχυρός, γρήγορος (GTK-based) επεξεργαστής κώδικα με έμφαση στη web development (HTML, CSS, JavaScript, PHP, SQL) και τον προγραμματισμό (C, C++, Java, Perl, Python). Διαθέτει μοναδικά 'wizards' για γρήγορο scaffolding, multiple document interface, project support, και advanced search/replace (regex, multi-line)."
featured: false
---

Το Bluefish (υπάρχει από το 2001) είναι ένα ελαφρύ, GTK-based editor για Linux (και Windows/macOS, με λιγότερη υποστήριξη). Σε αντίθεση με σύγχρονα Electron editors (VS Code, Atom), το Bluefish ξεκινά σε <1 δευτερόλεπτο και καταναλώνει ~50 MB RAM. Είναι εξαιρετικά δημοφιλές σε developers που προτιμούν περιβάλλοντα Xfce, LXQt, ή παλιότερους υπολογιστές.

**Βασικές Δυνατότητες:**

- **Syntax Highlighting (100+ γλώσσες):** HTML, CSS, JavaScript, PHP, SQL, XML, C, C++, Java, Python, Perl, Go, Rust, κ.ά.
- **Auto-completion:** tags, attributes, functions (χρήσιμο για HTML/CSS).
- **Wizards (βοηθοί):** Γρήγορη δημιουργία HTML structure (doctype, forms, tables, lists), CSS/JS wizards (Web2.0), SQL queries.
- **Project Manager (δεξιά μπάρα):** Tree view, file browser, bookmarks.
- **Search & Replace (ισχυρό):** Υποστηρίζει regular expressions, multi-line replacement, search in files (grep), mark occurrences.
- **Toolbar με icons** για συχνές λειτουργίες (validate HTML/CSS, run external tools).
- **External tools integration:** Ρυθμίσεις για εμφάνιση output (compiler errors, linters, scripts) στο κάτω panel.

**Σύγκριση (Lightweight Linux editors):**

| Editor | Framework | RAM | Web dev (PHP, JS) |
|---|---|---|---|
| **Bluefish** | GTK | ~50 MB | ✅ (πολύ καλό) |
| **Geany** | GTK+Scintilla | ~30 MB | ✅ (βασικό) |
| **Visual Studio Code** | Electron | ~300 MB | ✅ (πλούσιο) |
| **Sublime Text** | Custom (C++) | ~100 MB | ✅ (με plugins) |

> **Σημείωση:** Το Bluefish είναι ιδανικό για Linux developers που ασχολούνται με LAMP stack (PHP, MySQL, HTML/CSS, JavaScript) και θέλουν ένα ελαφρύ, αποδοτικό εργαλείο. Στα Windows, η εμπειρία είναι υποδεέστερη (GTK runtime θέμα). Για σύγχρονο front-end (React, Vue), το VS Code είναι καλύτερο.
