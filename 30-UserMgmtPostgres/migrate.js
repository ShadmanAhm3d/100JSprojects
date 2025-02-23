
const { Pool } = require("pg");

// Database connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "feb_learning",
  password: "sa",
  port: 5432,
});

const migrate = async () => {
  try {
    console.log("Starting migration...");

    // Step 1: Add the new column with a default value
    await pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS gender VARCHAR(20) DEFAULT 'Not Specified';
    `);
    console.log("✔️ Added 'gender' column with default value.");

    // Step 2: Update existing users who have NULL gender
    await pool.query(`
      UPDATE users SET gender = 'Not Specified' WHERE gender IS NULL;
    `);
    console.log("✔️ Updated existing users with default gender.");

    // Step 3 (Optional): Set the column to NOT NULL after updating existing records
    await pool.query(`
      ALTER TABLE users ALTER COLUMN gender SET NOT NULL;
    `);
    console.log("✔️ Set 'gender' column to NOT NULL.");

    console.log("Migration completed successfully! 🎉");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await pool.end(); // Close DB connection
  }
};

// Run migration
migrate();
