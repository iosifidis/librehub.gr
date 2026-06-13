---
title: "Kubernetes (K8s)"
alternative_to: ["VMware Tanzu", "Red Hat OpenShift (proprietary features)", "Docker Swarm", "Apache Mesos"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Εργαλεία"]
website: "https://kubernetes.io/"
logo: "/images/placeholder.svg"
license: "Apache-2.0"
description: "Πανίσχυρο, ανοιχτού κώδικα σύστημα orchestration για containers. Αυτοματοποιεί την ανάπτυξη (deployment), κλιμάκωση (scaling), και διαχείριση εφαρμογών σε clusters. Εξελίχθηκε από το Google Borg και αποτελεί το de facto standard για cloud-native υποδομές."
featured: true
---

Το Kubernetes (συντ. K8s) είναι ένα σύστημα orchestration containers ανοιχτού κώδικα, που διαχειρίζεται εφαρμογές σε **pods** (ομάδες containers) σε ένα cluster από μηχανές (nodes). Παρέχει αυτόματη ανάκτηση από failures, rolling updates, service discovery, load balancing, persistent storage, auto-scaling, και declarative configuration (YAML).

**Βασικές Έννοιες (Objects):**

- **Pod:** Η μικρότερη μονάδα deployment (1+ containers που μοιράζονται network/storage).
- **Deployment:** Declarative updates για pods και replicasets (replicas, rolling updates, rollbacks).
- **Service:** Σταθερό IP/DNS για ένα σύνολο pods (load balancing).
- **Ingress:** HTTP/HTTPS routing (external access) με rules (host, path, TLS).
- **ConfigMap / Secret:** Αποθήκευση configuration (μη ευαίσθητων) και ευαίσθητων δεδομένων (π.χ. passwords, tokens).
- **PersistentVolume (PV) / PersistentVolumeClaim (PVC):** Storage abstraction (NFS, Ceph, AWS EBS, etc.).
- **Namespace:** Εικονική απομόνωση resources (π.χ. `prod`, `staging`).
- **Helm (package manager):** Charts για templating και εγκατάσταση εφαρμογών (MySQL, Prometheus, κ.ά.).

**Cluster Αρχιτεκτονική:**

- **Control Plane (Master):**
    - **API Server:** Μοναδική είσοδος για όλες τις λειτουργίες (REST API).
    - **etcd:** Distributed key-value store (όλη η κατάσταση cluster).
    - **Scheduler:** Αναθέτει pods σε nodes με βάση πόρους.
    - **Controller Manager:** Ελέγχει replicasets, deployments, endpoints, κ.λπ.
- **Nodes (Workers):**
    - **kubelet:** Agent που επικοινωνεί με control plane.
    - **Container Runtime:** containerd, CRI-O, ή Docker (deprecated).
    - **kube-proxy:** Network proxy (iptables/IPVS) για services.

**Πλεονεκτήματα & Περιπτώσεις Χρήσης:**

| Χρήση | Περιγραφή |
|---|---|
| **Microservices** | Διαχείριση 10+ μικρών services με διαφορετικές απαιτήσεις scaling. |
| **CI/CD pipelines** | Jenkins/Tekton operators, αυτόματο deployment after git push. |
| **Multi-cloud / Hybrid** | Το ίδιο cluster μπορεί να τρέξει σε AWS, GCP, Azure, on-prem. |
| **Batch jobs (ML)** | Εκτέλεση ML training jobs (Jobs, CronJobs). |
| **Stateful applications** | Databases (StatefulSets, operators) – π.χ. PostgreSQL Operator. |

**Εκδόσεις & Διανομές (Distributions):**

- **Vanilla Kubernetes (kubeadm):** Pure upstream, για χρήστες που θέλουν έλεγχο.
- **Minikube / Kind / K3s:** Lightweight clusters για local development.
- **Managed Kubernetes (Cloud):** EKS (AWS), GKE (Google), AKS (Azure), DOKS (DigitalOcean).
- **Enterprise Platforms:** OpenShift (Red Hat), Rancher, Tanzu (VMware) – περιλαμβάνουν επιπλέον features (UI, monitoring, security).

> **Σημείωση:** Το Kubernetes είναι **σύνθετο** (μεγάλη καμπύλη εκμάθησης). Για μικρές εφαρμογές, Docker Swarm (απλούστερο) ή ένα PaaS (Heroku, Dokku, CapRover) μπορεί να είναι πιο κατάλληλο. Για οργανισμούς με περισσότερα από 3-5 microservices ή απαιτήσεις high availability, το Kubernetes είναι η λύση.
