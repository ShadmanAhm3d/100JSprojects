import mongoose from "mongoose";
const user = new mongoose.Schema({
  name: String,
  email: String,
  age : Number,
});

const User = mongoose.model("User", user);


export {User}

