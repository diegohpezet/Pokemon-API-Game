export default function handler(request,response){
    const attackingType = request.query.type1
    const defendingType = request.query.type2

    /* Evaluar tipos */

    let result = {
        isCorrect: false,
        expectedType: false
    }

    if (attackingType = "fire") {
        result.isCorrect = true
    } 
    
    if(!result.isCorrect){
        result.expectedType = attackingType
    }

    console.log(result)

    response.status(200).json({
        result
    });
}
