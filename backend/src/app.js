require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./utils/db");

const authRoutes = require("./routes/auth");
const recommendRoutes = require("./routes/recommend");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/recommend", recommendRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
