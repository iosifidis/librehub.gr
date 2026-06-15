---
title: "Code::Blocks"
alternative_to: ["Microsoft Visual Studio (C/C++ development)", "Eclipse CDT", "CLion (commercial)"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία", "Προγραμματισμός"]
website: "https://www.codeblocks.org/"
logo: "/images/code-blocks.jpg"
license: "GPL-3.0"
description: "Εξαιρετικά παραμετροποιήσιμο και επεκτάσιμο IDE για C, C++ και Fortran, χτισμένο γύρω από plugins. Υποστηρίζει πολλούς compilers (GCC, Clang, MSVC, MinGW, Digital Mars, Borland C++), debugging (GDB/CDB), και έχει ενσωματωμένο GUI designer (wxSmith) για εφαρμογές wxWidgets."
featured: false
---

Το Code::Blocks είναι ένα ελαφρύ (σε σύγκριση με VS), cross-platform IDE εστιασμένο κυρίως σε C/C++ development. Διαθέτει ευέλικτο σύστημα build (custom makefiles, Multi-configuration projects), επανασχεδιάσιμο UI (detachable windows), και μια εκτεταμένη βιβλιοθήκη plugins (compiler, debugger, code formatting, doxygen, class browser, κ.ά.). Είναι δημοφιλές σε φοιτητές και competitive programmers.

**Βασικές Δυνατότητες:**

- **Compiler Support:** GCC (MinGW on Windows), Clang, MSVC (Visual C++), Digital Mars, Borland C++ 5.5, Open Watcom, SDCC (Small Device C Compiler), και άλλα. Επιλέξτε τον compiler από drop-down.
- **Debugger Integration:** GDB (GNU Debugger) και CDB (Microsoft Console Debugger). Υποστηρίζει breakpoints, watches, call stack, disassembly.
- **Profiling (Valgrind):** Μέσω plugin (callgrind, memcheck) – ανιχνεύει memory leaks.
- **GUI Builder (wxSmith):** Δημιουργία wxWidgets εφαρμογών (C++ framework) με drag-and-drop designer (αντίστοιχο Qt Designer).
- **Project Management:** Workspaces (multiple projects), target configurations (Debug, Release, Custom), pre/post build steps, custom variables.
- **Plugins (το πιο σημαντικό):**
    - **Code completion** (CC) – parse symbols, autocomplete, call tips.
    - **Source Code Formatter** (AStyle).
    - **Class wizard** (δημιουργία classes με constructor/destructor).
    - **Thread Search** (grep) εντός αρχείων.
    - **SVN, Git, CppCheck, Doxygen, κ.ά.**
- **Cross-platform:** Windows, Linux, macOS (native).

**Παραδείγματα Χρήσης:**

| Περίπτωση | Καταλληλότητα |
|---|---|
| **Εκπαίδευση (πανεπιστήμιο)** | ✅ (ελαφρύ, εύκολο, δωρεάν, λειτουργεί σε παλιά PCs) |
| **Competitive programming** | ✅ (γρήγορο build, custom compiler flags) |
| **Small/medium C++ projects** | ✅ (μέχρι 50-100 source files) |
| **Large enterprise C++ (10k+ files)** | ⚠️ (prefer CLion/Qt Creator) |

> **Σημείωση:** Το Code::Blocks είναι λιγότερο δημοφιλές από το VS Code (με extensions) σήμερα, αλλά παραμένει μια αξιόπιστη επιλογή για C++ developers που θέλουν ένα ελαφρύ, non-Electron IDE.
