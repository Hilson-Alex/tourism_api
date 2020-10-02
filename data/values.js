const seasons = {
    summer: "VERAO",
    fall: "OUTONO",
    winter: "INVERNO",
    spring: "PRIMAVERA"
}
Object.freeze(seasons);

const cost = {
    high: "ALTO",
    medium: "MEDIO",
    low: "BAIXO"
}
Object.freeze(cost);

const placeType = {
    beach: "PRAIA",
    waterfall: "CACHOEIRA",
    park: "PARQUE FLORESTAL",
    amusement_park: "PARQUE DE DIVERSOES",
    aquatic_park: "PARQUE AQUATICO",
    trail: "TRILHA",
    museum: "MUSEU",
    cult_center: "CENTRO CULTURAL",
    zoo: "ZOO",
    aquarium: "AQUARIO"
}
Object.freeze(placeType);

const group = {
    family: "FAMILIA",
    teen: "ADOLESCENTES",
    young_adult: "JOVENS",
    adult: "ADULTOS",
    senior: "IDOSOS"
}
Object.freeze(group);

module.exports = {seasons, cost, placeType, group};