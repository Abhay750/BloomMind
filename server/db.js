const path = require('path');
const Database = require('better-sqlite3');

const DB_PATH = process.env.MDB_PATH || path.join(__dirname, 'mindbloom.db');
const db = new Database(DB_PATH);

// Initialize table
db.pragma('journal_mode = WAL');

db.prepare(`
  CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT NOT NULL,
    date TEXT NOT NULL,
    score REAL NOT NULL,
    mood TEXT,
    moodEmoji TEXT,
    notes TEXT,
    createdAt INTEGER NOT NULL
  )
`).run();

// Index for performance on userId + createdAt
db.prepare(`CREATE INDEX IF NOT EXISTS idx_entries_user_created ON entries (userId, createdAt DESC)`).run();

// Users table for authentication
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    passwordHash TEXT NOT NULL,
    name TEXT,
    createdAt INTEGER NOT NULL
  )
`).run();

// Index on email for quick lookup
db.prepare(`CREATE INDEX IF NOT EXISTS idx_users_email ON users (email)`).run();

module.exports = db;
