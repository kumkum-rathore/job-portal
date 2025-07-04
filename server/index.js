const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Job Portal Backend Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
