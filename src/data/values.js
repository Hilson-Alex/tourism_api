/**
 * Enum of seasons
 * @type {{spring: string, fall: string, winter: string, summer: string}}
 */
const seasons = {
    summer: "VERAO",
    fall:   "OUTONO",
    winter: "INVERNO",
    spring: "PRIMAVERA"
};

/**
 * Enum of cost
 * @type {{high: string, low: string, medium: string}}
 */
const cost = {
    high:   "ALTO",
    medium: "MEDIO",
    low:    "BAIXO"
};

/**
 * Enum of placeTypes
 * @type {{aquatic_park: string, trail: string, cult_center: string, amusement_park: string, museum: string, waterfall: string, beach: string, zoo: string, park: string, aquarium: string}}
 */
const placeType = {
    beach:          "PRAIA",
    waterfall:      "CACHOEIRA",
    park:           "PARQUE FLORESTAL",
    amusement_park: "PARQUE DE DIVERSOES",
    aquatic_park:   "PARQUE AQUATICO",
    trail:          "TRILHA",
    museum:         "MUSEU",
    cult_center:    "CENTRO CULTURAL",
    zoo:            "ZOO",
    aquarium:       "AQUARIO"
};

/**
 * Enum of groups
 * @type {{senior: string, family: string, teen: string, adult: string, young_adult: string}}
 */
const group = {
    family:      "FAMILIA",
    teen:        "ADOLESCENTES",
    young_adult: "JOVENS",
    adult:       "ADULTOS",
    senior:      "IDOSOS"
};

Object.freeze([seasons, cost, placeType, group]);

module.exports = {seasons, cost, placeType, group};