const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
// const admin = require("firebase-admin");
require("dotenv").config();
const ObjectId = require("mongodb").ObjectId;
// const stripe = require("stripe")(process.env.STRIPE_SECRET);

const app = express();

const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Best Bazar server is running");
});

app.listen(port, () => {
  console.log(`Best Bazar app listening at ${port}`);
});
