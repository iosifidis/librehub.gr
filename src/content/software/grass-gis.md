---
title: "GRASS GIS (Geospatial Analysis)"
alternative_to: ["ArcInfo", "Whitebox Geospatial (open source)", "SAGA GIS (open source)"]
categories: ["Εκπαίδευση", "GIS", "Χαρτογραφία"]
website: "https://grass.osgeo.org/"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Ένα από τα παλαιότερα και πιο ισχυρά λογισμικά για διαχείριση και ανάλυση γεωχωρικών δεδομένων, ειδικά σε ακαδημαϊκό και ερευνητικό περιβάλλον (γεωμορφολογία, υδρολογία, απομακρυσμένη ανίχνευση). Υποστηρίζει raster (τρισδιάστατα δεδομένα), vector (τοπολογία), υψομετρικά μοντέλα (DEM), χωρική μοντελοποίηση, γεωστατιστική, και ανάλυση λεκανών απορροής."
featured: false
---

Το GRASS GIS είναι πιο προχωρημένο από το QGIS σε ειδικές αναλύσεις, αλλά λιγότερο φιλικό. Χρησιμοποιείται κυρίως από ερευνητές.

**Βασικές Λειτουργίες (modules):**

- **Raster Analysis:** Map algebra (r.mapcalc), slope/aspect (r.slope.aspect), viewshed (r.viewshed), hydrology (r.watershed), cost surface (r.cost), interpolation (r.surf.idw, r.spline).
- **Vector Analysis (Topological):** Buffer (v.buffer), overlay (v.overlay), network analysis (v.net), geometry (v.clean).
- **Image Processing:** Unsupervised classification (i.cluster), supervised (i.maxlik), PCA (i.pca), kernel filtering.
- **Temporal Framework:** Διαχείριση χρονοσειρών (t.* modules).
- **3D data (Voxel):** Στρώματα εδάφους, 3D interpolation (r3.*).
- **Scripting (Python, Bash).**
- **Integration:** Μπορεί να καλείται από QGIS (Processing Toolbox).
- **Πλατφόρμες:** Linux (primary), macOS, Windows (μέσω WSL ή native).

> **Σημείωση:** Χρησιμοποιείται από ερευνητές και επαγγελματίες γεωεπιστημόνων (υδρολογία, μοντελοποίηση εδαφών). Οι περισσότεροι χρήστες προτιμούν **QGIS** (για οπτικοποίηση) + **GRASS** (για ανάλυση μέσω plugin). Δεν συνιστάται για αρχάριους.
