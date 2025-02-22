const mongoose = require("mongoose");

function connectDB() {
  const url =
    "mongodb+srv://shadman01010:Shadman123@cluster0.r7qfb.mongodb.net/MongoDBTest";
  mongoose
    .connect(url, {})
    .then(() => console.log("Connected : "))
    .catch((err) => console.error("MongoDB connection error:", err));
}

connectDB();

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const Address = mongoose.model("Address", addressSchema);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" }, // Referencing Address
});

const User = mongoose.model("User", userSchema);

async function addUser() {
  try {
    const userData = {
      name: "Shadman",
      email: "shadman@example.com",
      // Do not provide address reference
    };

    const newUser = new User(userData); // No address reference here
    await newUser.save();
    console.log("User added successfully!");
  } catch (error) {
    console.error("Error adding user:", error);
  } finally {
    mongoose.connection.close(); // Connection Band Karna Mat Bhoolna
  }
}

// addUser();

async function addAddressToUser() {
  try {
    // 1. Create the address first
    const newAddress = new Address({
      street: "123 Main St",
      city: "INDIA",
    });

    const savedAddress = await newAddress.save();

    // 2. Find the user and update the address field with the new address ObjectId
    const user = await User.findOneAndUpdate(
      { name: "Shadman" }, // Find the user
      { $set: { address: savedAddress._id } }, // Update the address field
      { new: true }, // Return the updated user document
    );

    console.log("User updated with address:", user);
  } catch (error) {
    console.error("Error updating user:", error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
}

//addAddressToUser();

async function getFullUser() {
  try {
    const user = await User.findOne
    ({ email: "shadman@example.com" }).populate("address");

    if (user) {
      console.log(user);
    } else {
      console.log("not found");
    }
  } catch (error) {
    console.error("Error updating user:", error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
}


async function updateUserAddress() {
  try {
    // 1. Find the user by email
    const user = await User.findOne({ email: "shadman@example.com" });

    if (user) {
      // 2. Find or create a new Address
      const newAddress = await Address.findOneAndUpdate(
        { street: "123 Main St" },  // Example condition to find the address
        { city: "New City", street: "New Street" }, // New address details
        { new: true, upsert: true } // Update if found, or create if not found
      );

      // 3. Update the user's address field to point to the new Address
      user.address = newAddress._id; // Set the ObjectId reference to the new address
      await user.save(); // Save the updated user

      console.log("User address updated successfully:", user);
    } else {
      console.log("User not found!");
    }
  } catch (error) {
    console.error("Error updating user address:", error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
}

//updateUserAddress();
getFullUser();
