require("dotenv/config");
const db         = require("./db_middlewares")
const similarity = require("./similarity/similarity_middlewares");
const express    = require("express");
const bodyParser = require("body-parser")
const cors       = require("cors");

// setting up express
const app = express();
app.use(cors());
app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());

// middleware to send response
async function send (req, res) {
    res.json(req.array).status(200);
}

// get all cases
app.all('/', db.getAll, send);

// get solutions by priority
app.post("/similarity", db.getAll, similarity.getSimilarity, similarity.sortResults, send);

// insert a case
app.post("/insert", db.insert);

app.listen(process.env.PORT || 8080);
