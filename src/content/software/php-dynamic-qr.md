---
title: "PHP Dynamic QR Code"
alternative_to: ["QR Code Generator Pro (paid)", "QRazy (commercial)", "QR Server (self-hosted)"]
categories: ["Εργαλεία", "Παραγωγικότητα", "QR"]
website: "https://github.com/giandonatoinverso/PHP-Dynamic-Qr-code"
logo: "/images/placeholder.svg"
license: "MIT"
description: "#1 δυναμικός QR code generator στο GitHub. Επιτρέπει τη δημιουργία, αποθήκευση και διαχείριση στατικών και δυναμικών QR codes με βάση δεδομένων (MySQL). Περιλαμβάνει dashboard, πολλαπλούς λογαριασμούς, στατιστικά σαρώσεων (scans), URL shortener, και πλήρη παραμετροποίηση QR (χρώματα, size, error correction)."
featured: false
---

Αυτό το project είναι μια full-stack εφαρμογή (PHP + Bootstrap + jQuery) που επιτρέπει σε επιχειρήσεις να δημιουργούν και να διαχειρίζονται QR codes δυναμικά. Το σημαντικό πλεονέκτημα του **δυναμικού QR** είναι ότι μπορείτε να αλλάξετε το URL προορισμού (destination) αφού εκτυπώσετε τον QR code (π.χ. από `domain.com/offer1` σε `domain.com/offer2`), χωρίς να χρειαστεί να εκτυπώσετε ξανά (το QR παραμένει ίδιο).

**Βασικές Δυνατότητες (από GitHub README):**

- **Δυναμικά QR Codes:** Αποθηκεύει στο database ένα short ID. Όταν σαρωθεί, γίνεται redirect στο URL που έχετε ορίσει (μπορείτε να το αλλάξετε μετά).
- **Στατικά QR Codes:** Δημιουργία QR για vCard, email, WiFi, SMS, WhatsApp, Skype, location (Google Maps), event (iCal), Bitcoin (BTC address), Paypal (email/link), bookmark, κλπ.
- **Dashboard Analytics:** Για κάθε QR code: αριθμός σαρώσεων (scans), timestamp, γεωγραφία (IP tracking, αλλά χωρίς advanced GeoIP), browsers (basics).
- **Παραμετροποίηση QR:**
    - 6 μορφές εικόνας (PNG, JPG, SVG, κλπ)
    - Foreground/Background color picker
    - 4 επίπεδα error correction (L, M, Q, H)
    - 10 μεγέθη (pixels)
- **Multi-account & ACL (Access Control List):** Υποστηρίζει δύο επίπεδα χρηστών (admin, regular user). Ο admin βλέπει όλους τους QR codes.
- **Bulk download, bulk delete.**
- **Docker support:** `docker-compose.yml` included (PHP + MySQL).
- **URL Shortener:** Μπορεί να λειτουργεί και ως shortener (δημιουργεί short links μαζί με QR code).

**Περιεχόμενα (Stack):**

| Component | Technology |
|---|---|
| Backend | Core PHP (object-oriented) |
| Database | MySQL (`.sql` file with sample data) |
| Frontend | AdminLTE (Bootstrap 3 + jQuery) |
| QR Generation | Endroid QR Code (PHP library) ή API call (api.qrserver.com) |

**Πλεονεκτήματα & Περιορισμοί:**

| Πλεονέκτημα | Περιορισμός |
|---|---|
| Πλήρως self-hosted (data ownership) | UI είναι dated (AdminLTE 3, όχι responsive σε όλες τις οθόνες) |
| Δυναμικά QR codes (αλλάζεις URL without reprinting) | Απαιτεί web server (PHP 7.4+), MySQL |
| Στατιστικά scans (αριθμός, ημερομηνία) | Δεν έχει advanced analytics (π.χ. geolocation με πόλη, browsers, OS) |
| Δωρεάν (MIT license) | Η κοινότητα μικρή (381 stars, 125 forks) |

> **Σημείωση:** Ιδανικό για εστιατόρια (μενού), φυλλάδια (leaflets), business cards, real estate (προβολή ακινήτων) – όπου θέλετε να αλλάζετε το περιεχόμενο πίσω από έναν ήδη εκτυπωμένο QR code. Για προσωπική χρήση (απλή δημιουργία QR), μπορείτε να χρησιμοποιήσετε δωρεάν online generators (QR Code Monkey, QR.io). Για advanced analytics (γεωγραφία, συσκευές), εξετάστε το Shlink (URL shortener) που παράγει QR codes.
