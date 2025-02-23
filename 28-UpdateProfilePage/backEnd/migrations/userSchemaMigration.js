import mongoose from "mongoose";
import { User } from "../models/UserSchema.js";

export default async function migrateUsers() {
  try {
    await User.updateMany({}, { $set: { age: null } }); // Set age to null for all existing users
    console.log("Migration completed: Age field added to existing users.");
  } catch (error) {
    console.error("Error during migration:", error);
  }
}

// Call this function once after adding the age field
