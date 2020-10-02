 class CaseData {

    constructor(estacao, custo, num_pessoas, num_criancas, tipo, distancia, grupo, local, descricao, link) {
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
        }
    }

    setSolution(solucao){
        this.solucao = solucao;
    }
}
module.exports = CaseData;