const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('Games.db');
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Games (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      price REAL,
      image_url TEXT
    )
  `);
});
module.exports = db;