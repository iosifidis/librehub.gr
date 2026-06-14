---
title: "GCC (GNU Compiler Collection)"
alternative_to: ["Microsoft Visual C++ (MSVC)", "Clang (LLVM)", "Intel oneAPI DPC++/C++"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία", "Προγραμματισμός"]
website: "https://gcc.gnu.org/"
logo: "/images/placeholder.svg"
license: "GPL-3.0 (with GCC Runtime Library Exception)"
description: "Το βασικό σύστημα μεταγλωττιστών (compiler) του GNU Project, που υποστηρίζει C, C++, Fortran, Ada, Go, D, Modula-2, και άλλες γλώσσες. Αποτελεί τον προεπιλεγμένο compiler για τα περισσότερα συστήματα Linux, και είναι γνωστός για τη βελτιστοποίηση υψηλής απόδοσης και την υποστήριξη αρχιτεκτονικών (x86, ARM, RISC-V, PowerPC, κ.ά.)."
featured: true
---

Το GCC (GNU Compiler Collection) είναι μια συλλογή μεταγλωττιστών που αναπτύχθηκε από το GNU Project για το λειτουργικό σύστημα GNU, και πλέον χρησιμοποιείται ως ο επίσημος compiler για το Linux kernel και τα περισσότερα Linux distributions. Υποστηρίζει πάνω από 50 γλώσσες (μέσω front-ends), με κορυφαίες: C, C++, Fortran, Ada (GNAT), Go (gccgo), D (gdc).

**Μπροστά μέρη (Front-ends) & γλώσσες:**

| Γλώσσα | Front-end | Status |
|---|---|---|
| C | `gcc` (GNU C compiler) | Active |
| C++ | `g++` | Active |
| Fortran | `gfortran` | Active |
| Ada | `gnat` | Active |
| Go | `gccgo` | Active |
| D | `gdc` | Active |
| Modula-2 | `gm2` | Experimental |
| OpenMP | `gomp` (library) | Active |

**Βασικά Χαρακτηριστικά:**

- **Optimizations:** O2, O3, Ofast, Os, Oz (μέγεθος), -march=native (specific CPU), LTO (Link Time Optimization), Auto-vectorization (SIMD).
- **Cross-compilation:** Μπορεί να μεταγλωττίσει code για διαφορετική αρχιτεκτονική (π.χ. compile on x86 for ARM).
- **Static analysis:** `-Wall`, `-Wextra`, `-Wpedantic`, `-Werror`, `-fsanitize=address` (AddressSanitizer), `-fsanitize=thread` (ThreadSanitizer).
- **Debugging info:** `-g` (DWARF) για GDB.
- **C++ Standards:** Υποστηρίζει C++11, C++14, C++17, C++20, C++23 (μερικώς), και C++26 (work in progress).
- **OpenMP, OpenACC (parallel programming).**
- **Standard Library:** libstdc++ (C++), libgfortran (Fortran), libgcc (runtime), libgomp (OpenMP).

**Σύγκριση (Clang vs GCC):**

| Χαρακτηριστικό | GCC | Clang (LLVM) |
|---|---|---|
| **Άδεια** | GPL-3.0 (copyleft) | Apache-2.0 (permissive) |
| **Ταχύτητα compilation** | Μέτρια (λίγο πιο αργό από Clang) | Γρήγορη |
| **Optimizations (C/C++)** | Κορυφαίες (παλιά expertise) | Σχεδόν ίδιο, ειδικά με PGO |
| **Error messages** | Ιστορικά φτωχότερες (βελτιώνονται) | Φιλικές (με χρώμα, hints) |
| **Χρησιμοποίηση** | Linux kernel, GNU toolchain, embedded | macOS, iOS, Android (NDK), FreeBSD |

> **Σημείωση:** Σχεδόν όλα τα Linux distributions χρησιμοποιούν GCC για να compile το σύστημά τους. Για development, μπορείτε να επιλέξετε GCC (stable, ευρέως χρησιμοποιούμενο) ή Clang (νεότερο, καλύτερα error messages, γρηγορότερο compile time).
