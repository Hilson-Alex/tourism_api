require("dotenv/config");
const MongoClient = require('mongodb').MongoClient;
const express = require("express");
const cors = require("cors");
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(cors());
app.use(express.json);

async function getAll (){
    let result = [];
    try {
        await client.connect();
        const collection = client.db("tourism").collection("cases");
        result = await collection.find({}).toArray();
    } finally {
        await client.close();
    }
    return result;

}

app.all("/", (req, res) => {
    res.status(200).json(getAll());
})

app.listen(process.env.PORT || 8080)

