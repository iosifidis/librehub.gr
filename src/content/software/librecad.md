---
title: "LibreCAD (2D CAD)"
alternative_to: ["AutoCAD (2D only)", "DraftSight (free tier limited)", "QCAD (Community Edition)"]
categories: ["Γραφικά", "3D Μοντελοποίηση", "CAD"]
website: "https://librecad.org/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Εφαρμογή CAD ανοιχτού κώδικα αποκλειστικά για 2D σχεδίαση, βασισμένη στο QCAD Community Edition. Υποστηρίζει μορφή DWG (AutoCAD), DXF (Drawing Exchange Format), και προσφέρει εργαλεία σχεδίασης (γραμμές, arcs, circles, ellipses, polyline), ακρίβεια διαστάσεων (dimensions), layers, blocks, και hatch patterns. Ιδανική για floor plans, μηχανολογικά σχέδια (2D), ηλεκτρικά διαγράμματα, landscape design."
featured: false
---

Το LibreCAD είναι ένα 2D CAD λογισμικό (όχι 3D), που επικεντρώνεται στην παραγωγή τεχνικών σχεδίων (blueprints) για αρχιτεκτονική, μηχανολογία, ηλεκτρολογία, και απλή 2D σχεδίαση. Είναι fork του QCAD (Community Edition), και παρόλο που η ανάπτυξη έχει επιβραδυνθεί (τελευταία stable v2.2.0, 2022), παραμένει σταθερό και λειτουργικό.

**Βασικές Λειτουργίες (2D CAD):**

- **Drawing Primitives:** Γραμμές, polyline, arcs, circles, ellipses, splines, points, text (με support γραμματοσειρών).
- **Modify Tools:** Move, copy, rotate, scale, trim, extend, fillet, chamfer, offset, mirror, array (polar/rectangular).
- **Layers:** Οργάνωση σχεδίου σε layers (π.χ. "Walls", "Electrical", "Dimensions") με δυνατότητα lock/hide/color per layer.
- **Dimensioning (Διαστάσεις):** Linear, aligned, angular, radial, diametric dimensions (με precision).
- **Blocks (symbols):** Δημιουργία blocks (επαναχρησιμοποιούμενα σύμβολα, π.χ. θύρες, έπιπλα), library viewer.
- **Hatch patterns:** Γέμισμα περιοχών (solid, lines, bricks, concrete, earth, etc.).
- **File Formats (Native):** DXF (ASCII and binary) και DWG (read-only, μέσω εξωτερικής βιβλιοθήκης libdxfrw).
- **Snap options:** Grid snap, endpoint snap, midpoint snap, center snap, intersection, perpendicular, tangent.

**LibreCAD vs FreeCAD (2D vs 3D):**

| Χαρακτηριστικό | LibreCAD | FreeCAD (Part Design + Draft) |
|---|---|---|
| **Διάσταση** | 2D (αποκλειστικά) | 3D (με 2D capabilities) |
| **Παραμετρικότητα (parametric)** | ❌ (δεν υπάρχει) | ✅ (ιστορική, constraints) |
| **3D printing** | ❌ (δεν υπάρχει) | ✅ (export STL) |
| **Εκμάθηση** | Εύκολη (σαν απλό AutoCAD) | Απότομη (parametric modeling) |
| **Χρήση** | Floor plans, 2D schematics | 3D parts, assemblies, BIM |

> **Σημείωση:** Το LibreCAD είναι ιδανικό για μικρά 2D projects (π.χ. κάτοψη δωματίου, εντοιχισμένες ντουλάπες, ηλεκτρικό μονογραμμικό). Για 3D μοντελοποίηση (εκτύπωση 3D) χρειάζεται FreeCAD. Για πιο προχωρημένο 2D CAD (με πλήρη υποστήριξη DWG, advanced dimension styles), εξετάστε το **QCAD Professional** (επί πληρωμή) ή **DraftSight** (free tier).
