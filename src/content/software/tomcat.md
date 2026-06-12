---
title: "Apache Tomcat"
alternative_to: ["Oracle WebLogic Server (lightweight applications)", "Eclipse Jetty (similar)", "IBM WebSphere (traditional web apps)"]
categories: ["Cloud", "Server", "Ανάπτυξη Λογισμικού"]
website: "https://tomcat.apache.org/"
logo: "/images/placeholder.svg"
license: "Apache-2.0"
description: "Ανοιχτού κώδικα implementation των Jakarta Servlet, Jakarta Server Pages (JSP), Jakarta Expression Language, Jakarta WebSocket, Jakarta Annotations και Jakarta Authentication specifications. Ιδανικός για web εφαρμογές Java (WAR files) χωρίς πλήρη Java EE container."
featured: true
---

Ο Apache Tomcat είναι ο πιο δημοφιλής servlet container / web server για εφαρμογές Java. Δεν είναι πλήρης application server (δεν περιλαμβάνει EJB, JTA, JMS, κ.λπ.), αλλά παρέχει την υλοποίηση των κρίσιμων Jakarta EE specs που χρειάζονται οι περισσότερες web εφαρμογές: Servlets, JSP, WebSockets, Expression Language, Authentication. Είναι ελαφρύς, γρήγορος, και συνήθως λειτουργεί πίσω από έναν reverse proxy (Apache ή Nginx) για static files.

**Βασικά Χαρακτηριστικά:**

- **Java Servlet Container:** Εκτελεί Java Servlets – τα οποία είναι η βάση για frameworks όπως Spring MVC, JSF, Struts, κ.ά.
- **JSP Engine (Jasper):** Compiles JSP pages into servlets dynamically.
- **WebSockets:** Υποστήριξη Jakarta WebSocket 2.x (Tomcat 10+) ή Java WebSocket 1.1 (Tomcat 9).
- **Θύρες (Connectors):** HTTP/1.1, HTTP/2 (Tomcat 8.5+), AJP (για proxy connection με Apache httpd).
- **Security Realms:** JDBC, JNDI, Memory, JAAS, LDAP, κ.ά.
- **Session Management:** In-memory, JDBC (database), Redis (via 3rd party), clustering (DeltaManager, BackupManager).
- **Επεκτασιμότητα:** Valves (pre-processing), filters, listeners, Realm extensions.
- **Management:** Web-based Manager App (deploy, undeploy, list applications) + Tomcat Manager Ant tasks & Maven plugin.

**Εκδόσεις & Jakarta EE (συγχύσεις):**

Η μετονομασία από Java EE σε Jakarta EE (λόγω Eclipse Foundation) επηρέασε τα packages από `javax.*` σε `jakarta.*`:

| Tomcat Version | Java EE / Jakarta EE | Package | End-of-Life (EOL) |
|---|---|---|---|
| **Tomcat 11.x** | Jakarta EE 11 | `jakarta.*` | ? |
| **Tomcat 10.1.x** | Jakarta EE 10 | `jakarta.*` | ? |
| **Tomcat 10.0.x** | Jakarta EE 9 (obsolete) | `jakarta.*` | (EOL – upgrade to 10.1) |
| **Tomcat 9.x** | Java EE 8 | `javax.*` | 31 Μαρτίου 2027 (announced) |
| **Tomcat 8.5.x** | Java EE 7 | `javax.*` | (EOL 2024) |

**Migration Tool:** Ο Tomcat παρέχει ένα "Migration Tool for Jakarta EE" (tomcat-jakartaee-migration) για αυτόματη μετατροπή WAR files από `javax.*` σε `jakarta.*`.

**Περιπτώσεις Χρήσης:**

- **Web εφαρμογές Java** (Spring Boot – embedded Tomcat είναι default).
- **Κλασικές Java EE web apps** (without EJB).
- **Internal tools / dashboards** (lightweight).
- **Development & testing** (παραδοσιακά JSP/servlets projects).

> **Σημείωση:** Ο Tomcat είναι ο καλύτερος servlet container ανοιχτού κώδικα (από τα πιο ώριμα projects). Δεν είναι full Java EE (δεν έχει JTA, JMS, EJB), γι' αυτό για εφαρμογές που χρειάζονται αυτά, επιλέξτε WildFly ή Open Liberty.