---
title: "WildFly (formerly JBoss AS)"
alternative_to: ["Oracle WebLogic Server", "IBM WebSphere", "Payara Server (GlassFish)"]
categories: ["Cloud", "Server", "Ανάπτυξη Λογισμικού"]
website: "https://www.wildfly.org/"
logo: "/images/placeholder.svg"
license: "LGPL-2.1"
description: "Ευέλικτος, modular, και lightweight application server για εφαρμογές Java Enterprise (Jakarta EE), πρώην γνωστός ως JBoss Application Server. Υλοποιεί Jakarta EE 8/10/11 profiles και MicroProfile."
featured: false
---

Το WildFly (πρώην **JBoss Application Server**) είναι ένας application server ανοιχτού κώδικα, σχεδιασμένος για να τρέχει εφαρμογές Java Enterprise (Jakarta EE). Αναπτύσσεται από την Red Hat (τώρα IBM) και αποτελεί την upstream (κοινοτική) έκδοση του Red Hat JBoss Enterprise Application Platform (EAP). Είναι ελαφρύ, modular, και υποστηρίζει τόσο παραδοσιακές Java EE όσο και σύγχρονες microservices με MicroProfile.

**Πυρήνας Λειτουργιών:**

- **Jakarta EE Implementation:** Υλοποιεί specs: Servlets, JSP, JSF, EJB, JPA, JTA, JMS (ActiveMQ Artemis), WebServices (JAX-WS, JAX-RS), JSON-P, JSON-B, CDI, Bean Validation, Security (Jakarta Authentication, Authorization), Batch, Concurrency, Mail.
- **Modular Architecture (JBoss Modules):** Κάθε εφαρμογή βλέπει μόνο τις dependencies της (classloader isolation). Ο server χρησιμοποιεί μόνο όσα modules χρειάζονται, με αποτέλεσμα μικρότερο footprint.
- **Centralized Configuration (Domain Mode):** Διαχείριση πολλαπλών server instances (domain) από ένα κεντρικό domain controller (υποστηρίζει clustering, HA, load balancing).
- **Management Interfaces:** CLI (Command Line Interface), Web-based Admin Console, HTTP/JSON REST API, JMX.
- **Standards-based:** Υποστήριξη Jakarta EE 8 (WildFly 18-26), Jakarta EE 10 (WildFly 27-32), Jakarta EE 11 (WildFly 33+). Παράλληλα, υποστηρίζει MicroProfile (1.4 έως 6.0, ανάλογα με έκδοση).

**Εκδόσεις & Καταλληλότητα:**

| Έκδοση | Περιγραφή | Χρήση |
|---|---|---|
| **WildFly (Community)** | Δωρεάν, ενημερώσεις (νέα features) | Development, testing, production (non-critical) |
| **Red Hat JBoss EAP (Enterprise)** | Commercial (subscription), long-term support (5-7 έτη), certification | Mission-critical production (financial, government) |
| **WildFly Bootable JAR** | WildFly packaged as executable JAR (microservices) | Cloud-native Java EE apps (Docker, Kubernetes) |

**Σύγκριση με WebLogic/WebSphere:**

| Χαρακτηριστικό | WildFly | WebLogic | WebSphere |
|---|---|---|---|
| **License** | LGPL/LGPL-2.1 | Commercial | Commercial |
| **Footprint** | ~70 MB (runtime) | ~500 MB+ | ~600 MB+ |
| **Startup Time** | 2-5 sec | 30-60 sec | 45-90 sec |
| **Cluster / HA** | Ναι (Domain mode) | Ναι | Ναι |
| **Administration** | CLI/Web Console | Web Console + WLST | Web Console + wsadmin |

> **Σημείωση:** Το WildFly είναι η κορυφαία επιλογή open source για εφαρμογές Java EE/Jakarta EE, ειδικά αν έρχεστε από Tomcat (αλλά χρειάζεστε Java EE features όπως EJB, JMS, JTA). Για μικρές εφαρμογές, μόνο με Servlets/JSP, το Tomcat είναι ελαφρύτερο.