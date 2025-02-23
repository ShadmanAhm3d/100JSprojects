import express from "express";
import cors from "cors";
import { connectDB } from "./db/connection.js";
import { User } from "./models/UserSchema.js";

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.post("/api/addUser", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: "User Added Successfully" });
  } catch (e) {
    res.status(500).json({ message: "Error Adding User", e });
  }
});

app.post("/api/updateUser", async (req, res) => {
  try {
    const { oldName, name, email } = req.body; // Get old and new name from frontend
    console.log(oldName, name, email);

    const updatedUser = await User.findOneAndUpdate(
      { name: oldName }, // Find user by old name and email
      { name: name }, // Update the name
      { new: true }, // Return the updated user
    );

    if (updatedUser) {
      res.json({ message: "User Updated Successfully", user: updatedUser });
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Error Updating User", error: e });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
