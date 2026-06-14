---
title: "WebSocket Pluggable Transport (Tor)"
alternative_to: ["meek (HTTP camouflage)", "Snowflake (WebRTC)", "FTE (format-transforming)"]
categories: ["Ιδιωτικότητα", "Δίκτυα", "Παράκαμψη Λογοκρισίας"]
website: "https://gitweb.torproject.org/pluggable-transports/websocket.git"
logo: "/images/placeholder.svg"
license: "BSD-3-Clause"
description: "Ένα pluggable transport (PT) για το δίκτυο Tor που μεταμφιέζει την κίνηση Tor (TLS) σε WebSocket (WS) ή WebSocket Secure (WSS) traffic. Σκοπός του είναι να παρακάμπτει λογοκρισία (firewalls, deep packet inspection) που στοχεύει το πρωτόκολλο Tor. Ο client ανοίγει μια WebSocket σύνδεση με έναν bridge server, ο οποίος με τη σειρά του συνδέεται στο Tor network. Χρήσιμο σε χώρες που μπλοκάρουν το Tor (Κίνα, Ιράν, κλπ.)."
featured: false
---

Τα pluggable transports (PTs) είναι τεχνικές που αποκρύπτουν το γεγονός ότι ένας χρήστης χρησιμοποιεί Tor. Το WebSocket PT στέλνει την κρυπτογραφημένη κίνηση Tor μέσα σε WebSocket frames (RFC 6455). Αυτά μοιάζουν με HTTP traffic (WebSocket handshake), καθιστώντας δύσκολο για έναν firewall να ξεχωρίσει από legit WebSocket connections (π.χ. chat apps, real-time dashboards).

**Σύγκριση με άλλα PTs:**

| PT | Πρωτόκολλο | Ανίχνευση DPI | Χρήση |
|---|---|---|---|
| **WebSocket** | WebSocket (HTTP handshake) | Δύσκολη (looks like web traffic) | Medium bandwidth, low latency |
| **meek** | HTTP (domain fronting) | Πολύ δύσκολη (χρήση CDN) | Υψηλή λανθάνουσα (CDN) |
| **Snowflake** | WebRTC (P2P) | Δύσκολη (πολλές επιλογές) | Low bandwidth, limited |
| **obfs4** | Random padding | Μέτρια (γνωστό pattern) | Standard (default) |

> **Σημείωση:** Το WebSocket PT είναι χρήσιμο όταν τα obfs4 bridges αποτυγχάνουν. Η διαμόρφωση απαιτεί λειτουργία bridge server (δεν είναι απλή). Για απλούς χρήστες, προτιμήστε **Tor Browser** με built-in bridges (obfs4, Snowflake, meek).
