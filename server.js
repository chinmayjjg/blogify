const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoutes = require("./routs/postRouts");
const authRoute = require("./routs/auth");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

// ✅ CORS must come first!
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// ✅ Routes after CORS
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoutes);

app.get("/", (req, res) => {
  res.send("blogify api is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
