const values = require("../data/values");

/**
 * Matrix of local similarity for placeType
 */
const placeTypeSimilarity = {
    [values.placeType.beach]:           {
        [values.placeType.beach]: 1.0,
        [values.placeType.waterfall]: 0.7,
        [values.placeType.park]: 0.2,
        [values.placeType.amusement_park]: 0.2,
        [values.placeType.aquatic_park]: 0.7,
        [values.placeType.trail]: 0.2,
        [values.placeType.museum]: 0.0,
        [values.placeType.cult_center]: 0.0,
        [values.placeType.zoo]: 0.0,
        [values.placeType.aquarium]: 0.1,
    },
    [values.placeType.waterfall]:       {
        [values.placeType.beach]: 0.7,
        [values.placeType.waterfall]: 1.0,
        [values.placeType.park]: 0.3,
        [values.placeType.amusement_park]: 0.2,
        [values.placeType.aquatic_park]: 0.4,
        [values.placeType.trail]: 0.2,
        [values.placeType.museum]: 0.0,
        [values.placeType.cult_center]: 0.0,
        [values.placeType.zoo]: 0.0,
        [values.placeType.aquarium]: 0.1,
    },
    [values.placeType.park]:            {
        [values.placeType.beach]: 0.2,
        [values.placeType.waterfall]: 0.3,
        [values.placeType.park]: 1.0,
        [values.placeType.amusement_park]: 0.2,
        [values.placeType.aquatic_park]: 0.0,
        [values.placeType.trail]: 0.3,
        [values.placeType.museum]: 0.0,
        [values.placeType.cult_center]: 0.0,
        [values.placeType.zoo]: 0.3,
        [values.placeType.aquarium]: 0.0,
    },
    [values.placeType.amusement_park]:  {
        [values.placeType.beach]: 0.1,
        [values.placeType.waterfall]: 0.2,
        [values.placeType.park]: 0.3,
        [values.placeType.amusement_park]: 1.0,
        [values.placeType.aquatic_park]: 0.2,
        [values.placeType.trail]: 0.0,
        [values.placeType.museum]: 0.0,
        [values.placeType.cult_center]: 0.0,
        [values.placeType.zoo]: 0.4,
        [values.placeType.aquarium]: 0.4,
    },
    [values.placeType.aquatic_park]:    {
        [values.placeType.beach]: 0.7,
        [values.placeType.waterfall]: 0.6,
        [values.placeType.park]: 0.0,
        [values.placeType.amusement_park]: 0.2,
        [values.placeType.aquatic_park]: 1.0,
        [values.placeType.trail]: 0.0,
        [values.placeType.museum]: 0.0,
        [values.placeType.cult_center]: 0.0,
        [values.placeType.zoo]: 0.0,
        [values.placeType.aquarium]: 0.2,
    },
    [values.placeType.trail]:           {
        [values.placeType.beach]: 0.4,
        [values.placeType.waterfall]: 0.4,
        [values.placeType.park]: 0.4,
        [values.placeType.amusement_park]: 0.0,
        [values.placeType.aquatic_park]: 0.0,
        [values.placeType.trail]: 1,
        [values.placeType.museum]: 0.0,
        [values.placeType.cult_center]: 0.0,
        [values.placeType.zoo]: 0.0,
        [values.placeType.aquarium]: 0.0,
    },
    [values.placeType.museum]:          {
        [values.placeType.beach]: 0.0,
        [values.placeType.waterfall]: 0.0,
        [values.placeType.park]: 0.0,
        [values.placeType.amusement_park]: 0.0,
        [values.placeType.aquatic_park]: 0.0,
        [values.placeType.trail]: 0.0,
        [values.placeType.museum]: 1.0,
        [values.placeType.cult_center]: 0.8,
        [values.placeType.zoo]: 0.2,
        [values.placeType.aquarium]: 0.2,
    },
    [values.placeType.cult_center]:     {
        [values.placeType.beach]: 0.0,
        [values.placeType.waterfall]: 0.0,
        [values.placeType.park]: 0.0,
        [values.placeType.amusement_park]: 0.0,
        [values.placeType.aquatic_park]: 0.0,
        [values.placeType.trail]: 0.0,
        [values.placeType.museum]: 0.8,
        [values.placeType.cult_center]: 1.0,
        [values.placeType.zoo]: 0.0,
        [values.placeType.aquarium]: 0.0,
    },
    [values.placeType.zoo]:             {
        [values.placeType.beach]: 0.0,
        [values.placeType.waterfall]: 0.0,
        [values.placeType.park]: 0.4,
        [values.placeType.amusement_park]: 0.3,
        [values.placeType.aquatic_park]: 0.0,
        [values.placeType.trail]: 0.0,
        [values.placeType.museum]: 0.0,
        [values.placeType.cult_center]: 0.0,
        [values.placeType.zoo]: 0.1,
        [values.placeType.aquarium]: 0.7,
    },
    [values.placeType.aquarium]:        {
        [values.placeType.beach]: 0.0,
        [values.placeType.waterfall]: 0.0,
        [values.placeType.park]: 0.2,
        [values.placeType.amusement_park]: 0.3,
        [values.placeType.aquatic_park]: 0.0,
        [values.placeType.trail]: 0.3,
        [values.placeType.museum]: 0.0,
        [values.placeType.cult_center]: 0.0,
        [values.placeType.zoo]: 0.7,
        [values.placeType.aquarium]: 1.0,
    },
};

