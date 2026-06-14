---
title: "GNU Crypto (Java Cryptographic Library)"
alternative_to: ["Bouncy Castle (commercial support available)", "Java Cryptography Extension (JCE) built-in"]
categories: ["Ασφάλεια", "Ανάπτυξη Λογισμικού", "Κρυπτογραφία"]
website: "https://www.gnu.org/software/gnu-crypto/"
logo: "/images/placeholder.svg"
license: "GPL-3.0 (with classpath exception?)"
description: "Μια συλλογή από κρυπτογραφικούς αλγόριθμους, συναρτήσεις κατακερματισμού, ψηφιακές υπογραφές, και πρωτόκολλα (κρυπτογραφικά primitives) υλοποιημένα σε Java. Παρέχει υλοποιήσεις για AES, Blowfish, DES, TripleDES, RSA, DSA, SHA-1, SHA-256, MD5, HMAC, ASN.1, και άλλα. Είναι λιγότερο δημοφιλές από το Bouncy Castle, το οποίο έχει περισσότερους αλγόριθμους (ECC, PGP, PKIX)."
featured: false
---

Το GNU Crypto (γνωστό και ως `gnu-crypto`) είναι μια βιβλιοθήκη Java για κρυπτογραφικές πράξεις, σχεδιασμένη να λειτουργεί είτε ως provider για το Java Cryptography Extension (JCE) είτε ως αυτόνομη. Αν και ιστορικά σημαντικό, η ανάπτυξη έχει επιβραδυνθεί (τελευταία έκδοση 2.0.0, 2005). Σήμερα, το **Bouncy Castle** (επίσης open source) είναι το de facto standard.

**Περιεχόμενα (Algorithms & Protocols):**

- **Symmetric ciphers:** AES, Blowfish, DES, TripleDES, RC2, RC4, ARCFOUR.
- **Asymmetric ciphers:** RSA (για κρυπτογράφηση/αποκρυπτογράφηση).
- **Hash functions:** MD5, SHA-1, SHA-256, SHA-384, SHA-512, RIPEMD-128, RIPEMD-160, Tiger, Whirlpool.
- **MACs (Message Authentication Codes):** HMAC (για τα παραπάνω hash), T-TMAC.
- **Signatures:** RSA (PKCS#1), DSA.
- **Key agreement:** Diffie-Hellman (DH), SRP-6 (Secure Remote Password).
- **Random number generators (PRNG).**
- **ASN.1 encoding/decoding.**
- **S/MIME (SignedData, EnvelopedData).**

**GNU Crypto vs Bouncy Castle:**

| Χαρακτηριστικό | GNU Crypto | Bouncy Castle |
|---|---|---|
| **Current status** | Inactive (2005) | Active (συχνές ενημερώσεις) |
| **Algorithm support** | Βασικά (AES, RSA, DSA, SHA) | Εκτεταμένο (ECC, PGP, CMS, TSP, PKCS, κλπ) |
| **FIPS compliance** | ❌ | ⚠️ (Bouncy Castle FIPS variant exists) |
| **Java version support** | Java 1.2+ | Java 8+ |
| **Popularity** | Χαμηλή | Πολύ υψηλή |

> **Σημείωση:** **Μην χρησιμοποιήσετε το GNU Crypto** για νέα projects. Είναι εγκαταλελειμμένο. Για Java, προτιμήστε **Bouncy Castle** (καλύτερη υποστήριξη αλγορίθμων, ενεργό) ή **Google Tink**.
