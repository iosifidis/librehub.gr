# Μάθε για το ΕΛ/ΛΑΚ — Κατάλογος Ελεύθερου Λογισμικού

Ένας σύγχρονος, γρήγορος κατάλογος ελεύθερου και ανοιχτού κώδικα λογισμικού (ΕΛ/ΛΑΚ), φτιαγμένος με **Astro** + **Tailwind CSS**. Αντικαθιστά τον παλαιό ιστότοπο WordPress.

**Χαρακτηριστικά:**
- 🔍 Client-side αναζήτηση (κατά όνομα, εναλλακτικό, κατηγορία)
- 🌗 Light/Dark mode με toggle
- 📁 Περιεχόμενο σε Markdown (Astro Content Collections)
- ⚡ Static Site Generation με Astro
- 📋 Φόρμα πρότασης μέσω Netlify Forms
- 🐳 Docker-ready για self-hosting

---

## 🚀 Τοπική Εκτέλεση

### Προαπαιτούμενα
- Node.js >= 20
- npm >= 10

### Βήματα

```bash
# 1. Κλωνοποίηση / μετάβαση στον κατάλογο
cd /home/iosifidis/Development/mathe.ellak.gr

# 2. Εγκατάσταση dependencies
npm install

# 3. Εκκίνηση development server
npm run dev
```

Ο server θα εκκινήσει στη διεύθυνση `http://localhost:4321`.

### Build για παραγωγή

```bash
npm run build
# Το αποτέλεσμα βρίσκεται στον φάκελο dist/

npm run preview  # Προεπισκόπηση του build τοπικά
```

---

## ➕ Πώς να Προσθέσετε Νέο Λογισμικό

### Βήμα 1: Δημιουργήστε το αρχείο Markdown

Δημιουργήστε ένα νέο αρχείο στον φάκελο `src/content/software/`:

```
src/content/software/onoma-logismikou.md
```

> **Σύμβαση ονοματολογίας:** Χρησιμοποιήστε πεζά γράμματα και παύλες (π.χ. `libre-office.md`, `gimp.md`).

### Βήμα 2: Συμπληρώστε το frontmatter

```yaml
---
title: "Όνομα Λογισμικού"
alternative_to: ["Ιδιόκτητο Λογισμικό 1", "Ιδιόκτητο Λογισμικό 2"]
categories: ["Κατηγορία1", "Κατηγορία2"]
website: "https://website-logismikou.org"
logo: "/images/onoma-logismikou.svg"
license: "GPL-3.0"
description: "Μια σύντομη περιγραφή (1-2 προτάσεις) του λογισμικού."
featured: false
---

Εδώ μπορείτε να γράψετε πιο αναλυτικό Markdown περιεχόμενο για τη σελίδα λεπτομερειών.
```

#### Περιγραφή πεδίων

| Πεδίο | Τύπος | Απαιτείται | Περιγραφή |
|-------|-------|-----------|-----------|
| `title` | string | ✅ | Το όνομα του ΕΛ/ΛΑΚ λογισμικού |
| `alternative_to` | string[] | ✅ | Λίστα ονομάτων ιδιόκτητων λογισμικών |
| `categories` | string[] | ✅ | Κατηγορίες (βλ. λίστα παρακάτω) |
| `website` | string (url) | ✅ | Επίσημη ιστοσελίδα |
| `logo` | string | ✅ | Path στο `/images/` |
| `license` | string | ✅ | Άδεια (π.χ. `GPL-3.0`, `MIT`, `Apache-2.0`) |
| `description` | string | ✅ | Σύντομη περιγραφή (1-2 προτάσεις) |
| `featured` | boolean | ❌ | `true` = εμφανίζεται πρώτο & με badge |

#### Διαθέσιμες κατηγορίες
```
Γραφείο, Παραγωγικότητα, Γραφικά, Επεξεργασία Εικόνας, Διανυσματικά,
Ψηφιακή Ζωγραφική, Πολυμέσα, Βίντεο, Επεξεργασία Βίντεο, Streaming,
Επεξεργασία Ήχου, 3D Μοντελοποίηση, Ανάπτυξη Λογισμικού, Εργαλεία,
Εκπαίδευση, Μαθηματικά, Πλατφόρμες Μάθησης, Προγραμματισμός, Cloud,
Email, Επικοινωνία, Ιδιωτικότητα, Πλοήγηση, Λειτουργικά Συστήματα
```

Για νέα κατηγορία: απλώς προσθέστε το string στο frontmatter — θα εμφανιστεί αυτόματα στα φίλτρα.

