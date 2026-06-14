---
title: "Valgrind"
alternative_to: ["IBM Rational Purify (deprecated)", "AddressSanitizer (ASan)", "Intel Inspector (commercial)"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία", "Προγραμματισμός"]
website: "https://valgrind.org/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Εργαλείο αποσφαλμάτωσης και ανάλυσης κώδικα (instrumentation framework) για εφαρμογές C, C++, και (εν μέρει) Rust. Ανιχνεύει memory leaks, invalid memory accesses, race conditions, cache misses, και performance bottlenecks, χρησιμοποιώντας μια εικονική μηχανή (VM) που προσομοιώνει τον επεξεργαστή."
featured: false
---

Το Valgrind είναι ένα δημοφιλές εργαλείο δυναμικής ανάλυσης για εφαρμογές C/C++ σε Linux (υπάρχει υποστήριξη macOS, Solaris, αλλά Linux είναι primary). Δεν απαιτεί recompilation με ειδικές flags (αν και με `-g` δίνει καλύτερα traces). Λειτουργεί "προσομοιώνοντας" την εκτέλεση του προγράμματος (καθιστώντας το σχετικά αργό, 10-50x πιο αργό από native run). Είναι απαραίτητο για debugging και hardening.

**Βασικά Εργαλεία (Tools) του Valgrind:**

| Tool | Usage | Περιγραφή |
|---|---|---|
| **Memcheck** | `valgrind --tool=memcheck ./program` | Ανίχνευση memory leaks (definite, indirect, possible), invalid reads/writes (heap/stack), use of uninitialized memory, double frees. **(Πιο συχνό)** |
| **Cachegrind** | `--tool=cachegrind` | Cache profiling (simulates L1/L2 cache misses, instruction fetches). |
| **Callgrind** | `--tool=callgrind` | Call graph generation (functions called, cost attribution). Output compatible with KCachegrind. |
| **Helgrind** | `--tool=helgrind` | Detection of race conditions in multithreaded programs (pthreads). |
| **DRD** | `--tool=drd` | Another thread error detector (race conditions, deadlocks, lock contention). |
| **Massif** | `--tool=massif` | Heap profiler (memory usage over time, peak allocation). |
| **DHAT** | `--tool=dhat` | Heap blocks analysis (lifetime, read/write patterns). |

**Παραδείγματα (Memcheck):**

```bash
gcc -g -o myprog myprog.c   # compile with debug symbols
valgrind --leak-check=full ./myprog
```

Output example:
```
==12345== 100 bytes in 1 blocks are definitely lost in loss record 10 of 10
==12345==    at 0x4C2FB0F: malloc (vg_replace_malloc.c:299)
==12345==    by 0x4005A4: main (myprog.c:15)
```

**Σύγκριση (AddressSanitizer - ASan):**

| Χαρακτηριστικό | Valgrind (Memcheck) | AddressSanitizer (ASan) |
|---|---|---|
| **Ταχύτητα** | 10-50x αργότερο | 2-3x αργότερο |
| **Απαιτεί recompile** | Όχι (μπορεί και σε binary, αλλά λιγότερες πληροφορίες) | Ναι (πρέπει να compile με `-fsanitize=address`) |
| **Memory overhead** | Υψηλό | Μέτριο |
| **Ανίχνευση** | out-of-bounds (heap/stack), leaks, uninitialized | out-of-bounds (heap/stack, λιγότερο stack), leaks, use-after-free |
| **Πλατφόρμες** | Linux (primary), macOS, Solaris | Linux, macOS, Windows (MSVC), Android |

> **Σημείωση:** Σήμερα, πολλοί developers προτιμούν **ASan** + **LeakSanitizer** (ενσωματωμένο στο Clang/GCC) για καθημερινή χρήση (είναι ταχύτερο). Ωστόσο, το Valgrind (Memcheck) παραμένει χρήσιμο όταν δεν μπορείτε να recompile (π.χ. debugging τρίτων βιβλιοθηκών) ή όταν χρειάζεστε Cachegrind/Callgrind/Massif.
