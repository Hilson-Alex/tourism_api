const CaseData = require("./data/CaseData");
const seasons = require("./data/values").seasons;
const cost = require("./data/values").cost;
const type = require("./data/values").placeType;
const group = require("./data/values").group
const MongoClient = require('mongodb').MongoClient;
const server_port = process.env.YOUR_PORT || process.env.PORT || 80;
const server_host = process.env.YOUR_HOST || '0.0.0.0';
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

// async function run() {
//     try {
//         await client.connect();
//         const database = client.db("tourism");
//         const collection = database.collection("cases");
//         const query = {};
//         const add =
//             new CaseData(seasons.summer, cost.high, 2, 0, type.waterfall, 100.0, group.young_adult,
//                 "Cachoeira do Rio Vermelho",
//                 `A trilha para chegar nessa cachoeira é uma subida em mata fechada. Acaba exigindo um pouco de preparo físico de quem quiser visitar o local. Chegando na cachoeira é possível encontrar algumas lanchonetes e uma área linda para nadar.`,
//                 "https://goo.gl/maps/aecH2MKFUVASB7hQ8");
//         //const pq = await collection.findOne(query);
//         //cases[0].setSolution(pq.solucao);
//         await collection.insertOne(add);
//         const result = await collection.find(query).count();
//         console.log(result)
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);

console.log("PORREUDA")
