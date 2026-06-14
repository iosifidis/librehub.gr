---
title: "GIMP"
alternative_to: ["Adobe Photoshop", "Photoshop", "Affinity Photo (commercial)", "Pixelmator", "Corel PaintShop Pro"]
categories: ["Γραφικά", "Επεξεργασία Εικόνας", "Φωτογραφία"]
website: "https://www.gimp.org"
logo: "/images/gimp.svg"
license: "GPL-3.0"
description: "Επαγγελματική, cross-platform εφαρμογή επεξεργασίας εικόνας και γραφικών ανοιχτού κώδικα (εναλλακτική του Adobe Photoshop). Προσφέρει προηγμένα εργαλεία ρετουσάρισμα, διαχείριση χρωμάτων (color management), επίπεδα (layers), μάσκες, φίλτρα, υποστήριξη πολλών μορφών (PSD, JPEG, PNG, TIFF, WebP, κ.ά.) και επέκταση μέσω plugins/scripts (Python, Scheme, C)."
featured: true
---

Το GIMP είναι ο πιο δημοφιλής επεξεργαστής εικόνας ανοιχτού κώδικα, κατάλληλος για φωτογράφους, γραφίστες, illustrators, ακόμα και για επιστημονική απεικόνιση. Ξεκίνησε το 1996 και συνεχίζει να εξελίσσεται, με την έκδοση 3.0 να φέρνει σημαντικές βελτιώσεις (GTK3, non-destructive editing preview, better color handling).

**Βασικές Δυνατότητες:**

- **Εργαλεία επεξεργασίας:** Πινέλα (customizable brushes), κλωνοποίηση (clone/repair), healing tool, έξυπνη συμπλήρωση (content-aware fill), εργαλείο επιλογής (rectangle, ellipse, free, magic wand, foreground select, paths).
- **Layers & Blending modes:** Unlimited layers, layer groups, layer masks, alpha channel, blending modes (multiply, screen, overlay, κ.ά.).
- **Υποστήριξη χρωμάτων (Color Management):** Βασική υποστήριξη ICC profiles (για εκτύπωση και οθόνες), RGB, grayscale, indexed color.
- **Filters & Effects:** Gaussian blur, sharpen, noise, edge detection, emboss, lens distortion, artistic filters (oilify, cubism), plus GEGL (Generic Graphics Library) for high bit depth processing.
- **File Format Support:** Native XCF (με layers), import/export: JPEG, PNG, TIFF, GIF, BMP, WebP, HEIF, JPEG XL, PSD (Photoshop, με περιορισμούς), PDF (πολλαπλές σελίδες), SVG, ICO, ICNS.
- **Extensibility (Plugins & Scripts):** Γραμμένοι σε C (plugin), Python (plugin/script-fu), Scheme (Script-Fu), Perl. Υπάρχουν χιλιάδες plugins: export to DDS, batch processing (BIMP), focus stacking, HDR, κ.ά.

**GIMP vs Photoshop (Highlights):**

| Χαρακτηριστικό | GIMP | Adobe Photoshop |
|---|---|---|
| **Μη καταστροφική επεξεργασία (non-destructive)** | ⚠️ (μερική, όχι adjustment layers) | ✅ (adjustment layers, smart objects) |
| **CMYK separation (για εκτύπωση)** | ⚠️ (βασική, αλλά η ροή είναι δύσκολη) | ✅ (πλήρης) |
| **Plugins ecosystem** | ✅ (μεγάλο, αλλά όχι τόσο όσο PS) | ✅ (τεράστιο) |
| **Κόστος** | Δωρεάν | $22.99/μήνα (Photography plan) |
| **Platforms** | Windows, macOS, Linux | Windows, macOS (χωρίς Linux) |

> **Σημείωση:** Το GIMP είναι εξαιρετικό για ρετουσάρισμα φωτογραφιών, σύνθεση εικόνων, σχεδιασμό UI elements. Δεν υποστηρίζει full CMYK workflow (μειονέκτημα για επαγγελματική εκτύπωση), αλλά για 99% των χρηστών (web, digital) αρκεί. Αν χρειάζεστε Adobe Photoshop ειδικά (plugins, CMYK, advanced typography), υπάρχει επίσης Photopea (browser-based, όχι open source).
