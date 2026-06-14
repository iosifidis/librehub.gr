---
title: "Geany"
alternative_to: ["Sublime Text (proprietary)", "Notepad++ (Windows only)", "VS Code (heavyweight alternative)"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία", "Προγραμματισμός"]
website: "https://www.geany.org/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Εξαιρετικά γρήγορος, ελαφρύς επεξεργαστής κειμένου με δυνατότητες IDE: syntax highlighting (πάνω από 50 γλώσσες), code folding, autocompletion, project management, built-in terminal, και plugin system. Ιδανικός για παλιούς υπολογιστές ή minimal setups."
featured: false
---

Το Geany είναι ένα μικρό, ταχύτατο IDE/editor που βασίζεται στο Scintilla (όπως και το Notepad++). Στόχος του είναι να παρέχει μόνο τις **απαραίτητες** λειτουργίες ενός IDE (όχι βαρύ refactoring, debugger, profiler) έτσι ώστε να ξεκινάει σε <1 δευτερόλεπτο και να καταναλώνει <30 MB RAM. Χρησιμοποιείται συχνά σε Raspberry Pi, παλιά laptops, ή ως ελαφρύ εργαλείο για γρήγορες επεξεργασίες.

**Βασικές Δυνατότητες:**

- **Syntax Highlighting:** C, C++, Java, Python, PHP, HTML, CSS, JavaScript, Go, Rust, Perl, Ruby, SQL, XML, Bash, και 50+ ακόμα.
- **Code Navigation:** Symbol list (classes, functions, variables), go-to definition (για αρχεία στο ίδιο project), find references.
- **Build System (Compile/Run):** Μπορεί να καλέσει external compilers (gcc, javac, python, etc.) και να εμφανίσει output στο built-in terminal.
- **Code Completion (προαιρετικά):** Basic autocompletion (λέξεις από ανοιχτά αρχεία + symbols).
- **Plugins (via Plugin Manager):** Spell check, version control (git), file browser, clipboard manager, save actions, κ.ά.
- **Multi-document (tabs):** Υποστήριξη session save/restore, project management (βασικό).
- **Cross-platform:** Λειτουργεί σε Linux, Windows, macOS (native, χωρίς Electron).

**Σύγκριση (ελαφριών editors):**

| Editor | RAM (idle) | Γλώσσες | Plugins | Built-in terminal |
|---|---|---|---|---|
| **Geany** | ~20-30 MB | 50+ | ✅ (10+) | ✅ |
| **Notepad++** | ~30-50 MB | 70+ | ✅ (πολλά) | ❌ (χωρίς plugin) |
| **Sublime Text (commercial)** | ~100-150 MB | 50+ | ✅ (μέσω Package Control) | ✅ |
| **VS Code (Electron)** | ~300-500 MB | 200+ | ✅ (χιλιάδες) | ✅ |

> **Σημείωση:** Το Geany είναι ιδανικό για προγραμματισμό σε Python, C, C++, Java (σύνταξη, compile, run) όταν δεν χρειάζεστε προηγμένο debugger ή refactoring. Για μεγάλα projects (π.χ. Spring Boot, React), θα προτιμήσετε VS Code ή Eclipse.