### Βήμα 3: Προσθέστε το λογότυπο

Τοποθετήστε το αρχείο εικόνας στον φάκελο `public/images/`:

```
public/images/onoma-logismikou.svg   ← (SVG προτιμάται)
public/images/onoma-logismikou.png   ← (PNG γίνεται επίσης δεκτό)
```

**Συστάσεις:**
- Χρησιμοποιήστε **SVG** για διανυσματικά λογότυπα (καλύτερη ανάλυση)
- Αν χρησιμοποιείτε PNG/JPEG: ιδανικό μέγεθος **256×256px** ή **512×512px**
- Βεβαιωθείτε ότι το path στο frontmatter (`logo`) αντιστοιχεί ακριβώς στο αρχείο

---

## 🐳 Deploy με Docker

### Build & Run

```bash
# 1. Κατασκευή image
docker build -t mathe-ellak .

# 2. Εκτέλεση container (port 8080 → 80)
docker run -d -p 8080:80 --name mathe-ellak mathe-ellak

# 3. Επίσκεψη στο http://localhost:8080
```

### Με Docker Compose

Δημιουργήστε ένα `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

```bash
docker compose up -d
```

### Multi-stage build λεπτομέρειες

- **Stage 1** (`node:20-alpine`): Εγκαθιστά dependencies και κάνει `npm run build`
- **Stage 2** (`nginx:alpine`): Αντιγράφει μόνο τα built static files → ελάχιστο μέγεθος image (~25MB)

---

## ☁️ Deploy στο Netlify

### Αυτόματα μέσω Git

1. Κάντε push τον κώδικα σε GitHub/GitLab
2. Στο Netlify dashboard: **Add new site → Import an existing project**
3. Επιλέξτε το repository
4. Ρυθμίσεις build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `20`

Το `netlify.toml` στη ρίζα του project θα ρυθμίσει αυτόματα τα παραπάνω.

### Ρύθμιση Netlify Forms

Η φόρμα στη σελίδα `/suggest` χρησιμοποιεί `data-netlify="true"` και λειτουργεί αυτόματα.

**Για να λαμβάνετε email στο `info@eellak.gr`:**

1. Netlify Dashboard → **Site → Forms**
2. Κάντε κλικ στη φόρμα `suggest-software`
3. Πηγαίνετε στην καρτέλα **Form notifications**
4. Κάντε κλικ **Add notification → Email notification**
5. Συμπληρώστε:
   - **Email to notify:** `info@eellak.gr`
   - **Custom subject:** `[ΕΛ/ΛΑΚ] Νέα Πρόταση Λογισμικού: {{oss_name}}`
6. Αποθηκεύστε

---

## 📁 Δομή Project

```
.
├── src/
│   ├── content/
│   │   ├── config.ts              # Zod schema για Content Collections
│   │   └── software/              # Ένα .md αρχείο ανά λογισμικό
│   │       ├── libreoffice.md
│   │       ├── gimp.md
│   │       └── ...
│   ├── components/
│   │   ├── Header.astro           # Sticky header + dark mode toggle
│   │   ├── Hero.astro             # Hero section με search bar
│   │   ├── CategoryFilter.astro   # Pill buttons φιλτραρίσματος
│   │   ├── SoftwareCard.astro     # Κάρτα λογισμικού
│   │   ├── SoftwareGrid.astro     # Grid + client-side search
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro       # HTML shell + SEO + dark mode init
│   ├── pages/
│   │   ├── index.astro            # Αρχική σελίδα
│   │   ├── suggest.astro          # Φόρμα πρότασης
│   │   ├── success.astro          # Σελίδα επιτυχίας μετά υποβολή
│   │   ├── category/[slug].astro  # Δυναμική σελίδα κατηγορίας
│   │   └── software/[slug].astro  # Δυναμική σελίδα λεπτομερειών
│   └── styles/
│       └── global.css             # Tailwind imports + base styles
├── public/
│   ├── favicon.svg
│   └── images/                    # Λογότυπα λογισμικού
├── Dockerfile                     # Multi-stage: node + nginx
├── nginx.conf                     # Nginx config για Docker
├── netlify.toml                   # Netlify build + redirects + headers
├── .dockerignore
└── astro.config.mjs
```

---

## 🛠️ Scripts

```bash
npm run dev      # Development server (http://localhost:4321)
npm run build    # Production build → dist/
npm run preview  # Preview build locally
npm run astro    # Astro CLI
```

---

## 📄 Άδεια

Το περιεχόμενο διατίθεται υπό [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/).
Ο κώδικας διατίθεται υπό [MIT License](LICENSE).
