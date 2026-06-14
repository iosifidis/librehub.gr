---
title: "Dev-C++"
alternative_to: ["Microsoft Visual Studio (C++ only)", "Code::Blocks", "Turbo C++ (ancient)"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία", "Προγραμματισμός"]
website: "https://dev-cpp.com/Dev-Cpp-5/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Ελαφρύ, αποδοτικό IDE για προγραμματισμό σε C/C++ με ενσωματωμένο MinGW compiler (GCC), βασικό debugger (GDB), και απλό GUI designer (βασισμένο σε Windows Forms). Δημοφιλές σε εκπαιδευτικό περιβάλλον (σχολεία, αρχάρια)."
featured: false
---

Το Dev-C++ είναι ένα από τα παλαιότερα freeware IDEs για C/C++ στα Windows, γνωστό για την απλότητά του. Το αρχικό project εγκαταλείφθηκε (τελευταία έκδοση Bloodshed Dev-C++ 4.9.9.2, 2005), αλλά το fork **Orwell Dev-C++** (5.x) και το νεότερο **Embarcadero Dev-C++** (του οποίου το website παραπέμπει) συνεχίζουν να συντηρούνται. Περιλαμβάνει MinGW (GCC compiler) και GDB debugger.

**Βασικά Χαρακτηριστικά (Dev-C++ 5.x / Embarcadero):**

- **Integrated Compiler (MinGW):** GCC 9.2 (ή νεότερο) – υποστηρίζει C++17.
- **Editor:** Syntax highlighting (C/C++), code folding, class browser, function listing, auto-indentation.
- **Debugging (GDB):** Breakpoints, variable watches, call stack (βασικό).
- **Project Manager:** Console applications, Windows applications (Win32 API), DLLs, Static libraries.
- **Resource Editor:** Visual designer για dialogs (Windows resource files .rc) – deprecated.
- **Tools:** DevPak (installer for additional libraries), plugin for Doxygen.

**Περιορισμοί & Σημεία Προσοχής:**

- **Windows only** (δεν υπάρχει έκδοση για Linux/macOS).
- Δεν έχει advanced refactoring ή code completion "IntelliSense" (μόνο basic autocomplete).
- Το debugger είναι λιγότερο σταθερό από ότι σε Code::Blocks ή VS.

> **Σημείωση:** Το Dev-C++ **δεν συνιστάται** για επαγγελματική ανάπτυξη (προτιμήστε VS Code με C++ extensions ή Visual Studio Community ή Code::Blocks). Παραμένει χρήσιμο μόνο για εκπαιδευτικούς σκοπούς (π.χ. πρώτο μάθημα C++) σε παλιά Windows machines.
