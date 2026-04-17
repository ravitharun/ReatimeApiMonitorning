const mongoose = require("mongoose");
// const URI =
//   process.env.NODE_ENV === "production"
//     ? process.env.MONGO_URI
//     : process.env.Local_MONGO_URI;
//     console.log(URI,'URI');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ApiMonitoring');
    console.log("MongoDB connected");
  
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
