---
title: "PuTTY (SSH/Telnet Client)"
alternative_to: ["OpenSSH (Linux/macOS built-in)", "MobaXterm (Windows, commercial features)", "Windows SSH (built-in, modern)"]
categories: ["Απομακρυσμένη Πρόσβαση", "Εργαλεία", "Δίκτυα"]
website: "https://www.chiark.greenend.org.uk/~sgtatham/putty/"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Ο κλασικός, ελαφρύς client για συνδέσεις SSH, Telnet, rlogin, και raw TCP (serial) για Windows. Διαθέτει επίσης `plink` (command-line SSH), `pscp` (SCP file transfer), `psftp` (SFTP), `pageant` (SSH agent), και `puttygen` (RSA/DSA/ECC key generation). Παρά το ότι τα σύγχρονα Windows έχουν built-in SSH (OpenSSH), το PuTTY παραμένει δημοφιλές για την απλότητα, το session management (saved sessions), και την υποστήριξη παλαιών συστημάτων."
featured: false
---

Το PuTTY (δημιουργήθηκε από τον Simon Tatham) είναι το standard SSH client για Windows εδώ και 20+ χρόνια. Δεν χρειάζεται εγκατάσταση (portable), υποστηρίζει public key authentication, SSH tunnels (port forwarding), και proxy connections.

**Βασικές Δυνατότητες:**

- **SSH (v1, v2)**, Telnet, Rlogin.
- **Session management (αποθήκευση settings):** Hostname, port, username, private key, terminal settings, colors.
- **SSH tunnels (Local, Remote, Dynamic - SOCKS proxy).**
- **Public key authentication (with Pageant - SSH agent).**
- **X11 forwarding (για γραφικά).**
- **Command-line tools:**
    - `plink` (scripting SSH).
    - `pscp` (copy files over SCP).
    - `psftp` (SFTP).
    - `puttygen` (generate RSA/ECDSA/Ed25519 keys).
    - `pageant` (SSH agent).
- **Serial port (COM) access.**

**PuTTY vs OpenSSH (Windows 10/11):**

| Χαρακτηριστικό | PuTTY | OpenSSH (Windows built-in) |
|---|---|---|
| **Γραμμή εντολών** | `plink` | `ssh.exe` (οικείο σε Linux) |
| **SSH agent** | Pageant | `ssh-agent` (Windows service) |
| **Session manager (GUI)** | ✅ | ❌ (CLI, must use config file) |
| **Font/color customization** | ✅ (εύκολο) | ⚠️ (μέσω terminal settings) |
| **Portable (no install)** | ✅ | ❌ (requires Windows Feature) |

> **Σημείωση:** Για νέους χρήστες Windows, το built-in OpenSSH (Windows 10/11) είναι αρκετό. Ωστόσο, το PuTTY παραμένει χρήσιμο για **saved sessions**, **Pageant** (αντίστοιχο ssh-agent), και **serial connections**.
