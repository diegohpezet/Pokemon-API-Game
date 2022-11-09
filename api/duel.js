import fetch from "node-fetch"

export default async function handler(request,response){
    try {
        let attackingType = request.query.type1
        let defendingType = request.query.type2
    
        let url = `https://pokeapi.co/api/v2/type/${attackingType}`
    
        const pokeApiRes = await fetch(url)
        console.log(pokeApiRes)
           
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
            result
        });
      } catch (err) {
         console.error(err)
      }
}
