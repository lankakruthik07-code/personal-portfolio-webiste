const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// CONNECT DATABASE
connectDB();

// ROUTES
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});