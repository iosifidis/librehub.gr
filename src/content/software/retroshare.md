---
title: "Retroshare (P2P Communication & File Sharing)"
alternative_to: ["Private peer-to-peer networks", "Freenet (anonymity)", "Tox (chat)", "GNUnet (decentralized)"]
categories: ["Cloud", "Επικοινωνία", "Ιδιωτικότητα"]
website: "https://retroshare.cc/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Πλατφόρμα επικοινωνίας και διαμοιρασμού αρχείων **peer-to-peer (P2P)** που τρέχει σε Windows, macOS, Linux, Android, iOS. Δημιουργεί ένα κρυπτογραφημένο δίκτυο (TLS) μεταξύ φίλων (friends) χωρίς κεντρικούς διακομιστές. Υποστηρίζει chat (κείμενο, voice, video), forums (πίνακες συζητήσεων), channels (αποθήκευση περιεχομένου), file sharing (με αναζήτηση), και mail (ασφαλή μηνύματα). Η ταυτότητα βασίζεται σε πιστοποιητικά (certificates) που ανταλλάσσονται out-of-band (π.χ. email, USB). Ιδανικό για μικρές ομάδες (οικογένεια, φίλοι, κοινότητες) που θέλουν ασφαλή επικοινωνία χωρίς να εμπιστεύονται τρίτους."
featured: false
---

Το Retroshare (υπάρχει από το 2006) είναι ένα δίκτυο (darknet) όπου μόνο οι άμεσοι φίλοι σας (peers) μπορούν να δουν την κίνηση. Χρησιμοποιείται συχνά για εναλλακτική λύση σε Facebook Groups, αλλά με απόλυτη ιδιωτικότητα.

**Βασικές Λειτουργίες (P2P Network):**

- **Friends (Peer-to-Peer):** Προσθήκη φίλων μέσω δημόσιου κλειδιού (PGP-like) – "web of trust". Πρέπει να ανταλλάξετε certificates (out-of-band) – δεν υπάρχει κεντρική υπηρεσία εύρεσης φίλων.
- **Chat (Άμεσα μηνύματα):** Instant messaging, chat rooms (ομαδικές συζητήσεις), voice and video calls (προαιρετικά, WebRTC).
- **Forums (Πίνακες συζητήσεων):** Δημιουργία θεμάτων, απαντήσεις, ανεβάσματα αρχείων (attachments). Ορατά μόνο σε μέλη του δικτύου.
- **Channels (Διανομή περιεχομένου):** Σαν RSS feeds – μπορείτε να δημοσιεύετε αρχεία που διανέμονται αυτόματα στους συνδρομητές.
- **File Sharing (Διαμοιρασμός αρχείων):** Κοινοποίηση φακέλων (shared directories), αναζήτηση αρχείων (distributed search – GXS), λήψη (downloading), σχόλια/αξιολογήσεις.
- **Mail:** Εσωτερική αλληλογραφία (email-like), με αποθήκευση (offline).
- **Circles (Ομάδες):** Διαχείριση επαφών σε κύκλους (π.χ. "Work", "Family") με διαφορετικά δικαιώματα (ποιος βλέπει τι).
- **GPG integration (OpenPGP) για ταυτοποίηση.**
- **Πλατφόρμες:** Windows, macOS, Linux, Android (Retroshare Mobile), iOS (δεν υπάρχει ακόμα official).

**Retroshare vs Tox (P2P chat):**

| Χαρακτηριστικό | Retroshare | Tox |
|---|---|---|
| **File sharing (search)** | ✅ (GXS distributed search) | ❌ (μόνο direct transfer) |
| **Forums / Channels** | ✅ | ❌ |
| **Voice/Video calls** | ✅ (WebRTC) | ✅ (native) |
| **Mobile support** | ✅ (Android, iOS? όχι ακόμα) | ✅ (Android, iOS) |
| **Ease of use (friend discovery)** | ❌ (certificate exchange out-of-band) | ⚠️ (Tox ID, out-of-band) |

> **Σημείωση:** Το Retroshare απαιτεί ανταλλαγή πιστοποιητικών (certificates) με φίλους (out-of-band) για πρώτη επαφή (αλλιώς δεν υπάρχει δίκτυο). Δεν είναι κατάλληλο για ανώνυμη χρήση (μπορεί να συνδεθεί στο Tor, αλλά όχι default). Ιδανικό για μικρές ομάδες (π.χ. μια οικογένεια, μια ερευνητική ομάδα) που θέλουν ασφαλή ανταλλαγή αρχείων και επικοινωνία χωρίς τρίτους.