/**
 * Matrix of local similarity for season
 */
const seasonSimilarity = {
    [values.seasons.summer]:    {
        [values.seasons.summer]: 1.0,
        [values.seasons.spring]: 0.8,
        [values.seasons.winter]: 0.1,
        [values.seasons.fall]:   0.4,
    },
    [values.seasons.spring]:    {
        [values.seasons.summer]: 0.8,
        [values.seasons.spring]: 1.0,
        [values.seasons.winter]: 0.1,
        [values.seasons.fall]:   0.4,
    },
    [values.seasons.winter]:    {
        [values.seasons.summer]: 0.1,
        [values.seasons.spring]: 0.1,
        [values.seasons.winter]: 1.0,
        [values.seasons.fall]:   0.8,
    },
    [values.seasons.fall]:      {
        [values.seasons.summer]: 0.4,
        [values.seasons.spring]: 0.4,
        [values.seasons.winter]: 0.8,
        [values.seasons.fall]:   1.0,
    },
};

/**
 * Matrix of local similarity for group
 */
const groupSimilarity = {
    [values.group.family]:      {
        [values.group.family]:      1.0,
        [values.group.teen]:        0.3,
        [values.group.young_adult]: 0.2,
        [values.group.adult]:       0.4,
        [values.group.senior]:      0.8,
    },
    [values.group.teen]:        {
        [values.group.family]:      0.3,
        [values.group.teen]:        1.0,
        [values.group.young_adult]: 0.8,
        [values.group.adult]:       0.6,
        [values.group.senior]:      0.2,
    },
    [values.group.young_adult]: {
        [values.group.family]:      0.3,
        [values.group.teen]:        0.4,
        [values.group.young_adult]: 1.0,
        [values.group.adult]:       0.6,
        [values.group.senior]:      0.3,
    },
    [values.group.adult]:       {
        [values.group.family]:      0.6,
        [values.group.teen]:        0.4,
        [values.group.young_adult]: 0.6,
        [values.group.adult]:       1.0,
        [values.group.senior]:      0.4,
    },
    [values.group.senior]:      {
        [values.group.family]:      0.8,
        [values.group.teen]:        0.2,
        [values.group.young_adult]: 0.3,
        [values.group.adult]:       0.6,
        [values.group.senior]:      1.0,
    },
}

/**
 * Map for cost counterweight
 */
const costSimilarity = {
    [values.cost.low]:    1.0,
    [values.cost.medium]: 0.5,
    [values.cost.high]:   0.0,
}

Object.freeze([placeTypeSimilarity, seasonSimilarity, groupSimilarity, costSimilarity]);

module.exports = {placeTypeSimilarity, seasonSimilarity, groupSimilarity, costSimilarity};
