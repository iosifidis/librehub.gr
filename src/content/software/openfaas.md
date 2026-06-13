---
title: "OpenFaaS (Functions as a Service)"
alternative_to: ["AWS Lambda", "Google Cloud Functions", "Azure Functions", "Cloudflare Workers (self-hosted alternative)"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Εργαλεία"]
website: "https://www.openfaas.com/"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Πλαίσιο ανοιχτού κώδικα για την εκτέλεση συναρτήσεων (functions) ως serverless υπηρεσίες πάνω από containers. Υποστηρίζει οποιαδήποτε γλώσσα (Python, Node.js, Go, Java, C#, κ.ά.) και μπορεί να τρέξει σε Kubernetes ή Docker Swarm."
featured: false
---

Το OpenFaaS (Open Functions as a Service) είναι μια πλατφόρμα serverless ανοιχτού κώδικα που επιτρέπει στους developers να πακετάρουν κώδικα ως **συναρτήσεις (functions)** χωρίς να ανησυχούν για το underlying infrastructure. Κάθε function τρέχει μέσα σε ένα container (Docker) και ενεργοποιείται μέσω HTTP requests (REST) ή events (message queues). Είναι σχεδιασμένο να τρέχει πάνω από Kubernetes (κυρίως) ή Docker Swarm, προσφέροντας autoscaling, health checks, metrics, και observability.

**Βασικές Έννοιες & Λειτουργίες:**

- **Functions (συναρτήσεις):** Μικρά κομμάτια κώδικα (μία είσοδος, μία έξοδος). Κάθε function έχει ένα Docker image, που μπορεί να χτιστεί από ένα stack (π.χ. `python3-http`, `node12`, `go`).
- **Gateway (API gateway):** Το κεντρικό component που δέχεται requests (π.χ. `/function/helloworld`) και κατανέμει σε function replicas.
- **CLI (`faas-cli`):** Δημιουργία, build, push, deploy, invoke functions.
- **Autoscaling:** Κλιμάκωση από 0 (scale to zero) έως Ν replicas, βάση prometheus metrics (requests per second). Το OpenFaaS (community) υποστηρίζει scale-to-zero (διακόπτει idle functions) για εξοικονόμηση πόρων.
- **UI Portal:** Web interface για λίστα functions, invoke, metrics.
- **Secrets & Configuration:** Υποστήριξη secrets (kubernetes secrets) και environment variables.

**Πώς λειτουργεί:**

1.  **Συγγραφή function:** Γράφετε μια handler function (π.χ. `handler.py` με `def handle(req):`).
2.  **Build:** `faas-cli build --tag ...` – δημιουργεί Docker image.
3.  **Push:** `faas-cli push` (π.χ. σε Docker Hub).
4.  **Deploy:** `faas-cli deploy` – δημιουργεί service στο Kubernetes.
5.  **Invoke:** `curl https://gateway/function/function-name` ή `faas-cli invoke`.

**Υποστήριξη γλωσσών (Official Templates):**

- **Python (3.7-3.11)** – με Flask ή HTTP framework.
- **Node.js (12-20)** – Express-like.
- **Go** – raw HTTP handler.
- **Java (11, 17)** – Spring Boot function.
- **C# (.NET Core)** – ASP.NET Core.
- **Ruby, PHP, Rust, PowerShell, κ.ά.** – από community templates.

**OpenFaaS vs Commercial Serverless (AWS Lambda):**

| Χαρακτηριστικό | OpenFaaS | AWS Lambda |
|---|---|---|
| **Φιλοξενία** | Self-hosted (K8s, on-prem, cloud) | Managed (AWS only) |
| **Κόστος** | Δωρεάν (μόνο server cost) | Pay-per-invocation + memory |
| **Γλώσσες** | Any (container) | Node, Python, Java, Go, .NET, Ruby, Custom Runtimes |
| **Scale-to-zero** | Ναι (προαιρετικά) | Ναι |
| **Cold start latency** | ~100-500ms (depends on image) | ~100-200ms (optimized) |
| **Event sources** | HTTP (κυρίως), Kafka, NATS | SQS, SNS, Kinesis, API Gateway, S3, κ.ά. (πλούσια) |

> **Σημείωση:** Το OpenFaaS είναι ιδανικό για οργανισμούς που θέλουν να κρατήσουν το serverless workload στο δικό τους infrastructure (on-prem ή hybrid cloud) ή θέλουν να αποφύγουν vendor lock-in. Για μικρές λειτουργίες που χρειάζονται υψηλή παραγωγικότητα και δεν έχουν DevOps ομάδα, τα managed solutions (AWS Lambda, Cloud Functions) είναι απλούστερα.
