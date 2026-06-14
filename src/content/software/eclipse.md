---
title: "Eclipse IDE"
alternative_to: ["Microsoft Visual Studio", "IntelliJ IDEA Ultimate", "NetBeans"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία", "Προγραμματισμός"]
website: "https://www.eclipse.org/"
logo: "/images/placeholder.svg"
license: "EPL-2.0 (Eclipse Public License)"
description: "Ένα από τα πιο δημοφιλή, ισχυρά και επεκτάσιμα Integrated Development Environments (IDE) παγκοσμίως, με τεράστιο οικοσύστημα plugins για Java, C/C++, Python, PHP, JavaScript, Rust, Go, και εκατοντάδες άλλες γλώσσες και frameworks."
featured: true
---

Το Eclipse IDE είναι ένα open-source, πλατφορμικό (cross-platform) περιβάλλον ανάπτυξης λογισμικού, γνωστό κυρίως για την υποστήριξη Java (με κορυφαίο refactoring και debugging), αλλά χάρη στην αρχιτεκτονική plugins μπορεί να μετατραπεί σε IDE για σχεδόν οποιαδήποτε γλώσσα. Ιδρύθηκε από την IBM το 2001 και πλέον διαχειρίζεται από το Eclipse Foundation (μη κερδοσκοπικό).

**Βασικά Χαρακτηριστικά:**

- **Plug-in Architecture (OSGi):** Ο πυρήνας Eclipse είναι ένας μικρός runtime (Equinox OSGi). Όλες οι δυνατότητες (γλώσσες, editors, debuggers, build tools) είναι plugins. Μπορείτε να εγκαταστήσετε μόνο ό,τι χρειάζεστε.
- **Java Development Tools (JDT):** Ένας από τους καλύτερους editors για Java: autocompletion, refactoring (rename, extract method, inline), debugging (breakpoints, watches, step-through), JUnit integration, Maven/Gradle integration (μέσω plugins).
- **C/C++ Development Tools (CDT):** IDE για C/C++ με syntax highlighting, indexing, debugger (GDB integration), makefile generation.
- **Web Tools Platform (WTP):** JavaScript, HTML, CSS, XML, JSON editors, plus server adapters (Tomcat, Jetty, WildFly).
- **Plugins Marketplace:** Χιλιάδες plugins: Python (PyDev), PHP (PDT), Rust (Corrosion), Go (GoClipse), Kotlin, Scala, Android (ADT – deprecated), Spring (Spring Tools), Hibernate, JPA, κ.ά.
- **Version Control:** Ενσωμάτωση Git (EGit), SVN (Subclipse), CVS (built-in), Mercurial.
- **Build & CI/CD:** Eclipse JDT compiler (incremental compilation), Maven integration (m2e), Gradle (Buildship), Jenkins integration.

**Εκδόσεις (Packs):**

| Έκδοση (Package) | Περιεχόμενο |
|---|---|
| **Eclipse IDE for Java Developers** | JDT + Git + Maven |
| **Eclipse IDE for Enterprise Java** | Java EE / Jakarta EE + JPA + JSF + Servlets + WildFly/Tomcat adapters |
| **Eclipse IDE for C/C++ Developers** | CDT + Git + Linux tools |
| **Eclipse IDE for PHP Developers** | PDT + DLTK (JavaScript) + Git |
| **Eclipse IDE for RCP and RAP** | Develop Eclipse plugins/RCP applications |
| **Eclipse Modeling Tools** | Papyrus (UML), Sirius, EMF, Xtext |

> **Σημείωση:** Το Eclipse είναι βαρύτερο από VS Code (καταναλώνει περισσότερη RAM), αλλά παραμένει η επιλογή πολλών Java developers για μεγάλα enterprise projects (λόγω ανώτερου refactoring και debugging). Για σύγχρονη web development (React, Node.js), το VS Code προτιμάται.
