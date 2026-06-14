---
title: "Sphinx (Documentation Generator)"
alternative_to: ["Jekyll", "MkDocs", "Docusaurus", "Read the Docs"]
categories: ["Εκπαίδευση", "Τεκμηρίωση"]
website: "https://www.sphinx-doc.org/"
logo: "/images/placeholder.svg"
license: "BSD-2-Clause"
description: "Εργαλείο (static site generator) για τη δόμηση και πλοήγηση σε σύνθετες δομές περιεχομένων και τεκμηρίωσης. Χρησιμοποιεί reStructuredText (ή Markdown με MyST) ως source, παράγει HTML, PDF (LaTeX), ePub, και άλλα. Διαθέτει extension system για code highlighting, autodoc (πρόσβαση σε docstrings), API documentation (από Python, C, C++), και διαχείριση cross-references. Είναι το standard εργαλείο τεκμηρίωσης για Python projects."
featured: false
---

Το Sphinx (δημιουργήθηκε για την τεκμηρίωση της Python) είναι ισχυρό για documentation που απαιτεί αυτόματη API εξαγωγή και διασταυρούμενες αναφορές.

**Βασικές Λειτουργίες:**

- **Source format (reStructuredText):** Πιο ισχυρό από Markdown (directives, roles, footnotes). Υποστήριξη MyST (Markdown) με plugin.
- **Autodoc (Python API):** Εξαγωγή τεκμηρίωσης απευθείας από docstrings (Google, NumPy, Sphinx style). `.. automodule::`, `.. autoclass::`, `.. autofunction::`.
- **Cross-referencing (Σύνδεσμοι):** `<ref>` και `:doc:` ή `:mod:` σύνδεσμοι που ενημερώνονται αυτόματα.
- **Extensions (Πολλές):**
    - **sphinx.ext.graphviz** (ενσωμάτωση γραφημάτων), **sphinx.ext.mathjax** (μαθηματικά), **sphinx.ext.viewcode** (σύνδεσμοι προς πηγαίο κώδικα).
    - **breathe** (για C++ projects, εξαγωγή από doxygen).
    - **sphinxcontrib.spelling** (ορθογραφικός έλεγχος).
- **Themes:** Default theme (alabaster), read-the-docs theme, και πολλά custom.
- **Output (HTML, PDF, ePub):** HTML είναι default. PDF μέσω LaTeX (απαιτεί εγκατάσταση LaTeX).
- **Απαιτήσεις:** Python 3.7+.
- **Ενσωμάτωση με Read the Docs (RTD):** Αυτόματη δημιουργία documentation στο readthedocs.org.

> **Σημείωση:** Ιδανικό για Python projects (αλλά χρησιμοποιείται και σε C++ projects μέσω Breathe). Για πιο σύγχρονο frontend (React), προτιμήστε **Docusaurus**. Για μικρά projects (λιγότερο από 10 σελίδες), το MkDocs (Python) μπορεί να είναι απλούστερο.
