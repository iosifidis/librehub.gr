---
title: "Mono Project"
alternative_to: [".NET Framework (proprietary, Windows-only)", "Modern .NET (cross-platform, open-source)"]
categories: ["Ανάπτυξη Λογισμικού", "Εργαλεία", "Προγραμματισμός"]
website: "https://www.mono-project.com/"
logo: "/images/placeholder.svg"
license: "MIT (runtime), GPL-2.0 (tools)"
description: "Open-source υλοποίηση του .NET Framework (ECMA standards), που επιτρέπει σε εφαρμογές C# και .NET να τρέχουν σε Linux, macOS, Windows, and embedded devices. Ιστορικά σημαντική για την ανάπτυξη Xamarin (iOS/Android) και Unity. Σήμερα, η Microsoft έχει μεταφέρει το μεγαλύτερο μέρος της τεχνολογίας στο .NET 6/8 (cross-platform)."
featured: false
---

**Σημαντική ενημέρωση (2024):** Το Mono Project **δεν αναπτύσσεται πλέον ενεργά**. Η τελευταία major έκδοση ήταν τον Ιούλιο 2019, με minor patches έως τον Φεβρουάριο 2024. Τον Σεπτέμβριο 2024, η Microsoft παρέδωσε τη διακυβέρνηση του upstream Mono στο **WineHQ** (για το wine-mono, που χρειάζεται για εφαρμογές .NET στα Windows). Η Microsoft συνεχίζει να συντηρεί ένα fork του Mono runtime στο `dotnet/runtime` (για .NET 6+), αλλά η αυτόνομη πλατφόρμα Mono θεωρείται **end-of-life** (EOL).

**Ιστορικά Σημαντικές Δυνατότητες:**

- **Cross-platform .NET:** Πρώτη υλοποίηση που έτρεξε C# code σε Linux, macOS, iOS, Android (μέσω Xamarin).
- **Mono Runtime:** JIT (Just-in-Time) compiler, AOT (Ahead-of-Time, για iOS), GC (Generational).
- **Class Libraries:** Υλοποίηση των namespaces `System.*` (IO, Collections, Net, Reflection, XML, etc.).
- **C# Compiler (`mcs`/`csc`):** Υποστήριξη C# 1.0 έως 7.0 (περίπου).
- **Tools:** `mono` (runtime), `mcs` (compiler), `mdb` (debugger), `xbuild` (παλιό MSBuild), `monodoc`.
- **Embedded / Game dev:** Unity (παλαιότερα χρησιμοποιούσε Mono ως scripting backend, τώρα πλέον .NET Standard).

**Σύγχρονη Εναλλακτική:**

| Technology | Περιγραφή | Cross-platform |
|---|---|---|
| **.NET 8/9 (formerly .NET Core)** | Open-source, Microsoft's modern implementation (MIT license) | ✅ Linux, macOS, Windows, ARM, WebAssembly |
| **Mono (legacy)** | Παλαιότερη υλοποίηση (EOL) | ✅ (αλλά deprecated) |

> **Σημείωση:** Αν ξεκινάτε νέα projects σε C# το 2026, χρησιμοποιήστε **.NET 8 ή .NET 9** (LTS ή STS). Το Mono χρησιμοποιείται μόνο για συντήρηση παλαιών εφαρμογών (π.χ. Unity projects που δεν έχουν αναβαθμιστεί). Wine-mono (από WineHQ) παραμένει χρήσιμο για να τρέχει .NET εφαρμογές Windows σε Linux μέσω Wine.
