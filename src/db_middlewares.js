require("dotenv/config");
const MongoClient = require('mongodb').MongoClient;

const URI = process.env.MONGO_URL;
const CLIENT = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true});
const DB_NAME = "tourism";
const COLLECTION = "cases";

/**
 * Middleware to get all cases
 * @param req HTTP request
 * @param res HTTP response
 * @param next Callback to next Middleware
 * @returns {Promise<void>} No return, the array is stored on the
 *                          request, and send for the next middleware
 */
async function getAll(req, res, next){
    await CLIENT.connect();
    const collection = CLIENT.db(DB_NAME).collection(COLLECTION);
    req.array = await collection.find({}).toArray();
    next();
}

/**
 * Middleware to insert a case into the database
 * @param req HTTP request (expected a body.case to store)
 * @param res HTTP response
 * @returns {Promise<void>} response 200
 */
async function insert (req, res){
    await CLIENT.connect();
    const collection = CLIENT.db(DB_NAME).collection(COLLECTION);
    await collection.insertOne(req.body.case);
    res.status(200).send();
}

/**
 * Middleware to count database docs
 * @param req req HTTP request
 * @param res req HTTP request
 * @returns {Promise<void>} response {quantity: quantity of docs}
 */
async function countCases (req, res){
    await CLIENT.connect();
    const collection = CLIENT.db(DB_NAME).collection(COLLECTION);
    const count = collection.countDocuments({});
    res.json({quantity: await count}).status(200);
}

module.exports = {getAll, insert, countCases};