---
title: "GNU Octave (Scientific Programming)"
alternative_to: ["MATLAB", "Scilab (alternative syntax)", "Python (NumPy/SciPy)"]
categories: ["Εκπαίδευση", "Μαθηματικά", "Επιστήμες"]
website: "https://www.gnu.org/software/octave/"
logo: "/images/placeholder.svg"
license: "GPL-3.0"
description: "Μια γλώσσα προγραμματισμού υψηλού επιπέδου (παρόμοια με MATLAB), κυρίως για αριθμητικούς υπολογισμούς, γραμμική άλγεβρα, γραφικά (2D/3D), και προσομοιώσεις. Είναι η πιο συμβατή open-source εναλλακτική του MATLAB (τα περισσότερα scripts MATLAB εκτελούνται στο Octave χωρίς αλλαγές). Παρέχει επίσης ένα περιβάλλον γραμμής εντολών (CLI) και γραφικό περιβάλλον (GUI) βασισμένο στο Qt. Χρησιμοποιείται ευρέως σε ακαδημαϊκή έρευνα και βιομηχανία."
featured: true
---

Το GNU Octave είναι η κορυφαία επιλογή αν θέλετε να τρέξετε κώδικα MATLAB χωρίς να πληρώσετε. Σε αντίθεση με το Scilab (διαφορετική σύνταξη), το Octave προσπαθεί να είναι **συμβατό**.

**Βασικές Δυνατότητες (MATLAB-like):**

- **Scripting Language** (`.m` files) με υποστήριξη συναρτήσεων, δομές ελέγχου (if, for, while).
- **Built-in Functions:** `plot()`, `surf()`, `eig()`, `inv()`, `fft()`, `svd()`, `ode45()`.
- **Graphics (QT-based figure window, με επιλογή export PNG/PDF).**
- **Sparse matrices, Complex numbers.**
- **Integration with C++/C/Fortran (mex files).**
- **Octave Forge (collection of packages):** Control, Signal, Image, Statistics, Optimization, Instrument Control, κλπ.

**Octave vs MATLAB (Reality Check):**

| Χαρακτηριστικό | GNU Octave | MATLAB |
|---|---|---|
| **GUI Debugger** | ✅ (βασικό) | ✅ (προηγμένο) |
| **Toolboxes (Signal, Control)** | Octave Forge (community, not all functions) | Official MathWorks toolboxes (extensive) |
| **Simulink (block diagrams)** | ❌ (καμία εναλλακτική) | ✅ |
| **Performance (for loops)** | Αργό (interpreted) | Μέτριο (JIT) |
| **Compiler (`mcc`)** | ❌ | ✅ |
| **Πλατφόρμες** | Windows, macOS, Linux | Windows, macOS, Linux |

> **Σημείωση:** Το GNU Octave είναι ιδανικό για **μαθήματα υπολογιστικών μεθόδων**, **γραμμικής άλγεβρας**, και **σήματος/ελέγχου** (με τα αντίστοιχα Octave Forge packages). Δεν αντικαθιστά το Simulink (αλλά υπάρχει το Scilab/Xcos). Για επαγγελματική ανάπτυξη (finance, automotive), προτιμήστε MATLAB (ή Python).

