const seasonMatrix      = require("./similarity_maps").seasonSimilarity;
const costCounterweight = require("./similarity_maps").costSimilarity;
const typeMatrix        = require("./similarity_maps").placeTypeSimilarity;
const groupMatrix       = require("./similarity_maps").groupSimilarity;

/**
 * Weight table. Some weights are defined by user.
 * @type {{child_amount: number, person_amount: number, dest_type: number, season: number, group: number}}
 */
const weight = {
    season: 0.8,
    person_amount: 0.4,
    child_amount: 0.7,
    dest_type: 0.9,
    group: 0.8,
}

/**
 * Verify if value2 is on tolerance edge of value1
 * @param value1 The base value
 * @param value2 The value to verify if is on tolerance
 * @param tolerance edge (up and down if no inferior edge is defined)
 * @param infTolerance inferior edge (optional)
 * @returns {number} 1 if is on tolerance, else 0
 */
function onTolerance (value1, value2, tolerance, infTolerance){
    infTolerance = (infTolerance === undefined || infTolerance === null) ? tolerance : infTolerance;
    if (value1 + tolerance >= value2 && value1 - infTolerance <= value2){
        return 1;
    }
    return 0;
}

/**
 * Sum function to reduce
 * @param a a number
 * @param b other number
 * @returns {*} sum of the numbers
 */
function sum (a, b) {
    return a + b;
}

/**
 * Middleware to calculate the similarity of all cases
 * @param req HTTP request (we waiting a body with the case)
 * @param res HTTP response
 * @param next next Middleware
 * @returns {Promise<void>} no return, the result is on request
 */
async function getSimilarity (req, res, next){
    const array = req.array;
    const userCase = req.body.case;
    weight.cost = userCase.custo;
    const similarities = {};
    let similarity = [];
    let custo, solucao;
    for (const doc of array) {
        custo = doc.custo;
        solucao = doc.solucao;
        similarity.push(seasonMatrix[userCase.estacao][doc.estacao] * weight.season);
        similarity.push(costCounterweight[doc.custo] * weight.cost);
        similarity.push(onTolerance(userCase.num_pessoas, doc.num_pessoas, 3) * weight.person_amount);
        similarity.push(onTolerance(userCase.num_criancas, doc.num_pessoas, 3, userCase - 1) *
                                    weight.child_amount);
        similarity.push(typeMatrix[userCase.tipo][doc.tipo] * weight.dest_type);
        // adicionar similaridade de distância futuramente
        similarity.push(groupMatrix[userCase.grupo][doc.grupo] * weight.group);

        similarities[similarity.reduce(sum) / Object.values(weight).reduce(sum)] = {custo, solucao};
        similarity = [];
    }
    delete weight.cost;
    req.array = similarities;
    next();
}

/**
 * Sort the cases by its similarity
 * @param req HTTP request
 * @param res HTTP response
 * @returns no return, the result is on request
 */
function sortResults (req, res, next) {
    const ordered = [];
    const array = req.array;
    Object.keys(array).sort((a, b) => b - a).forEach((key) => {
        ordered.push(array[key]);
    })
    req.array = ordered;
    next();
}

module.exports = {getSimilarity, sortResults};
