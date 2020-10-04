const seasonMatrix      = require("./similarity_maps").seasonSimilarity;
const costCounterweight = require("./similarity_maps").costSimilarity;
const typeMatrix        = require("./similarity_maps").placeTypeSimilarity;
const groupMatrix       = require("./similarity_maps").groupSimilarity;

const weight = {
    season: 0.8,
    person_amount: 0.4,
    child_amount: 0.7,
    dest_type: 0.9,
    group: 0.8,
}

function onTolerance (value1, value2, tolerance, infTolerance){
    infTolerance = (infTolerance === undefined || infTolerance === null) ? tolerance : infTolerance;
    if (value1 + tolerance >= value2 && value1 - infTolerance <= value2){
        return 1;
    }
    return 0;
}

function sum (a, b) {
    return a + b;
}

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
        similarity.push(onTolerance(userCase.num_criancas, doc.num_pessoas, 3,
                        (userCase - 3 <= 0) ? 1 : 3) *
                                    weight.child_amount);
        similarity.push(typeMatrix[userCase.tipo][doc.tipo] * weight.dest_type);
        // adicionar similaridade de distância futuramente
        similarity.push(groupMatrix[userCase.grupo][doc.grupo] * weight.group);

        similarities[similarity.reduce(sum) / Object.values(weight).reduce(sum)] = {custo, solucao};
        similarity = [];
    }
    req.array = similarities;
    next();
}

function sortResults (req, res) {
    const ordered = [];
    const array = req.array;
    Object.keys(array).sort((a, b) => b - a).forEach((key) => {
        ordered.push(array[key]);
    })
    res.json(ordered).status(200);
}

module.exports = {getSimilarity, sortResults};
