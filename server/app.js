require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const cors = require("cors");
const router = require("./routes");
const uri = process.env.ATLAS_URI;
const db = mongoose.connection;
app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected!");
});

app.use(router);

app.listen(PORT, () => console.log("server is running on port " + PORT));
