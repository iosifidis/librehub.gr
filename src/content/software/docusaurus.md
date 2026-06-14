---
title: "Docusaurus (Documentation Generator)"
alternative_to: ["GitBook", "Read the Docs", "VuePress"]
categories: ["Εκπαίδευση", "Τεκμηρίωση"]
website: "https://docusaurus.io/"
logo: "/images/placeholder.svg"
license: "MIT"
description: "Ένα εργαλείο για τη δημιουργία, δόμηση και πλοήγηση σε σύνθετες δομές περιεχομένων και τεκμηρίωση λογισμικού. Βασίζεται σε Markdown/React, παράγει στατικές ιστοσελίδες (εξαιρετικά γρήγορες), υποστηρίζει versioning (πολλαπλές εκδόσεις), αναζήτηση, i18n (50+ γλώσσες), και dark mode. Αναπτύχθηκε από το Meta (Facebook) και χρησιμοποιείται από πολλά open source projects (React Native, Redux, Jest)."
featured: false
---

Το Docusaurus είναι η μοντέρνα επιλογή για documentation as code (docs-as-code), ειδικά για λογισμικό και API.

**Βασικές Λειτουργίες:**

- **Content Source (Markdown + MDX):** Γράφετε τεκμηρίωση σε Markdown (με υποστήριξη JSX για React components). Μπορείτε να ενσωματώσετε πίνακες, διαγράμματα (Mermaid), κώδικα (syntax highlighting).
- **Sidebars (Πλοήγηση):** Ορίζετε τη δομή της τεκμηρίωσης (categories, docs, links) σε YAML ή JSON. Αυτόματη παραγωγή sidebars.
- **Versioning (Εκδόσεις):** Διατήρηση τεκμηρίωσης για πολλαπλές εκδόσεις της βιβλιοθήκης (versioned_docs). Εμφάνιση dropdown έκδοσης.
- **i18n (Internationalization):** Μετάφραση σε 50+ γλώσσες, με ξεχωριστό directory ανά γλώσσα.
- **Search:** Ενσωμάτωση με Algolia (δωρεάν για open source) ή άλλες μηχανές αναζήτησης.
- **Themes:** Default theme (classic) με dark mode, navbar, footer, blog. Υποστήριξη custom CSS και React components.
- **Plugins (Docusaurus plugins):** Google Analytics, Google Tag Manager, client-side search, sitemap, robots.txt, και δημιουργία blog.
- **Build & Deploy:** Παραγωγή static HTML/CSS/JS (με Webpack). Μπορεί να ανέβει σε Netlify, Vercel, GitHub Pages, ή οποιονδήποτε static hosting.
- **Απαιτήσεις:** Node.js (18+), npm/yarn.

> **Σημείωση:** Ιδανικό για open source projects (API docs, user guides), προϊόντα λογισμικού, και developer portals. Απαιτεί npm/build step. Για απλή τεκμηρίωση (χωρίς React), το **Sphinx** (Python) είναι πιο παραδοσιακό. Για πλήρης τεκμηρίωση με πολλές γλώσσες, το Docusaurus υπερέχει.
