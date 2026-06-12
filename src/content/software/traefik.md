---
title: "Traefik"
alternative_to: ["F5 BIG-IP", "Citrix ADC", "AWS Application Load Balancer", "Nginx Plus (as ingress)"]
categories: ["Cloud", "Server", "Ανάπτυξη Λογισμικού"]
website: "https://traefik.io/traefik"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Κορυφαίος reverse proxy και load balancer ανοιχτού κώδικα, σχεδιασμένος ειδικά για σύγχρονες υποδομές (containers, microservices, Kubernetes). Υποστηρίζει αυτόματη ανακάλυψη υπηρεσιών (service discovery), dynamic configuration, και προηγμένη δρομολόγηση (HTTP, TCP, gRPC)."
featured: true
---

Το Traefik (προφέρεται "Traffic") είναι ένας σύγχρονος edge router (reverse proxy + load balancer) που **δεν χρειάζεται χειροκίνητες ρυθμίσεις** για κάθε service. Αντ' αυτού, παρακολουθεί απευθείας τα orchestration systems (Docker, Kubernetes, Consul, etcd, AWS ECS, κ.ά.) και προσαρμόζει αυτόματα τη δρομολόγηση καθώς τα services ξεκινούν ή σταματούν. Χρησιμοποιείται ευρύτατα ως Ingress controller στο Kubernetes.

**Λειτουργίες & Πλεονεκτήματα:**

- **Αυτόματη Ανακάλυψη (Service Discovery):** Παρακολουθεί provider APIs (Docker labels, Kubernetes Ingress/CRDs, Consul KV, File provider) και δημιουργεί routes dynamically – χωρίς restart.
- **Προηγμένη Δρομολόγηση (Routing):** Υποστηρίζει HTTP, HTTPS (SNI), TCP, UDP, gRPC, και WebSockets. Κριτήρια δρομολόγησης: host, path, headers, cookies, query parameters, methods.
- **Load Balancing:** Πολλαπλοί αλγόριθμοι (round-robin, least connections, IP hash). Health checks (active/passive), circuit breakers, retries, rate limiting.
- **Middleware (Προ-επεξεργασία):** Built-in middleware: authentication (Basic, Digest, ForwardAuth, JWT), compression, rate limiting, headers manipulation, whitelist/blacklist, error pages, redirects, PathStrip/Prefix, SSL passthrough.
- **TLS/SSL:** Αυτόματο HTTPS με Let's Encrypt (ACME) – όπως Caddy. Υποστήριξη wildcard certificates (DNS challenge).
- **Observability:** Ενσωματωμένο dashboard (Web UI), metrics (Prometheus, StatsD, DataDog, InfluxDB), logs (JSON), tracing (Jaeger, Zipkin).
- **Multi-tenancy:** Kubernetes Namespace isolation (IngressClass).

**Πόσο ξεχωρίζει (vs Nginx, HAProxy, Caddy):**

| Χαρακτηριστικό | Traefik | Nginx (OSS) | HAProxy | Caddy |
|---|---|---|---|---|
| **Dynamic config (watch providers)** | ✅ (native) | ❌ (requires Lua/script) | ❌ (reload required) | ❌ (API reload) |
| **Kubernetes Ingress** | ✅ (Ingress + CRDs) | ✅ (Ingress only, limited) | ✅ (Ingress via controller) | ✅ (Ingress) |
| **Dashboard UI** | ✅ (rich) | ❌ (3rd party) | ❌ (stats page) | ✅ (βασικό) |
| **WebSocket support** | ✅ | ✅ | ✅ | ✅ |
| **Middleware chain** | ✅ (πλούσιο) | ❌ (location blocks) | ❌ (acl + use_backend) | ✅ (βασικό) |

> **Σημείωση:** Το Traefik είναι **de facto standard** για Kubernetes ingress σε cloud-native εφαρμογές (ειδικά σε συνδυασμό με LetsEncrypt). Για μη-containerized υποδομές (παραδοσιακοί servers), το Nginx (ή HAProxy) παραμένει πιο απλό.