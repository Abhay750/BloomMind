const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomUUID } = require('crypto');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '1mb' }));

// Create entry
app.post('/api/entries', (req, res) => {
  const { userId, date, score, mood, moodEmoji, notes } = req.body;
  if (!userId) return res.status(400).json({ error: 'userId required' });
  if (typeof score !== 'number') return res.status(400).json({ error: 'score must be a number' });

  const stmt = db.prepare(`INSERT INTO entries (userId, date, score, mood, moodEmoji, notes, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)`);
  const info = stmt.run(userId, date || new Date().toISOString(), score, mood || '', moodEmoji || '', notes || '', Date.now());
  res.json({ success: true, id: info.lastInsertRowid });
});

// Register new user
app.post('/api/register', (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });

  // Check if email exists
  const exists = db.prepare(`SELECT id FROM users WHERE email = ?`).get(email);
  if (exists) return res.status(409).json({ error: 'email already registered' });

  const userId = (typeof randomUUID === 'function') ? randomUUID() : `user-${Date.now()}-${Math.floor(Math.random()*10000)}`;
  const passwordHash = bcrypt.hashSync(password, 10);
  const stmt = db.prepare(`INSERT INTO users (userId, email, passwordHash, name, createdAt) VALUES (?, ?, ?, ?, ?)`);
  const info = stmt.run(userId, email, passwordHash, name || '', Date.now());
  res.json({ success: true, userId });
});

// Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });

  const user = db.prepare(`SELECT id, userId, email, passwordHash, name FROM users WHERE email = ?`).get(email);
  if (!user) return res.status(401).json({ error: 'invalid credentials' });

  const ok = bcrypt.compareSync(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'invalid credentials' });

  const token = jwt.sign({ userId: user.userId, email: user.email }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' });
  res.json({ success: true, token, user: { userId: user.userId, email: user.email, name: user.name } });
});

// Get entries for user (optional limit)
app.get('/api/entries', (req, res) => {
  const { userId, limit } = req.query;
  if (!userId) return res.status(400).json({ error: 'userId required' });
  const lim = parseInt(limit, 10) || 1000;
  const stmt = db.prepare(`SELECT id, userId, date, score, mood, moodEmoji, notes, createdAt FROM entries WHERE userId = ? ORDER BY createdAt ASC LIMIT ?`);
  const rows = stmt.all(userId, lim);
  res.json({ entries: rows });
});

// Delete entries for user (reset)
app.delete('/api/entries', (req, res) => {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ error: 'userId required' });
  const stmt = db.prepare(`DELETE FROM entries WHERE userId = ?`);
  const info = stmt.run(userId);
  res.json({ success: true, deleted: info.changes });
});

// Stats endpoint
app.get('/api/stats', (req, res) => {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ error: 'userId required' });
  const totalStmt = db.prepare(`SELECT COUNT(*) as cnt, AVG(score) as avgScore FROM entries WHERE userId = ?`);
  const total = totalStmt.get(userId);
  // Simple insight example: count entries with score < 4
  const lowStmt = db.prepare(`SELECT COUNT(*) as lowCount FROM entries WHERE userId = ? AND score < 4`);
  const low = lowStmt.get(userId);
  res.json({ daysTracked: total.cnt || 0, avgMood: total.avgScore || 0, lowMoodCount: low.lowCount || 0 });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`MindBloom backend listening on port ${PORT}`);
});
