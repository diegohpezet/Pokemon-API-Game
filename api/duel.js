export default function handler(request,response){
    let attackingType = request.query.type1
    let defendingType = request.query.type2

    /* Evaluate types */

    let result = {
        isCorrect: false,
        expectedType: false
    }

    if (attackingType === "fire") {
        result.isCorrect = true
    } 
    
    if(!result.isCorrect){
        result.expectedType = attackingType
    }

    console.log(result)

    /* Generate response */

    response.status(200).json({
        result
    });
}