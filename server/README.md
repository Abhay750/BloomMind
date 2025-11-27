# MindBloom Backend

This is a minimal Node.js + Express backend for storing mood tracker entries using SQLite (via `better-sqlite3`).

Endpoints

- POST /api/entries
  - body: { userId, date, score (number), mood, moodEmoji, notes }
  - response: { success: true, id }

- GET /api/entries?userId=...&limit=100
  - returns { entries: [...] }

- DELETE /api/entries?userId=...
  - deletes entries for the user

- GET /api/stats?userId=...
  - returns basic stats: daysTracked, avgMood, lowMoodCount

Authentication endpoints

- POST /api/register
  - body: { email, password, name }
  - response: { success: true, userId }

- POST /api/login
  - body: { email, password }
  - response: { success: true, token, user }

Run

1. cd server
2. npm install
3. npm start

By default the DB file will be created at `server/mindbloom.db`. For better performance under high load, run this service behind a process manager and consider using a production-grade DB (Postgres) if write/read traffic increases.

Performance notes

- `better-sqlite3` is synchronous but high-performance for local single-process workloads.
- The DB uses WAL mode for improved concurrency.
- An index on `(userId, createdAt DESC)` supports fast retrieval of recent entries for a user.

Security

- This example has no authentication. Add JWT or session-based auth before using in production.
