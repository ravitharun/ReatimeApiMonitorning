const express = require("express");
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");

const { initSocket } = require("./sockets/Scokets");
const AppExp = require("./routes/checkRoute");

dotenv.config();

const app = express();
const server = http.createServer(app);

// =====================
// Socket setup 
// =====================
 initSocket(server);

// =====================
// Middlewares
// =====================
app.use(cors({
  origin: ["http://localhost:5173","http://localhost:3000"]
}));
app.use(express.json());
// =====================
// Routes
// =====================
app.use("/AppExp", AppExp);

// =====================
// Server start
// =====================
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});