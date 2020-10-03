require("dotenv/config");
const MongoClient = require('mongodb').MongoClient;
const express = require("express");
const cors = require("cors");
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(cors());

app.listen(process.env.PORT || 8080)

