const express = require("express");

const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config(); // ✅ MUST be at top
const { initSocket } = require("./sockets/Scokets");
const AppExp = require("./routes/checkRoute");
const connectDB = require("./config/Db");
const Auth = require("./routes/AuthRouter");
const Team = require("./routes/TeamRouter");




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
const apiurl = process.env.NODE_ENV == 'Development' ? ["http://localhost:5174", "http://localhost:5173"] : process.env.LiveUi_Api
console.log(apiurl,'apiurl');

app.use(cors({
  origin: apiurl,
  credentials: true
}));

// console.log({process.env.NODE_ENV,process.env.JWT_SECRET_KEY});
// const data=
console.log(process.env.NODE_ENV, 'NODE_ENV');
console.log(process.env.Resend_email, 'Resend_email');
console.log(process.env.CLOUDINARY_URL, 'CLOUDINARY_URL');
console.log(process.env.JWT_SECRET_KEY, 'JWT_SECRET_KEY');

app.use(express.json());
// =====================
// Routes
// =====================
app.use("/AppExp", AppExp);
app.use("/monitoring/AuthUser", Auth);
app.use("/monitoring/Teams", Team);

app.get("/", (req, res) => {
  res.send("Server is running 🚀");


})

// =====================
// Server start
// =====================
const PORT = process.env.PORT || 8000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});