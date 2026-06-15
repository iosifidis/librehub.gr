---
title: "RustDesk"
alternative_to: ["TeamViewer", "AnyDesk", "Splashtop"]
categories: ["Απομακρυσμένη Πρόσβαση", "Εργαλεία", "Δίκτυα"]
website: "https://rustdesk.com/"
logo: "/images/placeholder.svg"
license: "AGPL-3.0 (server), GPL-3.0 (client)"
description: "Μια σύγχρονη, γρήγορη (γραμμένη σε Rust) υποδομή απομακρυσμένης επιφάνειας εργασίας (remote desktop), με δυνατότητα αυτο-φιλοξενίας (self-hosted server). Προσφέρει κρυπτογράφηση (TLS), NAT traversal, file transfer, TCP tunneling, και πολλαπλές οθόνες. Σχεδιάστηκε ως εναλλακτική του TeamViewer, με απλό UI και cross-platform (Windows, macOS, Linux, Android, iOS)."
featured: true
---

Το RustDesk είναι η πιο δημοφιλής open-source εναλλακτική του TeamViewer. Χρησιμοποιεί ένα δικό του πρωτόκολλο (RustDesk) και μπορεί να λειτουργήσει:

1.  **Public server (rustdesk.com):** Δωρεάν, αλλά τα δεδομένα περνούν από τους servers τους.
2.  **Self-hosted server:** Πλήρης έλεγχος, απαιτεί ελάχιστους πόρους (Go binary, ~10 MB).

**Βασικές Λειτουργίες:**

- **Remote Desktop (Screen sharing) με έλεγχο.**
- **File Transfer (αμφίδρομη).**
- **TCP Tunneling (Port forwarding) – για πρόσβαση σε services εντός του δικτύου.**
- **Chat & Voice communication (built-in).**
- **SOS (Unattended access) – μόνιμη πρόσβαση χωρίς επιβεβαίωση (με password).**
- **End-to-end encryption (TLS 1.3).**
- **Multi-monitor support.**
- **Web client (experimental).**
- **Self-hosted server (Docker) με web interface.**

**RustDesk vs MeshCentral:**

| Χαρακτηριστικό | RustDesk | MeshCentral |
|---|---|---|
| **Primary use** | Ad-hoc remote support (like TeamViewer) | Permanent IT management (RMM) |
| **Agent installation** | User downloads & runs (or installed) | Managed deployment (agents) |
| **Web-based administration** | ⚠️ (basic) | ✅ (πλήρες) |
| **Intel AMT (vPro)** | ❌ | ✅ |
| **Self-hosted server resources** | Ελάχιστα (Go) | Node.js + MongoDB |
| **Mobile apps (full control)** | ✅ (Android, iOS) | ⚠️ (view-only) |

> **Σημείωση:** Το RustDesk είναι ιδανικό για **ad-hoc remote support** (π.χ. βοήθεια σε γονείς, πελάτες) χωρίς να χρησιμοποιείτε TeamViewer. Για μόνιμη διαχείριση (π.χ. 50 servers), προτιμήστε **MeshCentral**.
