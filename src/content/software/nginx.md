---
title: "Nginx (Engine-X)"
alternative_to: ["Microsoft IIS", "Apache HTTP Server (high concurrency)", "LiteSpeed"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Server"]
website: "https://www.nginx.com/"
logo: "/images/placeholder.svg"
license: "BSD-2-Clause (core), Commercial (Nginx Plus)"
description: "Διακομιστής ιστού (web server) υψηλής απόδοσης, reverse proxy, load balancer, HTTP cache, και API gateway. Σχεδιασμένος για υψηλή ταυτοχρονία (concurrency) και χαμηλή κατανάλωση μνήμης (event-driven, asynchronous)."
featured: true
---

Το Nginx (προφέρεται "Engine-X") είναι ένας web server που ξεκίνησε το 2004 για να λύσει το πρόβλημα C10k (10.000 ταυτόχρονες συνδέσεις). Σε αντίθεση με τον Apache (process/thread-based), το Nginx χρησιμοποιεί asynchronous, event-driven αρχιτεκτονική, επιτρέποντάς του να εξυπηρετεί δεκάδες χιλιάδες ταυτόχρονες συνδέσεις με πολύ χαμηλή κατανάλωση RAM. Σήμερα είναι ο δημοφιλέστερος web server για high-traffic sites (π.χ. Netflix, Dropbox, WordPress.com).

**Λειτουργίες (Web Server & Beyond):**

- **Web Server:** Εξυπηρέτηση static files (HTML, CSS, JS, images) με εξαιρετική ταχύτητα. Υποστηρίζει HTTP/2, HTTP/3 (experimental), TLS/SSL.
- **Reverse Proxy:** Proxy requests για backend servers (Apache, Node.js, Python, PHP-FPM, Tomcat, κ.ά.) με buffering, caching, load balancing.
- **Load Balancer:** Κατανομή κίνησης μεταξύ upstream servers (round-robin, least connections, IP hash, κ.λπ.), health checks, session persistence (sticky sessions).
- **HTTP Cache:** Caching static/dynamic content (reverse proxy cache) για μείωση φορτίου backends.
- **API Gateway:** Έλεγχος πρόσβασης, rate limiting, request routing, authentication.
- **Streaming Media:** RTMP module (για live streaming), HLS/DASH support (via 3rd party).
- **Mail Proxy (IMAP/POP3/SMTP):** Λειτουργεί ως proxy για mail servers.

**Εκδόσεις & Άδειες:**

| Έκδοση | Άδεια | Χαρακτηριστικά |
|---|---|---|
| **Nginx Open Source** | BSD-2-Clause | Πλήρης web server + reverse proxy + load balancer (core features). Δωρεάν. |
| **Nginx Plus** | Commercial | Πρόσθετα features: advanced load balancing (active health checks, session draining), API gateway (JWT, OIDC), real-time metrics dashboard, 24/7 support. |

> **Σημείωση:** Το Nginx είναι η πρώτη επιλογή για σύγχρονες εφαρμογές που απαιτούν υψηλή διαθεσιμότητα, scalability, ή λειτουργούν ως microservices gateway (π.χ. Kubernetes ingress). Για shared hosting με .htaccess, ο Apache παραμένει προτιμότερος.