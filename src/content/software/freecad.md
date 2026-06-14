---
title: "FreeCAD (Parametric 3D CAD)"
alternative_to: ["AutoCAD (2D/3D)", "SolidWorks (3D parametric)", "Fusion 360 (commercial, limited free tier)", "CATIA (enterprise)"]
categories: ["Γραφικά", "3D Μοντελοποίηση", "CAD"]
website: "https://www.freecad.org/"
logo: "/images/placeholder.svg"
license: "LGPL-2.1"
description: "Πολυπαραμετρικός (parametric) 3D μοντελοποιητής CAD ανοιχτού κώδικα, σχεδιασμένος για μηχανολογική σχεδίαση (mechanical engineering), αρχιτεκτονική (Arch/BIM), 3D εκτύπωση, και γενική προϊοντική σχεδίαση. Βασίζεται στην ιστορική (history-based) παραμετρική μοντελοποίηση, επιτρέποντας επεξεργασία 2D sketches που μετατρέπονται σε 3D solids (extrude, revolve, loft, sweep)."
featured: true
---

Το FreeCAD είναι το κορυφαίο λογισμικό 3D CAD ανοιχτού κώδικα, που στοχεύει να προσφέρει λειτουργίες αντίστοιχες με SolidWorks, Fusion 360, και AutoCAD (3D). Είναι παραμετρικό, που σημαίνει ότι μπορείτε να επιστρέψετε στο ιστορικό (history tree) και να αλλάξετε διαστάσεις/χαρακτηριστικά (π.χ. αλλάζετε ένα sketch και το 3D μοντέλο ενημερώνεται αυτόματα). Χρησιμοποιείται από hobbyists (3D printing), engineers, architects, και μικρές βιομηχανίες.

**Βασικά Workbenches (Modules):**

| Workbench | Περιγραφή |
|---|---|
| **Part Design** | Παραμετρική μοντελοποίηση solids (pads, pockets, revolution, grooves, fillets, chamfers, patterns). |
| **Part** | Basic CSG (Constructive Solid Geometry) operations (union, subtract, intersect). |
| **Sketcher** | 2D sketches με constraints (dimensional, geometric: parallel, perpendicular, tangent, coincident). |
| **Draft** | 2D drafting (γραμμές, arcs, dimensions, hatching). |
| **Arch (Architecture)** | BIM tools (walls, windows, doors, roofs, structural elements, IFC import/export). |
| **TechDraw** | Δημιουργία 2D τεχνικών σχεδίων (views, sections, dimensions, annotations) από 3D μοντέλο. |
| **Mesh** | Import/export σε μορφές STL, OBJ, 3MF (για 3D printing), mesh repair. |
| **Path (CAM)** | Δημιουργία G-code για CNC milling, 3D printing slicing (basic). |
| **FEM (Finite Element Method)** | Ανάλυση τάσεων (structural analysis), μηχανικών ιδιοτήτων. |
| **Spreadsheet** | Πίνακες παραμέτρων (controlled design). |
| **Robot** | Προσομοίωση ρομποτικών βραχιόνων. |

**Υποστηριζόμενες Μορφές Αρχείων:**

- **Import:** STEP, IGES, STL, OBJ, 3MF, DXF, DWG (via ODA converter), SVG, IFC, BREP, OFF, PLY.
- **Export:** STEP, IGES, STL, OBJ, 3MF, DXF, SVG, IFC, PDF, TechDraw (SVG/PDF).

**FreeCAD vs Fusion 360 (AutoDesk, commercial):**

| Χαρακτηριστικό | FreeCAD | Fusion 360 |
|---|---|---|
| **Άδεια** | LGPL (open source) | Freemium (commercial for businesses >$100k revenue) |
| **Cloud storage** | ❌ (local files) | ✅ (cloud-based, file management) |
| **Assembly (συναρμολόγηση)** | ⚠️ (Assembly 4 workbench, αλλά ασταθές) | ✅ (πλήρες) |
| **CAM (G-code για CNC)** | ✅ (Path workbench, βασικό) | ✅ (προηγμένο) |
| **Rendering & Simulation** | ✅ (Raytracing, FEM) | ✅ (cloud rendering) |

> **Σημείωση:** Το FreeCAD είναι ισχυρό αλλά η καμπύλη εκμάθησης είναι απότομη (όπως όλα τα parametric CAD). Ιδανικό για 3D printing (STL export), mechanical parts, αρχιτεκτονική (BIM). Δεν έχει τόσο smooth UI/UX όσο το Fusion 360, αλλά είναι πραγματικά free (χωρίς περιορισμούς) και ανοικτό.
