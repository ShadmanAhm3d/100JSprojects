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

app.post("/api/addUser", async (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res.status(400).json({ error: "Name, age, and email are required" });
  }
  try {
    const emailCheck = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );

    if (emailCheck.rows.length > 0) {
      return res
        .status(400)
        .json({ error: "Email already exists. Please use a different email." });
    }

    const result = await pool.query(
      "INSERT INTO users (name,age,email) values ($1,$2,$3) RETURNING *",
      [name, age, email],
    );
    console.log("RES: ", result);
    const newUser = result.rows[0];
    console.log(newUser);

    res.status(200).json({
      msg: result.rows,
      success: true,
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/getUser", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    console.log("Result : ");

    console.log(result.rows);

    res.status(201).json({
      msg: result.rows,
      success: true,
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/updateUser", async (req, res) => {
  try {
    const { oldEmail, name, age, email, gender } = req.body;

    // Validate oldEmail
    if (!oldEmail) {
      return res.status(400).json({
        msg: "oldEmail is required",
        success: false,
      });
    }

    // Check if user exists
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      oldEmail,
    ]);

    if (result.rows.length > 0) {
      // User exists, update the user
      const updatedUser = await pool.query(
        "UPDATE users SET name = $1, age = $2, email = $3, gender = $4 WHERE email = $5 RETURNING *",
        [name, age, email, gender, oldEmail],
      );

      console.log("Updated User --> ", updatedUser.rows[0]);
      res.status(200).json({
        msg: "User updated successfully",
        success: true,
        user: updatedUser.rows[0], // Send the updated user data
      });
    } else {
      // User does not exist
      res.status(404).json({
        msg: "User does not exist",
        success: false,
      });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      msg: "Internal Server Error",
      success: false,
      error: error.message, // Optional: Send the error message to the client
    });
  }
});
app.listen(PORT, () => {
  console.log(`SERVER ON ${PORT}`);
});
