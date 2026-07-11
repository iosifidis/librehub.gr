---
title: "cState"
alternative_to: ["Statuspage.io (commercial)"]
categories: ["Παραγωγικότητα", "Εργαλεία", "Παρακολούθηση"]
website: "https://cstate.uncascade.com/"
logo: "/images/cstate.png"
license: "MIT"
description: "Εξαιρετικά ελαφριά, στατική status page που βασίζεται στον generator ιστοσελίδων Hugo. Δεν απαιτεί database ή server-side runtime (PHP, Node.js). Τα δεδομένα (υπηρεσίες, περιστατικά) αποθηκεύονται σε αρχεία Markdown (YAML frontmatter). Είναι απλά στην εγκατάσταση (αντίγραφο repository, commit, deploy σε Netlify/GitHub Pages). Ιδανική για μικρές ομάδες που θέλουν status page χωρίς συντήρηση server."
featured: false
---

Το cState διαφέρει: είναι **static site** (στατική σελίδα), που σημαίνει ότι παράγει HTML/CSS/JS μια φορά (στο build). Για να ενημερωθεί η κατάσταση, πρέπει να τροποποιήσετε ένα YAML αρχείο (π.χ. `status: "Operational"`) και να ξανατρέξετε build (με CI όπως GitHub Actions) ή να το κάνετε manual. Δεν έχει real-time monitoring. Χρησιμοποιείται συχνά για "informational status pages" (π.χ. open source projects, small services) όπου οι ενημερώσεις γίνονται σπάνια.

**Βασικές Λειτουργίες:**

- **Static generation (Hugo).**
- **Data source (Markdown + YAML):** Υπηρεσίες (services) και incidents (αναφορές) αποθηκεύονται ως αρχεία.
- **CI/CD ready (Netlify, GitHub Pages, GitLab Pages).**
- **Customizable (CSS, themes).**
- **Multi-language (i18n) support.**
- **Built-in uptime charts (προαιρετικά, με δεδομένα από external API).**

> **Σημείωση:** Το cState είναι κατάλληλο μόνο αν χρειάζεστε "απλά μια σελίδα για ενημέρωση των πελατών" χωρίς real-time monitoring. Για status page με ειδοποιήσεις και αυτόματη ενημέρωση, χρησιμοποιήστε **Uptime Kuma** (με built-in status page) ή **Kener**.
