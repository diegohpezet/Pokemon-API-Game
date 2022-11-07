export default function handler(request,response){
    const attackingType = request.query.type1
    const defendingType = request.query.type2

    /* Evaluar tipos */

    let result = {
        isCorrect: false
    }

    if (attackingType = "fire") {
        result.isCorrect = true
    } 
    
    if(!result.isCorrect)
        result.expectedType = attackingType

    response.status(200).json({
        result
    });
}
