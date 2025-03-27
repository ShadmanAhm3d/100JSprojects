// server.js
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "authfunc",
  password: "sa",
  port: 5432,
});

// signup
app.post("/signup", async (req, res) => {
  const { fname, email, password } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [fname, email, password],
    );
    console.log("User registered in DB : ", result.rows[0]);
    res.json({ success: true, message: "User created", user: result.rows[0] });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password],
    );
    if (result.rows.length > 0) {
      res.json({ success: true, message: "Logged in", user: result.rows[0] });
    } else {
      res.status(401).json({ success: false, error: "Invalid credentials" });
    }
    console.log("User Logged in DB : ", result.rows[0]);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// logout (just for placeholder, since no session management)
app.post("/logout", (req, res) => {
  res.json({ success: true, message: "Logged out (but not really)" });
});

// server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
