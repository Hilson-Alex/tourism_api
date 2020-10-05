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

function allow (req, res, next){
    req.setHeader('Access-Control-Allow-Origin', '*'); // or something like http://localhost:3000'
    // Request methods you wish to allow
    req.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    // Request headers you wish to allow
    req.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    req.setHeader('Access-Control-Allow-Credentials', true);
    // To expose all headers in all responses
    req.setHeader('Access-Control-Expose-Headers', '*');
    next();
}

// get all cases
app.all('/', allow, db.getAll, send);

// get solutions by priority
app.post("/similarity", allow, db.getAll, similarity.getSimilarity, similarity.sortResults, send);

// insert a case
app.post("/insert", allow, db.insert);

app.listen(process.env.PORT || 8080);
