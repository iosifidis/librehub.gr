---
title: "Dia (Diagram Editor)"
alternative_to: ["Microsoft Visio (Pro)", "Draw.io (diagrams.net)", "yEd Graph Editor (commercial)"]
categories: ["Γραφικά", "Διανυσματικά", "Διαγράμματα", "Παραγωγικότητα"]
website: "https://gitlab.gnome.org/GNOME/dia"
logo: "/images/placeholder.svg"
license: "GPL-2.0"
description: "Ελαφρύ εργαλείο για τη σχεδίαση διαγραμμάτων και ροών εργασίας (flowcharts). Υποστηρίζει πολλές γλώσσες διαγραμμάτων: UML (class, sequence, use case), network diagrams (Cisco, computer), ER diagrams (entity-relationship), flowcharts, organizational charts, electrical circuits, and more. Εξάγει σε PNG, SVG, EPS, PDF, και C++/Java code skeletons (για UML)."
featured: false
---

Το Dia είναι ένα GTK-based διάγραμμα-επεξεργαστής (diagram editor), με έμφαση στην απλότητα και την υποστήριξη πολλαπλών διαγραμματικών γλωσσών (UML, flowchart, network, κ.ά.). Ενώ το UI του είναι "παλιομοδίτικο" (δεν έχει διαρκώς ενημερωθεί από το 2011 περίπου), παραμένει λειτουργικό και εξαιρετικά ελαφρύ. Ιδανικό για μικρά projects (σχεδίαση database schemas, δομή λογισμικού) χωρίς να χρειάζεται να εγκαταστήσετε βαρύ Visio.

**Υποστηριζόμενοι Τύποι Διαγραμμάτων (Shapes):**

| Κατηγορία | Διαγράμματα |
|---|---|
| **Flowchart** | Process, decision, terminator, data, document, predefined process, etc. |
| **UML** | Class diagrams, sequence diagrams, use case diagrams, activity, state, component, deployment. |
| **Network (Cisco, computers)** | Router, switch, firewall, cloud, server, PC, laptop, printer. |
| **Entity-Relationship (ER)** | Entity, relationship, attribute, weak entity, identifying relationship. |
| **Organizational chart** | Manager, employee, department, box styles. |
| **Electrical (Circuit)** | Resistors, capacitors, inductors, transistors, logic gates (AND, OR, NOT). |
| **Software engineering (other)** | Gane-Sarson (data flow), Jackson, flowchart, SDL, etc. |

**Βασικές Λειτουργίες:**

- **Layers (επίπεδα):** Μπορείτε να οργανώσετε πολύπλοκα διαγράμματα.
- **Grid & Snap:** Βοηθά στην ευθυγράμμιση.
- **Export (PNG, SVG, EPS, PDF, DXF, TeX, C++/Java code):** Για UML class diagrams, μπορείτε να παράγετε κώδικα skeleton.
- **Scripting (Python):** Μπορείτε να αυτοματοποιήσετε τη δημιουργία διαγραμμάτων.
- **Custom shapes (XML):** Μπορείτε να ορίσετε δικά σας stencils.

**Σύγκριση με σύγχρονα εργαλεία:**

| Χαρακτηριστικό | Dia | Draw.io (diagrams.net) | Microsoft Visio |
|---|---|---|---|
| **Διαθέσιμο** | Desktop (GTK) | Web (Electron desktop app optional) | Windows (desktop) + Web |
| **Real-time collaboration** | ❌ | ✅ (Google Drive, OneDrive) | ✅ (SharePoint) |
| **Ενημερώσεις (active development)** | ❌ (παγωμένο) | ✅ (ενεργό) | ✅ |
| **Database reverse engineering** | ❌ | ⚠️ (basic) | ✅ (professional) |
| **Cloud storage integration** | ❌ | ✅ (Google, Dropbox, OneDrive) | ✅ (OneDrive) |

> **Σημείωση:** Το Dia **δεν συνιστάται για νέα projects**. Προτιμήστε **diagrams.net (draw.io)** (δωρεάν, open source, web-based, με desktop app) το οποίο είναι πιο σύγχρονο, ενεργό, και υποστηρίζει real-time collaboration. Ωστόσο, το Dia μπορεί να χρησιμοποιηθεί σε πολύ παλιά συστήματα ή όταν θέλετε ένα 100% offline, minimal editor χωρίς browser.
