---
title: "Neo4j (Graph Database)"
alternative_to: ["Amazon Neptune (managed)", "ArangoDB (multi-model)", "JanusGraph (open source)"]
categories: ["Cloud", "Ανάπτυξη Λογισμικού", "Βάσεις Δεδομένων"]
website: "https://neo4j.com/"
logo: "/images/placeholder.svg"
license: "GPL-3.0 (Community Edition), Commercial (Enterprise)"
description: "Η κορυφαία βάση δεδομένων γράφων (graph database) παγκοσμίως, που αποθηκεύει δεδομένα ως **κόμβους (nodes)** και **σχέσεις (relationships)** με ιδιότητες (properties) και κατεύθυνση. Χρησιμοποιεί **Cypher** (declarative query language, σαν SQL για γράφους) για εξαιρετικά γρήγορη πλοήγηση (traversal) σχέσεων (παρακάμπτει τα joins). Ιδανική για social networks, recommendation engines, fraud detection, master data management, knowledge graphs, network/IT operations."
featured: true
---

Οι σχεσιακές βάσεις (SQL) χειρίζονται πολύ καλά δεδομένα με γραμμές και στήλες, αλλά όταν έχουμε **πολλές σχέσεις** (friends-of-friends, recommendations, pathfinding) τα joins γίνονται δαπανηρά (αυξάνουν πολυπλοκότητα). Οι graph databases (όπως Neo4j) αποθηκεύουν τις σχέσεις ως πρώτης τάξεως (first-class) objects, επιτρέποντας σταθερό χρόνο traversal ανεξάρτητα από το μέγεθος του graph.

**Βασικές Έννοιες (Property Graph Model):**

- **Nodes (Κόμβοι):** Οντότητες (π.χ. Person, Company, Product). Κάθε node μπορεί να έχει labels (tags) και properties (key-value).
- **Relationships (Σχέσεις):** Συνδέουν δύο nodes με κατεύθυνση (directional) και τύπο (type). Μπορούν επίσης να έχουν properties (π.χ. `since: 2020`).
- **Cypher Query Language:** Declarative, ASCII-art syntax. Παράδειγμα: `MATCH (p:Person)-[:FRIENDS_WITH]->(f:Person) WHERE p.name = 'Alice' RETURN f.name`.

**Πλεονεκτήματα (για highly connected data):**

| Ερώτημα | SQL (MySQL/Postgres) | Neo4j (Cypher) |
|---|---|---|
| "Find friends of friends of Alice (depth 2)" | Πολλαπλά JOINs (δύσκολο, αργό) | `MATCH (alice)-[:FRIENDS_WITH*2]->(fof) RETURN fof` (1 query, constant time) |
| "Recommend products based on users with same purchases" | Πολλά JOINs + aggregation | Graph traversal (εγγενή) |
| "Shortest path between two nodes" | Δεν υποστηρίζεται εγγενώς (χρειάζεται SQL recursion) | `MATCH p=shortestPath((a)-[*]-(b))` (εγγενής) |

**Βασικές Δυνατότητες (Neo4j 5.x):**

- **ACID transactions (πλήρης).**
- **Indexing (on node labels, relationship types, properties).**
- **Graph algorithms (ενσωματωμένα στο GDS - Graph Data Science):** PageRank, shortest path, community detection (Louvain), μεταξύness κεντρικότητα, κλπ.
- **Cypher (ISO standard since 2024).**
- **Drivers & APIs:** Official drivers for Java, Python, JavaScript, Go, .NET, Ruby, PHP. REST API, Bolt binary protocol.
- **Visualization (Neo4j Browser):** Ενσωματωμένο web interface για εξερεύνηση γράφων.
- **Neo4j Aura (Cloud managed):** AWS, Azure, GCP.

**Εκδόσεις:**

| Έκδοση | Άδεια | Χαρακτηριστικά |
|---|---|---|
| **Neo4j Community Edition** | GPL-3.0 | Single instance, full Cypher, ACID, indexes. Δεν έχει clustering, causal consistency, advanced monitoring. |
| **Neo4j Enterprise Edition** | Commercial | Clustering (high availability), online backup, LDAP/SSO, advanced monitoring, security. |
| **Neo4j Aura (Cloud)** | Commercial (managed) | Fully managed, auto-scaling, backups, support. |

**Παραδείγματα Χρήσης (Real-world):**

- **Social Media (Facebook, LinkedIn):** Συνδέσεις μεταξύ χρηστών, προτάσεις φίλων.
- **Fraud Detection (τράπεζες):** Ανίχνευση πολύπλοκων κυκλωμάτων συναλλαγών (detect circular transactions).
- **Recommendation Engines** (Netflix, Amazon): Products based on "users who bought this also bought".
- **Knowledge Graphs** (Google, Wikipedia): Οντολογίες, facts.

> **Σημείωση:** Η Neo4j είναι η de facto standard graph database. Για εφαρμογές που χρειάζονται ερωτήσεις πολλαπλών βημάτων (graph traversals) over millions of nodes/relationships, είναι ασυναγώνιστη. Αν το dataset σας είναι μικρό (<1M nodes) ή δεν έχετε deep connections, μια SQL βάση μπορεί να επαρκεί.
