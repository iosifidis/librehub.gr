---
title: "phpList"
alternative_to: ["Mailchimp (SaaS)", "Sendinblue (Brevo)", "MailerLite"]
categories: ["Παραγωγικότητα", "Email Marketing"]
website: "https://www.phplist.com/"
logo: "/images/placeholder.svg"
license: "AGPL-3.0"
description: "Ισχυρή, self-hosted πλατφόρμα για email marketing και διαχείριση ενημερωτικών δελτίων (newsletters). Υποστηρίζει αποστολή εκατομμυρίων emails, διαχείριση λιστών, bounce processing, A/B testing, analytics (open/click rates), και plugin system."
featured: false
---

Το phpList είναι ένα από τα παλαιότερα (2004) και πιο σταθερά open-source εργαλεία email marketing. Σε αντίθεση με SaaS υπηρεσίες (Mailchimp, Sendinblue), το phpList εγκαθίσταται στον δικό σας server, δίνοντάς σας πλήρη έλεγχο δεδομένων (συνδρομητές, campaigns, reports) και αποφεύγοντας τις υψηλές χρεώσεις όταν οι λίστες μεγαλώνουν.

**Βασικές Λειτουργίες:**

- **Διαχείριση Λιστών (Lists):** Πολλαπλές λίστες (π.χ. Newsletter, Προωθητικές ενέργειες, VIP), δυνατότητα subscribers να ανήκουν σε πολλές λίστες.
- **Subscriber Management:** Εισαγωγή/εξαγωγή CSV, custom attributes (π.χ. city, product interest), double opt-in (επιβεβαίωση), unsubscribe management (one-click), bounce handling (hard/soft bounces).
- **Campaign Creation (Drag-and-Drop Editor):** HTML editor (CKEditor), βασικό email editor (ή σύνδεση με εξωτερικό template), προσωποποίηση (π.χ. `[Givenname]`).
- **Send Engine (PhpList Core):** Αποστολή μέσω SMTP (δικός σας server) ή 3rd party (Sendgrid, AWS SES, Mailgun, SparkPost). Υποστηρίζει throttling (περιορισμό ρυθμού), batches, queue management.
- **Reporting:** Open tracking (1x1 pixel), click tracking, bounce reports, unsubscribes by campaign, detailed statistics per subscriber.
- **A/B Testing (split testing):** Δοκιμή γραμμής θέματος (subject line) ή περιεχομένου, αυτόματη επιλογή νικητή.
- **Plugins (Marketplace):** 200+ plugins: SMTP providers integration, Google Analytics, RSS to email, CAPTCHA (reCAPTCHA), GDPR tools.
- **REST API (v3):** Δημιουργία subscribers, λήψη στατιστικών, δημιουργία campaigns.

**Self-Hosting vs SaaS:**

| Χαρακτηριστικό | phpList (Self-hosted) | Mailchimp (Free tier) |
|---|---|---|
| **Κόστος (λίστα 10.000 subscribers)** | Δωρεάν (μόνο hosting ~$10/μήνα + SMTP cost) | ~$80-150/μήνα (ανάλογα sends) |
| **Απεριόριστες αποστολές** | ✅ (ανάλογα SMTP) | ❌ (όριο sends) |
| **Έλεγχος δεδομένων** | ✅ (πλήρης) | ❌ |
| **Support για deliverability** | ❌ (εξαρτάται από SMTP σας) | ✅ (θερμοί IPs) |

> **Σημείωση:** Το phpList είναι ισχυρό αλλά έχει **πιο παλιό UI** (dated) και απαιτεί τεχνικές γνώσεις (SMTP setup, PHP, MySQL). Για μικρές λίστες (<5.000) που θέλουν απλότητα, προτιμήστε SaaS. Για μεγάλες λίστες (πάνω από 50.000) ή GDPR-sensitive, το phpList αξίζει.
