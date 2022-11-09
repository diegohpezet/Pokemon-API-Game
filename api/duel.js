import fetch from "node-fetch"

export default async function handler(request,response){
    try {
        let attackingType = request.query.type1
        let defendingType = request.query.type2
    
        /* Fetch data from chosen type */
        let url = `https://pokeapi.co/api/v2/type/${attackingType}`
    
        let pokeApiRes = await fetch(url)
        let data = await pokeApiRes.json()

        let hits_hard = data.damage_relations.double_damage_to

        /* Evaluate types */
    
        let result = {
            isCorrect: false,
            expectedType: false
        }
    
        if (attackingType === "fire") {
            result.isCorrect = true
        } 
        
        if(!result.isCorrect){
            result.expectedType = defendingType
        }
    
        console.log(result)
    
        /* Generate response */
    
        response.status(200).json({
            result, hits_hard
        });
      } catch (err) {
         console.error(err)
      }
}

