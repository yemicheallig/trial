const express = require("express");
const mongoose = require("mongoose");
const pages = require("./Router/pages");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Db Connected successfully"))
  .catch((e) => console.log(e));

app.use(express.json());
app.use(cors());
app.use("/", pages);

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
