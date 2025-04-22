import Database from "better-sqlite3";
import User from "../models/User";

let db;

export function openDB() {
  if (!db) {
    try {
      db = new Database("./database.db", { verbose: console.log }); // Ensure this path points to your database file
      console.log("Database connection established.");
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      throw error;
    }
  }
  return db;
}

// Ensure the database connection is closed when the application exits
process.on("exit", () => {
  if (db) {
    db.close();
    console.log("Database connection closed.");
  }
});

// CRUD repository
export function createUser(user) {
  const db = openDB();
  const stmt = db.prepare("INSERT INTO users (name) VALUES (?)");
  const result = stmt.run(user.name);
  return result.lastInsertRowid;
}

export function getUsers() {
  const db = openDB();
  const stmt = db.prepare("SELECT * FROM users");
  const rows = stmt.all();
  return rows.map(User.fromDatabaseRow);
}

export function updateUser(id, newName) {
  const db = openDB();
  const stmt = db.prepare("UPDATE users SET name = ? WHERE id = ?");
  return stmt.run(newName, id);
}

export function deleteUser(id) {
  const db = openDB();
  const stmt = db.prepare("DELETE FROM users WHERE id = ?");
  return stmt.run(id);
}
