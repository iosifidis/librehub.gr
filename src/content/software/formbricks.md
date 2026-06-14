---
title: "Formbricks (In-App Surveys)"
alternative_to: ["Typeform (Enterprise)", "Qualtrics (Research)", "Google Forms (basic)", "SurveyJS"]
categories: ["Φόρμες", "Παραγωγικότητα", "Έρευνα"]
website: "https://formbricks.com/"
logo: "/images/placeholder.svg"
license: "AGPL-3.0 (community edition)"
description: "Ισχυρή open-source πλατφόρμα για τη δημιουργία ερευνών εντός της εφαρμογής και microsurveys. Υποστηρίζει targeted surveys (τμηματοποίηση χρηστών based on attributes/events), multiple question types, μορφή pop-ups/modal/embedded, integration με Next.js/React/Node, και αποτελεί εναλλακτική των Typeform & Qualtrics για product teams."
featured: false
---

Το Formbricks εστιάζει στην **έρευνα εμπειρίας χρήστη (UX research)** **εντός της εφαρμογής**. Αντί να στέλνετε εξωτερικούς συνδέσμους (π.χ. Typeform), το Formbricks εμφανίζει ένα μικρό widget (pop-up, modal, ή embedded) στην εφαρμογή web/React, τη στιγμή που ο χρήστης αλληλεπιδρά. Μπορεί να στοχεύσει ένα τμήμα χρηστών (π.χ. "όσοι ολοκλήρωσαν checkout", "όσοι επισκέφθηκαν σελίδα pricing 2 φορές") και να συλλέξει feedback (π.χ. NPS, CSAT, free text).

**Βασικές Λειτουργίες:**

- **Survey Types (Προβολές ερωτηματολογίων):**
    - **Pop-up Modal:** Κεντρικό modal (διακόπτει ροή, αλλά υψηλή απαντησιμότητα).
    - **Sidebar/Embedded:** Μικρό widget στο πλάι (λιγότερο ενοχλητικό).
    - **Full Page:** Ολόκληρη σελίδα (π.χ. για έρευνα εγκατάλειψης).
- **Question Types (11+):** Open text, multiple choice, single select, rating scale (1-5), NPS (0-10), CSAT (1-5), CES (1-7), picture selection, matrix, date/time, file upload.
- **Targeting (Segmentation):** (Προσδιορισμός κοινού) based on user attributes (π.χ. `plan: "pro"`, `country: "GR"`) ή events (`user.completedOnboarding`, `viewedPricing`). Μπορείτε να συνδέσετε τα δεδομένα χρηστών από την εφαρμογή σας.
- **Actions & Triggers:** Εμφάνιση survey μετά από συγκεκριμένο event (π.χ. after 3 seconds on page, after form submission, after 5 page views).
- **Placement (position):** Κάτω αριστερά, κάτω δεξιά, κέντρο, custom CSS.
- **Responses (Αποτελέσματα):** Dashboard με response rates, analytical filters, export to CSV/JSON, webhooks (real-time notifications).
- **Integration API (REST):** Μπορείτε να στείλετε data από την εφαρμογή σας (user attributes, events) μέσω API.
- **Self-hosted (Docker):** Η Community Edition (AGPL) μπορεί να εγκατασταθεί σε δικό σας server, δίνοντας έλεγχο δεδομένων. Cloud version (SaaS) επίσης διαθέσιμη.

**Πλαίσιο (Framework):**

- **JavaScript Library (formbricks-js):** Μπορείτε να ενσωματώσετε σε οποιαδήποτε web εφαρμογή (React, Vue, Svelte, vanilla JS) – όχι μόνο σε Next.js.
- **React Native SDK:** Για mobile apps (iOS/Android).

**Σύγκριση (Open Source In-App Surveys):**

| Χαρακτηριστικό | Formbricks | SurveyJS (Library) | Typeform (SaaS) |
|---|---|---|---|
| **Targeting (event-based)** | ✅ (πλούσιο) | ❌ (δεν υποστηρίζεται) | ❌ (βασικό) |
| **In-app widget (pop-up)** | ✅ | ❌ (μόνο form) | ❌ (embed as iframe) |
| **Self-hosted** | ✅ | ✅ (commercial license required for advanced) | ❌ |
| **Free tier (cloud)** | ✅ (2 surveys, 100 responses/μήνα) | N/A | ✅ (10 responses/μήνα) |

> **Σημείωση:** Το Formbricks είναι ιδανικό για digital product teams (SaaS, marketplaces) που χρειάζονται iterative user feedback (NPS, feature requests) με μηδενικό friction (in-app). Για σύνθετες επιστημονικές έρευνες με skip logic, validation, πολλές σελίδες, το Typeform (SaaS) είναι πιο προχωρημένο.
