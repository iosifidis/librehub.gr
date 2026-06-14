---
title: "Zammad (Helpdesk & Customer Support Platform)"
alternative_to: ["Zendesk (commercial)", "Salesforce Service Cloud", "Freshdesk (commercial)", "Help Scout"]
categories: ["Helpdesk", "Επικοινωνία"]
website: "https://zammad.com/"
logo: "/images/placeholder.svg"
license: "AGPL-3.0"
description: "Μια πανίσχυρη, σύγχρονη πλατφόρμα helpdesk και διαχείρισης επικοινωνίας πελατών, που συγκεντρώνει όλα τα κανάλια (email, chat, τηλέφωνο, Facebook, Twitter, Telegram, Signal, WhatsApp Business) σε ένα ενιαίο ταμπλό. Διαθέτει αυτοματισμούς (triggers, schedulers), SLA management, reporting, knowledge base, και AI-assisted replies (Zammad 7.0) . Σχεδιάστηκε για να αντικαταστήσει το Zendesk με πλήρη έλεγχο δεδομένων (self-hosted)."
featured: true
---

Το Zammad είναι μια σύγχρονη open-source λύση helpdesk που εστιάζει στην **εμπειρία χρήστη** (UI/UX) και στην **ολοκλήρωση καναλιών** . Ενώ το GLPI είναι πιο "παραδοσιακό" (ITIL-focused), το Zammad είναι πιο "ευρωπαϊκό" και φιλικό προς μη-τεχνικούς χρήστες. Ξεκίνησε το 2016, γραμμένο σε Ruby on Rails, με PostgreSQL .

**Βασικές Λειτουργίες:**

- **Κανάλια Επικοινωνίας (Channels):**
    - **Email:** Κλασικό email-to-ticket (IMAP/POP3) .
    - **Chat (Live Chat):** Ενσωματώσιμο widget στην ιστοσελίδα.
    - **Telephone (CTI integration):** Παραλαβή κλήσεων και δημιουργία tickets (μέσω Twilio, Placetel).
    - **Social Media:** Twitter, Facebook, WhatsApp Business (Zammad 6.3), Telegram, Signal .
    - **Form (Web Form):** Δημιουργία ticket μέσω HTML form.
- **Ticket Management:**
    - **Unified Inbox (Ενιαία Είσοδος):** Όλα τα tickets από όλα τα κανάλια.
    - **Templates, Tags, Custom Fields.**
    - **Automation (Triggers & Scheduler):** Αυτοματοποιημένες ενέργειες (π.χ. auto-reply, assignment, escalation).
    - **SLA (Service Level Agreements):** Παρακολούθηση χρόνων απάντησης/επίλυσης.
    - **Core Workflows (Zammad 5.0+):** Dynamic ticket states, conditional fields .
- **Collaboration & Productivity:**
    - **Group calendars, time tracking, checklists (6.4) .**
    - **Two-Factor Authentication (2FA) (6.1) .**
    - **Mobile View (fully responsive) (6.0) .**
    - **Integration (Webhooks, Slack, MS Teams (6.0), Grafana/Kibana (4.0), GitLab/GitHub (4.0)) .**
- **AI Features (Zammad 7.0):** AI-assisted replies, summarization (retaining full data control) .
- **Reporting & Analytics:** Real-time reporting, custom dashboards, custom reports.
- **Knowledge Base:** Separate from tickets, with public/private sections, SEO-friendly URLs.
- **Multi-language & GDPR ready.**

**Απαιτήσεις & Εκδόσεις:**

- **Backend:** Ruby on Rails, PostgreSQL (>=13), Redis, Elasticsearch (strongly recommended for search performance) .
- **Web server:** Nginx (recommended) ή Apache.
- **Self-hosted (Δωρεάν):** AGPLv3. Υπάρχουν official packages για Debian/Ubuntu/CentOS, Docker, Kubernetes .
- **Zammad Cloud (SaaS):** Επί πληρωμή (hosted solution).

> **Σημείωση:** Το Zammad είναι η καλύτερη open-source εναλλακτική του Zendesk (SaaS). Ανταγωνίζεται το FreeScout σε φιλικότητα UI, αλλά το Zammad είναι πιο βαρύ (περισσότερα features, channels, reporting). Για pure shared inbox (just email), το FreeScout είναι απλούστερο.
