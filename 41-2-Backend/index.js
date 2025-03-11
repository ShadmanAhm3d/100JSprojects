import express from "express"; // ✅ Use import for consistency
import pkg from "pg";
import cors from "cors";

const { Pool } = pkg;

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Set up the PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "march10",
  password: "sa",
  port: 5432,
});

// ✅ Test endpoint
app.get("/ping", (req, res) => {
  res.status(200).json({
    msg: "PONG",
    success: true,
  });
});

// ✅ Get all tasks endpoint
app.get("/alltasks", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM task;");

    res.status(200).json({
      msg: result.rows, // ✅ Use `result.rows` to get the data
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      msg: "INTERNAL: " + error.message,
      success: false,
    });
  }
});

app.post("/posttask", async (req, res) => {
  try {
    // ✅ Extract `task` from the request body
    const { task } = req.body;

    if (!task) {
      return res.status(400).json({
        msg: "Task is required",
        success: false,
      });
    }

    // ✅ Insert task into the database
    const result = await pool.query(
      "INSERT INTO task(tasks) VALUES($1) RETURNING *;",
      [task],
    );

    // ✅ Send success response
    res.status(201).json({
      msg: "Task added successfully",
      task: result.rows[0], // Return the inserted task
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      msg: "INTERNAL: " + error.message,
      success: false,
    });
  }
});

// ✅ Use a default port if `process.env.PORT` is not set
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
