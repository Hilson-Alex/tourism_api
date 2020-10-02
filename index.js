const seasons = require("./data/values").seasons;
const cost = require("./data/values").cost;
const type = require("./data/values").placeType;
const group = require("./data/values").group
const MongoClient = require('mongodb').MongoClient;
const express = require("express");
const cors = require("cors");
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(cors());

async function run() {
    try {
        await client.connect();
        const database = client.db("tourism");
        const collection = database.collection("cases");
        const query = {};
        const result = await collection.find(query).count();
        console.log(result)
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
