require("dotenv/config");
const Case = require('./data/Case');

const URI = process.env.MONGO_URL;

/**
 * Middleware to get all cases
 * @param req HTTP request
 * @param res HTTP response
 * @param next Callback to next Middleware
 * @returns {Promise<void>} No return, the array is stored on the
 *                          request, and send for the next middleware
 */
async function getAll(req, res, next){
    req.array = await Case.find({}).exec();
    next();
}

/**
 * Middleware to insert a case into the database
 * @param req HTTP request (expected a body.case to store)
 * @param res HTTP response
 * @returns {Promise<void>} response 200
 */
async function insert (req, res){
    new Case(req.body.case).save( (err, doc) => {
        if (err) {
            return res.status(501).json({error: err});
        }
        return res.status(200).json({ case: doc });
    });
}

/**
 * Middleware to count database docs
 * @param req req HTTP request
 * @param res req HTTP request
 * @returns {Promise<void>} response {quantity: quantity of docs}
 */
async function countCases (req, res){
    let query = req.query;
    if (Object.keys(query).length === 0 && query.constructor === Object){
        query = req.body;
    }
    Case.count(query, (err, count) => {
        if (err) {
            return res.status(501).json({error: err});
        }
        return res.status(200).json({ quantity: count });
    });
}

module.exports = {getAll, insert, countCases};
