---
title: "Apache HTTP Server"
alternative_to: ["Microsoft IIS", "Nginx (commercial support)", "LiteSpeed"]
categories: ["Ανάπτυξη Λογισμικού", "Server", "Reverse Proxy", "Web"]
website: "https://httpd.apache.org/"
logo: "/images/apache.png"
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

> **Σημείωση:** Ο Apache είναι ιδανικός για shared hosting (.htaccess), πολύπλοκες ρυθμίσεις URL rewriting, και περιβάλλοντα με πολλαπλές εφαρμογές. Για ακραία υψηλό concurrency static files, ο Nginx συχνά υπερέχει, αλλά ο Apache παραμένει ο πιο ευέλικτος και καλά τεκμηριωμένο web server.
