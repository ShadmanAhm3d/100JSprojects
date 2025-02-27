const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "feb27",
  password: "sa",
  port: 5432,
});

//NOTE: this is bascially login -- no profile pic required
app.post("/api/addUser", async (req, res) => {
  const { username, email, password_hash } = req.body;

  if (!username || !email || !password_hash) {
    return res.status(400).json({
      msg: "bosdk puri information daal",
      success: false,
    });
  }
  //lekin agar sab sahi to daal do db mein
  try {
    const checkEmail = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (checkEmail.rows.length > 0) {
      return res.status(401).json({
        msg: "USER ALREADY HAI BC",
        success: false,
      });
    }
    const result = await pool.query(
      "INSERT INTO users(username,email,password_hash)values ($1,$2,$3) RETURNING *",
      [username, email, password_hash],
    );

    res.status(200).json({
      msg: "User added successfully",
      success: true,
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//TODO: allow users to update Profile Photo,name if provided,email if provided

app.post("/api/updateUser/:id", async (req, res) => {
  const { profile_pic_url, username, email } = req.body;
  const { id } = req.params;

  if (!profile_pic_url || !username || !email) {
    return res.status(401).json({
      msg: "User nahi hai",
      success: false,
    });
  }

  try {
    // Check if the user exists
    const checkUser = await pool.query("SELECT * FROM users WHERE id=$1", [id]);

    if (checkUser.rows.length === 0) {
      return res.status(404).json({
        msg: "USER hai hi nahi BC",
        success: false,
      });
    }

    // Update user details
    const result = await pool.query(
      "UPDATE users SET profile_pic_url=$1, email=$2, username=$3 WHERE id=$4 RETURNING *",
      [profile_pic_url, email, username, id]
    );

    return res.status(200).json({
      msg: "User updated successfully",
      success: true,
      user: result.rows[0],
    });

  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({
      msg: "Server error",
      success: false,
    });
  }
});







// ✅ Start server
app.listen(PORT, () => {
  console.log(`SERVER ON ${PORT}`);
});
