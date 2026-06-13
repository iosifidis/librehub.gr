---
title: "Docker"
alternative_to: ["VMware vSphere (container vs VM)", "Podman (daemonless)", "containerd + nerdctl"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Εργαλεία"]
website: "https://www.docker.com/"
logo: "/images/placeholder.svg"
license: "Apache-2.0 (Moby engine), Commercial (Docker Desktop)"
description: "Η κορυφαία πλατφόρμα για τη δημιουργία, αποστολή και εκτέλεση εφαρμογών σε containers. Απλοποιεί τη διαχείριση περιβαλλόντων, την απομόνωση εφαρμογών και την αυτοματοποίηση ανάπτυξης (CI/CD) μέσω εικόνων OCI (Open Container Initiative)."
featured: true
---

Το Docker είναι η πιο δημοφιλής πλατφόρμα containerization παγκοσμίως, που επέφερε επανάσταση στον τρόπο που οι προγραμματιστές χτίζουν, δοκιμάζουν και παραδίδουν λογισμικό. Χρησιμοποιεί containerization (ελαφριά virtualization) για να συσκευάζει μια εφαρμογή και όλες τις εξαρτήσεις της σε μια φορητή εικόνα (image), η οποία εκτελείται με ταυτόχρονη (απομόνωση) σε οποιοδήποτε σύστημα με Docker Engine.

**Βασικές Έννοιες & Εργαλεία:**

- **Docker Engine (Docker daemon + containerd):** Η υποδομή που τρέχει containers (runtime) και διαχειρίζεται εικόνες, δίκτυα, volumes.
- **Docker CLI (`docker`):** Γραμμή εντολών για αλληλεπίδραση με τον daemon (`docker run`, `docker build`, `docker push`, κ.ά.).
- **Docker Hub / Registry:** Cloud-based ή private registry για αποθήκευση και διαμοιρασμό εικόνων.
- **Docker Compose:** Εργαλείο για ορισμό και εκτέλεση multi-container εφαρμογών (π.χ. web app + MySQL + Redis) με ένα αρχείο YAML.
- **Docker Build:** Δημιουργία εικόνων μέσω Dockerfile (script με οδηγίες `FROM`, `RUN`, `COPY`, `CMD`).
- **Docker Desktop:** Εφαρμογή για Windows/macOS που περιλαμβάνει Docker Engine, Kubernetes cluster, Compose, και GUI dashboard. (Δωρεάν για μικρές ομάδες, commercial license για μεγάλες).

**Πλεονεκτήματα:**

- **Φορητότητα (Portability):** Το ίδιο container τρέχει σε laptop, server, cloud (AWS ECS, Google GKE, Azure AKS).
- **Ελαφρύτητα (vs VM):** Τα containers μοιράζονται τον kernel του host, άρα ξεκινούν σε δευτερόλεπτα και καταναλώνουν λίγη RAM.
- **Απομόνωση (Isolation):** Κάθε container έχει δικό του filesystem, network stack, process space (αλλά λιγότερο απομονωμένο από VM).
- **Dev-Prod Parity:** Η ίδια εικόνα τρέχει σε development, staging, production (μειώνει "bugs λόγω περιβάλλοντος").

**Εκδόσεις & Άδειες:**

| Έκδοση | Περιγραφή | Κόστος |
|---|---|---|
| **Docker Engine Community (CE)** | Open source (Apache-2.0), Linux daemon | Δωρεάν |
| **Docker Desktop** | GUI + tooling (Windows/Mac) | Δωρεάν για μικρές ομάδες (<250 υπαλλήλους, <$10M revenue). Commercial license για enterprises ($9/μήνα ανά χρήστη). |
| **Docker Hub** | Registry (1 private repo δωρεάν, απεριόριστα public) | Δωρεάν / Pro ($5/μήνα) / Team ($9/μήνα). |

> **Σημείωση:** Το Docker παραμένει η de facto λύση για containerization σε development και παραγωγή. Ωστόσο, οι enterprise χρήστες στρέφονται συχνά σε **Podman** (για daemonless rootless containers) ή **containerd** + **nerdctl** (για ακόμα μεγαλύτερη απόδοση), ειδικά σε production Kubernetes clusters, όπου το Docker δεν χρησιμοποιείται πλέον ως runtime (αντικαταστάθηκε από containerd).
