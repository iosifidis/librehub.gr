---
title: "Podman (Pod Manager)"
alternative_to: ["Docker Desktop (commercial subscription)", "containerd + nerdctl", "CRI-O (for Kubernetes)"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Εργαλεία"]
website: "https://podman.io/"
logo: "/images/placeholder.svg"
license: "Apache-2.0"
description: "Εργαλείο διαχείρισης containers χωρίς κεντρικό daemon (daemonless), που μπορεί να τρέξει rootless (χωρίς δικαιώματα διαχειριστή). Πλήρως συμβατό με Docker CLI (alias docker=podman) και υποστηρίζει pods (ομάδες containers) μεσα στην ίδια γραμμή εντολών. Ιδανικό για production συστήματα που απαιτούν ασφάλεια και χαμηλό overhead."
featured: true
---

Το Podman (Pod Manager) είναι ένα πρόγραμμα ανοιχτού κώδικα για τη διαχείριση containers, images, volumes, και pods. Σε αντίθεση με το Docker (το οποίο χρησιμοποιεί έναν κεντρικό daemon (`dockerd`) με δικαιώματα root), το Podman είναι **daemonless** και μπορεί να εκτελεί containers ως **rootless** (χωρίς `sudo`). Αυτό βελτιώνει την ασφάλεια και μειώνει την επιφάνεια επίθεσης (attack surface). Αναπτύσσεται από την Red Hat (πλέον IBM).

**Βασικές Διαφορές από Docker:**

| Χαρακτηριστικό | Podman | Docker |
|---|---|---|
| **Daemon** | ❌ (χωρίς daemon – fork/exec) | ✅ (`dockerd` root daemon) |
| **Rootless containers** | ✅ (by default, υποστήριξη 2019+) | ⚠️ (rootless mode exists, αλλά λιγότερο mature) |
| **Pods** | ✅ (pod concept παρόμοιο με Kubernetes) | ❌ (μόνο containers, pods με Docker Compose) |
| **Systemd integration** | ✅ (`podman generate systemd`) | ❌ (requires 3rd party) |
| **Docker CLI compatibility** | ✅ (`alias docker=podman`) | N/A |
| **Kubernetes YAML** | ✅ (`podman play kube`) | ❌ (μόνο Docker Compose) |
| **Windows/Mac GUI** | ⚠️ (Podman Machine – VM based) | ✅ (Docker Desktop) |

**Πλεονεκτήματα για Production:**

- **Ασφάλεια:** Rootless containers αποτρέπουν κλιμάκωση προνομίων (privilege escalation). Ακόμα κι αν ένα container καταφέρει να κάνει escape, δεν έχει root πρόσβαση στον host.
- **Systemd Integration:** Παραγωγή systemd unit files (`podman generate systemd --new`) για να ξεκινούν containers αυτόματα στο boot (no need for restart policies).
- **Pod Management:** Δημιουργία pods (π.χ. `podman pod create`, `podman pod start`) – ιδανικά για Kubernetes-like local development.
- **CRI-O (Container Runtime Interface):** Το Podman μοιράζεται την ίδια βιβλιοθήκη `libpod` με το CRI-O, το default runtime Kubernetes για RHEL/CentOS. Άρα τα containers που δοκιμάζετε τοπικά με Podman συμπεριφέρονται ίδια με production K8s.

**Χρήσεις & Εντολές (παραδείγματα):**

| Docker Command | Podman Equivalent |
|---|---|
| `docker run -it ubuntu bash` | `podman run -it ubuntu bash` |
| `docker build -t myimage .` | `podman build -t myimage .` |
| `docker push myuser/myimage` | `podman push myuser/myimage` |
| `docker-compose up` | `podman-compose up` (3rd party) ή `podman play kube` (K8s YAML) |

> **Σημείωση:** Το Podman είναι η προεπιλεγμένη λύση containerization σε RHEL (Red Hat Enterprise Linux) 8+ και Fedora. Για χρήστες Docker Desktop που θέλουν rootless, ασφαλέστερα containers, το Podman είναι η φυσική εξέλιξη. Ωστόσο, σε Windows/macOS απαιτεί VM (Podman Machine) όπως και το Docker Desktop.
