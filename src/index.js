require("dotenv/config");
const MongoClient = require('mongodb').MongoClient;
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(cors());
app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());

async function getAll(){
    await client.connect();
    const collection = await client.db("tourism").collection("cases");
    const result = await collection.find({});
    return result.toArray();
}

app.get('/', (async (req, res) => {
     const json = await getAll();
     res.json(json);
}))

app.listen(process.env.PORT || 8080);
