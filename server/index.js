const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();
connectDB();

app.use(cors({
  origin: "http://localhost:5173", // ✅ your frontend URL
  credentials: true                // ✅ allow cookies/headers
}));
app.use(express.json());
app.use("/api/auth",authRoutes)

// Test Route
app.get("/", (req, res) => {
  res.send("Job Portal Backend Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
