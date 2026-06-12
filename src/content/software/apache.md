---
title: "Apache HTTP Server"
alternative_to: ["Microsoft IIS", "Nginx (commercial support)", "LiteSpeed"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Server"]
website: "https://httpd.apache.org/"
logo: "/images/placeholder.svg"
license: "Apache-2.0"
description: "Ο πιο διαδεδομένος και ώριμος διακομιστής ιστού (web server) παγκοσμίως, γνωστός για την ευελιξία του, την εκτεταμένη διαμόρφωση ανά φάκελο (.htaccess) και τη δυνατότητα δυναμικής φόρτωσης modules."
featured: true
---

Ο Apache HTTP Server (httpd) είναι ένας γρήγορος, αξιόπιστος και επεκτάσιμος διακομιστής ιστού ανοιχτού κώδικα, που τροφοδοτεί ιστοσελίδες κάθε κλίμακας — από προσωπικά blogs έως κρίσιμες υποδομές παραγωγής (mission-critical). Αποτελεί το μακροβιότερο και πιο δημοφιλές web server, με μερίδιο που για χρόνια ξεπερνούσε το 50% του ενεργού διαδικτύου. Είναι έργο του Apache Software Foundation.

**Βασικές Δυνατότητες:**

- **Ευέλικτη Διαμόρφωση (Configuration):** Υποστήριξη .htaccess (διαμόρφωση ανά φάκελο), virtual hosts (πολλαπλοί ιστότοποι στον ίδιο server), dynamic module loading (προσθήκη/αφαίρεση modules χωρίς recompile).
- **Ασφάλεια (Security):** Πλήρης υποστήριξη TLS/SSL (OpenSSL ή LibreSSL), authentication modules (Basic, Digest, LDAP, DB), λεπτομερής έλεγχος πρόσβασης (allow/deny based on IP, user agent, κ.ά.).
- **Απόδοση (Performance):** Event MPM (multi-processing module) για διαχείριση πολλαπλών συνδέσεων, υποστήριξη HTTP/2, content caching (mod_cache), reverse proxy (mod_proxy), load balancing.
- **Επεκτασιμότητα (Extensibility):** Πάνω από 100 επίσημα modules (rewriting – mod_rewrite, proxying, SSI, CGI, scripting (PHP via mod_php), WebDAV, FTP, κ.ά.).
- **Φορητότητα (Portability):** Λειτουργεί σε Linux, Windows, macOS, BSD, Solaris, και άλλα Unix-like συστήματα.

**Εκδόσεις & Συντήρηση:**

- **2.4.x (stable):** Η τρέχουσα κύρια έκδοση, με τακτικές ενημερώσεις (π.χ. 2.4.68, Ιούνιος 2026). Απαιτείται 2.4.43+ για TLS 1.3 με OpenSSL 1.1.1.
- **2.2.x (EOL):** End-of-Life από το 2017 (τελευταία έκδοση 2.2.34). Δεν λαμβάνει patches ασφαλείας.

> **Σημείωση:** Ο Apache είναι ιδανικός για shared hosting (.htaccess), πολύπλοκες ρυθμίσεις URL rewriting, και περιβάλλοντα με πολλαπλές εφαρμογές. Για ακραία υψηλή ταυτοχρονία (concurrency) static files, το Nginx συχνά υπερέχει, αλλά ο Apache παραμένει το πιο ευέλικτο και καλά τεκμηριωμένο web server.