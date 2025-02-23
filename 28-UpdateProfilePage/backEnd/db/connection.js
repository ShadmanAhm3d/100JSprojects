import mongoose from "mongoose";
export function connectDB() {
  mongoose
    .connect(
      "mongodb+srv://shadman01010:Shadman123@cluster0.r7qfb.mongodb.net/T1",
      {},
    )
    .then(() => {
      console.log("Connected");
    })
    .catch((e) => console.log("error ", e));
}

