const express = require("express");

const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config(); // ✅ MUST be at top
const { initSocket } = require("./sockets/Scokets");
const AppExp = require("./routes/checkRoute");
const connectDB = require("./config/Db");
const Auth = require("./routes/AuthRouter");




const app = express();
const server = http.createServer(app);

// =====================
// Socket setup 
// =====================
initSocket(server);
connectDB()

// =====================
// Middlewares
// =====================
app.use(cors({
  origin: ["http://localhost:5174", "http://localhost:5173"],
  credentials: true
}));


app.use(express.json());
// =====================
// Routes
// =====================
app.use("/AppExp", AppExp);
app.use("/monitoring/AuthUser", Auth);

// =====================
// Server start
// =====================
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});