const mongoose = require("mongoose");
const Monogo = process.env.NODE_ENV == 'Development' ? "mongodb://127.0.0.1:27017/ApiMonitoring" : process.env.MongoURI
console.log(Monogo, 'Monogo');

const connectDB = async () => {
  try {
    await mongoose.connect(Monogo, {
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
