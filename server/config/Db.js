const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ApiMonitoring", {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    })
      .then(() => console.log("MongoDB connected"))
      .catch(err => console.log(err));

  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
