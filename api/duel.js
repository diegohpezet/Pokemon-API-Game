import fetch from "node-fetch";

export default async function handler(request, response) {
  try {
    let attackingType = request.query.type1;
    let defendingType = request.query.type2;

    /* Fetch data from chosen type */
    let url = `https://pokeapi.co/api/v2/type/${attackingType}`;

    let pokeApiRes = await fetch(url);
    let data = await pokeApiRes.json();

    /* Evaluates strengths */

    let super_effective_against = data.damage_relations.double_damage_to;
    let hits_hard = [];

    super_effective_against.forEach((element) => {
      hits_hard.push(element.name);
    });

    /* Evaluate types */

    let result = {
      isCorrect: false,
      expectedType: false,
    };

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
    });
  } catch (err) {
    console.error(err);
  }
}
