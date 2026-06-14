---
title: "FreeScout (Help Desk & Shared Inbox)"
alternative_to: ["Help Scout (commercial)", "Zendesk (heavy alternative)", "Zammad (feature-rich)"]
categories: ["Helpdesk", "Παραγωγικότητα"]
website: "https://freescout.net/"
logo: "/images/placeholder.svg"
license: "AGPL-3.0 (self-hosted)"
description: "Μια εξαιρετικά ελαφριά, ισχυρή λύση helpdesk και κοινόχρηστων εισερχομένων (shared mailbox) ανοιχτού κώδικα. Built with PHP (Laravel) and MySQL, σχεδιασμένη ως open-source εναλλακτική του Help Scout. Παρέχει όλες τις βασικές λειτουργίες: ομαδικά εισερχόμενα (mailbox), tickets (conversations), collision detection, internal notes, auto-reply, templates, push notifications, mobile-friendly interface, και API. Απεριόριστοι χρήστες, tickets, mailboxes. Μπορεί να τρέξει ακόμα και σε shared hosting ."
featured: true
---

Το FreeScout ξεκίνησε ως απάντηση στο γεγονός ότι το Help Scout (commercial) δεν είχε open-source έκδοση. Είναι χτισμένο από το μηδέν (δεν είναι fork) και εστιάζει στο να είναι **fast, lightweight, and easy to deploy** .

**Βασικές Λειτουργίες:**

- **Shared Inbox (Κοινόχρηστα Εισερχόμενα):** Διαχείριση πολλαπλών mailboxes (π.χ. support@, sales@) με ομάδες.
- **Ticket Management (Conversations):**
    - **Conversations vs Tickets:** Ονομάζει tickets ως "conversations" (πιο Help Scout-like).
    - **Collision Detection:** Ειδοποίηση όταν δύο agents απαντούν στο ίδιο ticket .
    - **Internal Notes (Σημειώσεις ομάδας), Phone conversations .**
    - **Forwarding, Merging, Moving .**
    - **Starred conversations, Following, Push Notifications.**
- **Integrations:**
    - **Web installer & updater** (very simple).
    - **Modules:** Υπάρχουν 50+ paid modules (δεν είναι δωρεάν): Slack integration, WhatsApp, Telegram, SSO, Reports, Mailchimp, etc. .
    - **API (REST).**
- **Customer Portal:** Δημόσια βάση γνώσης (Knowledge Base) και πελατοκεντρική πύλη (για να βλέπουν τα tickets τους).
- **Multi-language:** 20+ γλώσσες (περιλαμβάνει Ελληνικά?) .

**FreeScout vs Zammad vs UVDesk (Table):**

| Χαρακτηριστικό | FreeScout | Zammad | UVDesk |
|---|---|---|---|
| **Backend** | PHP (Laravel) | Ruby on Rails | PHP (Symfony) |
| **Hosting Requirements** | Shared hosting (PHP+MySQL) | VPS/Dedicated (Ruby stack) | VPS (Symfony, requires composer) |
| **Resource usage (RAM)** | < 100MB | ~400-800MB | ~200-400MB |
| **Multi-channel (Social)** | ❌ (μόνο email, others via paid modules) | ✅ (Facebook, Twitter, WhatsApp) | ✅ (via integrations) |
| **Free vs Paid modules** | Core free, advanced features paid | All core features free (AGPL) | Core free (OSL-3.0)  |
| **UI/UX** | Simple, Bootstrap-based | Modern, custom | AdminLTE-based, λειτουργικό |
| **Ideal for** | Small teams, startups, marketing | Medium-large support teams | Dev teams who want Symfony stack |

> **Σημείωση:** Το FreeScout είναι ιδανικό αν θέλετε **Zendesk/Help Scout functionality με μηδενικό κόστος** και μπορείτε να το τρέξετε ακόμα και σε shared hosting. Ωστόσο, αν χρειάζεστε social media integration (Facebook, Twitter) προς τα έξω (inbound/outbound), τότε το **Zammad** ή το **UVDesk** είναι καλύτερα, αν και απαιτούν VPS.
