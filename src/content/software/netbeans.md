---
title: "Apache NetBeans"
alternative_to: ["IntelliJ IDEA (Ultimate)", "Eclipse IDE", "Microsoft Visual Studio (Java workloads)"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία", "Προγραμματισμός"]
website: "https://netbeans.apache.org/"
logo: "/images/placeholder.svg"
license: "Apache-2.0"
description: "IDE ανοιχτού κώδικα για Java, PHP, JavaScript, C/C++, HTML5, και άλλες γλώσσες, με έμφαση στην ευκολία χρήσης, τον πλούσιο editor, και τα ενσωματωμένα εργαλεία (GUI builder, profiler)."
featured: false
---

Το Apache NetBeans (πρώην Sun/Oracle NetBeans) είναι ένα πλήρες, cross-platform IDE που ξεχωρίζει για τα **ενσωματωμένα εργαλεία** που σε άλλα IDEs απαιτούν plugins: Swing GUI builder (Matisse), profiler, Java ME (mobile) development, και C/C++ remote development. Μετά από δωρεά στην Apache Foundation, συνεχίζει να αναπτύσσεται ως community project.

**Βασικές Δυνατότητες:**

- **Editor (Java):** Context-aware autocomplete, refactoring (rename, move, change method signature), hints (lightbulb), code generation (getters/setters, toString), live templates.
- **GUI Builder (Swing/JavaFX):** Matisse GUI builder (drag-and-drop) για Swing – εξαιρετικά παραγωγικό για desktop Java apps. Υποστήριξη JavaFX Scene Builder (συνεργασία).
- **Java Profiler:** Ενσωματωμένος profiler (CPU, memory, threads) – πολύ χρήσιμος για performance debugging χωρίς να εγκαταστήσετε VisualVM.
- **Web & JavaScript:** Editors για HTML, CSS, JavaScript (ES6), Node.js, PHP (έως 8.2). Debugger για Node.js και XDebug (PHP).
- **C/C++ Development:** Remote development (over SSH), debugging (gdb), integration με Qt framework.
- **Build Tools:** Υποστήριξη Maven (built-in), Gradle, Ant (παλαιότερα).
- **Version Control:** Git, Subversion, Mercurial (built-in).

**Σύγκριση με Eclipse & IntelliJ:**

| Χαρακτηριστικό | NetBeans | Eclipse | IntelliJ (Community) |
|---|---|---|---|
| **GUI Builder (Swing)** | ✅ (Matisse, κορυφαίο) | ❌ (3rd party plugin) | ✅ (basic) |
| **Java Profiler** | ✅ (built-in) | ❌ (plugin) | ❌ (Ultimate only) |
| **C/C++ Remote Dev** | ✅ | ✅ (CDT) | ❌ |
| **RAM consumption** | ~500-800 MB | ~800-1200 MB | ~600-1000 MB |
| **PHP Support** | ✅ (built-in) | ✅ (PDT plugin) | ❌ (Ultimate only) |

> **Σημείωση:** Το NetBeans είναι ιδανικό για Java desktop developers (Swing/JavaFX) και για PHP developers που θέλουν ενσωματωμένο debugging. Δεν είναι τόσο δημοφιλές όσο Eclipse ή IntelliJ (ειδικά για web frameworks), αλλά παραμένει μια σταθερή, ελαφρύτερη εναλλακτική.
