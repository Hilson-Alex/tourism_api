/**
 * Class to pattern the Cases for the case database.
 * @type {CaseData}
 */
module.exports = class CaseData {

    /**
     * Construct a case
     * @param estacao season of the year
     * @param custo cost of the travel
     * @param num_pessoas people count
     * @param num_criancas child count
     * @param tipo type of the case (values.placeType)
     * @param distancia distance of the travel
     * @param grupo the age group of people (values.group)
     * @param local destination name
     * @param descricao destination description
     * @param link destination link in google maps
     * @param lat destination latitude
     * @param lon destination longitude
     */
    constructor(estacao, custo, num_pessoas, num_criancas, tipo, distancia, grupo, local, descricao, link, lat, lon) {
        this.estacao = estacao;
        this.custo = custo;
        this.num_pessoas = num_pessoas;
        this.num_criancas = num_criancas;
        this.tipo = tipo;
        this.distancia = distancia;
        this.grupo = grupo;
        this.solucao = {
            lugar: local,
            descricao: descricao,
            link: link,
            lat: lat,
            lon: lon,
        }
    }

    /**
     * set a solution (destination {name, description, link, lat, lon}
     * @param solucao the solution to a case
     */
    setSolution(solucao){
        this.solucao = solucao;
    }
};