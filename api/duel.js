import fetch from "node-fetch";

export default async function handler(request, response) {
  try {
    let attackingType = request.query.type1;
    let defendingType = request.query.type2;

    /* Fetch data from chosen type */
    let url = `https://pokeapi.co/api/v2/type/${attackingType}`;

    let pokeApiRes = await fetch(url);
    let data = await pokeApiRes.json();

    /* Evaluate strengths */

    let super_effective_against = data.damage_relations.double_damage_to;
    let hits_hard = [];

    super_effective_against.forEach((strength) => {
      hits_hard.push(strength.name);
    });

    /*
    // Evaluate Weaknesses //

    let super_effective_from = data.damage_relations.double_damage_from;
    let gets_destroyed = [];

    super_effective_from.forEach((weakness) => {
      gets_destroyed.push(weakness.name);
    });
    
    */
    /* Check answer */

    if (hits_hard.includes(defendingType)) {
      result.isCorrect = true;
    }

    if (!result.isCorrect) {
      result.expectedType = defendingType;
    }

    console.log(result);

    /* Generate response */

    response.status(200).json({
      result,
      hits_hard,
      gets_destroyed,
    });
  } catch (err) {
    console.error(err);
  }
}
