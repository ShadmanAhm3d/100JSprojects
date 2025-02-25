const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "feb_learning",
  password: "sa",
  port: 5432,
});

// ✅ Add a new user
app.post("/api/addUser", async (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res.status(400).json({ error: "Name, age, and email are required" });
  }
  try {
    // Check if email already exists
    const emailCheck = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (emailCheck.rows.length > 0) {
      return res.status(400).json({ error: "Email already exists. Please use a different email." });
    }

    // Insert new user
    const result = await pool.query(
      "INSERT INTO users (name, age, email) values ($1, $2, $3) RETURNING *",
      [name, age, email]
    );

    res.status(200).json({
      msg: "User added successfully",
      success: true,
      user: result.rows[0]
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Add or update user address
app.post("/api/addAddress", async (req, res) => {
  const { email, street, city, state, country } = req.body;
  if (!email || !street || !city || !state || !country) {
    return res.status(400).json({ error: "All address fields are required" });
  }

  try {
    // Check if user exists
    const userCheck = await pool.query("SELECT id FROM users WHERE email = $1", [email]);

    if (userCheck.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const userId = userCheck.rows[0].id;

    // Check if user already has an address
    const addressCheck = await pool.query("SELECT * FROM addresses WHERE user_id = $1", [userId]);

    if (addressCheck.rows.length > 0) {
      // Update existing address
      const updatedAddress = await pool.query(
        "UPDATE addresses SET street = $1, city = $2, state = $3, country = $4 WHERE user_id = $5 RETURNING *",
        [street, city, state, country, userId]
      );

      return res.status(200).json({
        msg: "Address updated successfully",
        success: true,
        address: updatedAddress.rows[0]
      });
    } else {
      // Insert new address
      const newAddress = await pool.query(
        "INSERT INTO addresses (user_id, street, city, state, country) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [userId, street, city, state, country]
      );

      return res.status(201).json({
        msg: "Address added successfully",
        success: true,
        address: newAddress.rows[0]
      });
    }
  } catch (error) {
    console.error("Error adding/updating address:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Get user with address
app.get("/api/getUserWithAddress", async (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const result = await pool.query(
      `SELECT users.id, users.name, users.age, users.email, 
              addresses.street, addresses.city, addresses.state, addresses.country
       FROM users 
       LEFT JOIN addresses ON users.id = addresses.user_id
       WHERE users.email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      msg: "User data retrieved",
      success: true,
      user: result.rows[0]
    });
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`SERVER ON ${PORT}`);
});

