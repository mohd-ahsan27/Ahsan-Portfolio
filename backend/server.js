// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const contactRoutes = require("./routes/contactRoutes"); // ✅ This must match the filename

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
