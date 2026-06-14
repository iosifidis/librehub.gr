---
title: "Ghostscript (Interpreter for PostScript/PDF)"
alternative_to: ["Adobe PostScript", "Adobe Acrobat (conversion)", "MuPDF (alternative)"]
categories: ["PDF", "Επεξεργασία", "Εργαλεία Γραμμής Εντολών"]
website: "https://ghostscript.com/"
logo: "/images/placeholder.svg"
license: "AGPL-3.0"
description: "Ένα εργαλείο γραμμής εντολών (CLI) για την επεξεργασία, μετατροπή και προβολή αρχείων PostScript (PS) και PDF. Αποτελεί βασικό συστατικό (backend) για πολλά συστήματα εκτύπωσης (CUPS) και ραστεροποίησης (RIP). Μπορεί να μετατρέψει PS/PDF σε εικόνες (JPEG, PNG, TIFF), να συγχωνεύσει PDF, να εξαγάγει σελίδες, να επαναδιαστάσει (resize), να βελτιστοποιήσει (compress) PDF, και να κάνει downsampling εικόνων. Χρησιμοποιείται κυρίως από sysadmins και developers (όχι end-users)."
featured: false
---

Το Ghostscript είναι ένα από τα πιο σημαντικά εργαλεία επεξεργασίας PDF/PostScript στον κόσμο του open source, λειτουργώντας συνήθως αθόρυβα στο παρασκήνιο.

**Τυπικές Χρήσεις (Command-line):**

```bash
# Convert PDF to JPEG
gs -sDEVICE=jpeg -r150 -o output-%d.jpg input.pdf

# Merge PDFs
gs -q -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=merged.pdf a.pdf b.pdf

# Compress PDF (downsample images)
gs -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -dNOPAUSE -dBATCH -sOutputFile=compressed.pdf input.pdf

# Extract pages 1-5 from PDF
gs -sDEVICE=pdfwrite -dNOPAUSE -dBATCH -dFirstPage=1 -dLastPage=5 -sOutputFile=output.pdf input.pdf

# Convert PostScript to PDF
gs -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=output.pdf input.ps
```

**Παράμετροι (PDFSETTINGS):**

- `/screen` (low quality, 72 dpi) – small file size
- `/ebook` (medium quality, 150 dpi)
- `/printer` (high quality, 300 dpi)
- `/prepress` (highest quality, 300 dpi, preserve color)

> **Σημείωση:** Το Ghostscript δεν έχει γραφική διεπαφή (CLI only). Χρησιμοποιείται από προγραμματιστές και διαχειριστές συστημάτων για αυτοματοποίηση (scripts). Αν θέλετε GUI εργαλείο (όπως PDFsam, PDF Arranger), δείτε άλλα projects. Το Ghostscript είναι η μηχανή πίσω από την επεξεργασία PDF σε πολλές εφαρμογές (π.χ. Inkscape, GIMP).
