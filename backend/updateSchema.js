const mongoose = require("mongoose");
const User = require("./models/User"); // Adjust the path to your User model

mongoose.connect(
  "mongodb+srv://admin:VigyBag%40123@vigybag.xgjgeeb.mongodb.net/?retryWrites=true&w=majority&appName=VigyBag",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

async function updateFullnameToUsername() {
  try {
    const users = await User.find();
    const updatePromises = users.map((user) => {
      user.username = user.fullname;
      user.fullname = undefined;
      return user.save();
    });
    await Promise.all(updatePromises);
    console.log("Successfully updated all users");
  } catch (error) {
    console.error("Error updating users:", error);
  } finally {
    mongoose.disconnect();
  }
}

async function updateIndexes() {
  try {
    await User.collection.dropIndex("fullname_1"); // Drop the old index
    await User.createIndexes(); // Create new indexes based on the updated schema
    console.log("Successfully updated indexes");
  } catch (error) {
    console.error("Error updating indexes:", error);
  } finally {
    mongoose.disconnect();
  }
}

// Run the updates
async function runUpdates() {
  await updateFullnameToUsername();
  await updateIndexes();
}

runUpdates();
