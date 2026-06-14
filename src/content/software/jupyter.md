---
title: "Jupyter Notebook / JupyterLab"
alternative_to: ["MATLAB (commercial)", "RStudio (for R)", "Zeppelin (for big data)", "Google Colab (cloud, partially open)"]
categories: ["Ανάλυση Δεδομένων", "Εκπαίδευση", "Προγραμματισμός", "Επιστήμη Δεδομένων"]
website: "https://jupyter.org/"
logo: "/images/placeholder.svg"
license: "BSD-3-Clause"
description: "Διαδραστικό υπολογιστικό περιβάλλον ανοιχτού κώδικα, που επιτρέπει στους επιστήμονες δεδομένων να δημιουργούν **notebooks** που συνδυάζουν ζωντανό κώδικα (Python, R, Julia, 40+ γλώσσες), εξισώσεις (LaTeX), οπτικοποιήσεις (matplotlib, plotly, ggplot2), και Markdown. Ιδανικό για exploratory data analysis (EDA), machine learning prototyping, εκπαίδευση, και αναπαραγώγιμη έρευνα."
featured: true
---

Το Project Jupyter είναι το evolution του IPython (Interactive Python). Το Jupyter Notebook είναι μια web-based εφαρμογή που σας επιτρέπει να γράφετε και να εκτελείτε κώδικα σε κελιά (cells), να βλέπετε την έξοδο inline (γραφήματα, πίνακες, εικόνες), και να προσθέτετε μορφοποιημένο κείμενο. Αυτά τα notebooks (`.ipynb`) αποθηκεύονται ως JSON και μπορούν να κοινοποιηθούν, να εκδοθούν, να μετατραπούν σε HTML/PDF/LaTeX. Το νεότερο **JupyterLab** είναι η next-generation interface (IDE-like, με file browser, multiple panels, extensions).

**Βασικές Δυνατότητες (JupyterLab & Notebook):**

- **Multi-language support (Kernels):** Εκτέλεση κώδικα σε Python, R, Julia, Scala (Apache Toree), JavaScript, PHP, Go, C++, Ruby, Perl, κ.ά. (μέσω kernels).
- **Rich Output (Interactive):** Matplotlib plots, Plotly (interactive), Bokeh, Vega-Lite, Altair, Pandas DataFrames (formatted tables), images (JPEG, PNG), video, audio, HTML widgets (ipywidgets).
- **Markdown & LaTeX:** Επεξηγηματικό κείμενο (οδηγίες, μεθοδολογία), μαθηματικές εξισώσεις.
- **Extensions (JupyterLab extensions):** Από themes, git integration (jupyterlab-git), variable inspector, table of contents, code formatting (black), debugger, κ.ά.
- **Jupyter Notebook Viewer (nbviewer):** Υπηρεσία για rendering public notebooks (GitHub, Gist) ως static HTML.
- **Jupyter Book:** Δημιουργία βιβλίων (publications) από σύνολο notebooks.
- **Voilà:** Μετατροπή notebook σε standalone web application (χωρίς να φαίνονται τα cells).

**Jupyter vs Google Colab vs MATLAB:**

| Χαρακτηριστικό | Jupyter (self-hosted) | Google Colab | MATLAB |
|---|---|---|---|
| **Cloud / local** | Local (ή server) | Cloud (Google) | Local / Cloud |
| **Κόστος** | Δωρεάν | Δωρεάν (περιορισμένοι πόροι) | Εμπορικό (ακριβό) |
| **Language support** | 40+ | Python (κυρίως) | MATLAB language |
| **Collaboration (real-time)** | ❌ (JupyterHub + colaboratory tools?) | ✅ (Google Drive) | ❌ |
| **GPU acceleration** | ✅ (ρυθμίζετε locals) | ✅ (δωρεάν K80/T4 limited) | ❌ (εξωτερικά) |
| **Best for** | Data science, research, education | ML demos, education | Engineering simulations, matrices |

> **Σημείωση:** Το Jupyter (ειδικά JupyterLab) είναι το **de facto standard** για data science και επιστημονική έρευνα (Kaggle, Google Colab βασίζεται σε Jupyter). Χρησιμοποιείται επίσης για εκπαίδευση (πανεπιστήμια) και prototyping (machine learning). Για production data pipelines, τα notebooks ΔΕΝ συνιστώνται (προτιμήστε Python scripts, DVC, MLflow).
