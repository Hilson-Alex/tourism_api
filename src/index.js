require("dotenv/config");
const db         = require("./db_middlewares")
const similarity = require("./similarity/similarity_middlewares");
const express    = require("express");
const bodyParser = require("body-parser")
const cors       = require("cors");

const app = express();
app.use(cors());
app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());

async function send (req, res) {
    res.json(req.array).status(200);
}

app.all('/', db.getAll, send);

app.post("/similarity", db.getAll, similarity.getSimilarity, similarity.sortResults);

app.post("/insert", db.insert);

app.listen(process.env.PORT || 8080);
