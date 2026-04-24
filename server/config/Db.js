const mongoose = require("mongoose");

const MONGO_URI =
  process.env.NODE_ENV === "development"
    ? "mongodb://host.docker.internal:27017/ApiMonitoring"
    : process.env.MONGO_URI;


const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log("MongoDB connected 🚀");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;