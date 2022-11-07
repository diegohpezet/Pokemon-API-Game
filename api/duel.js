export default function handler(request,response){
    console.log("Sending data...")
    if (type1 = "fire") {
        response.status(200).json({
            /*
            body: request.body,
            query: request.query,
            cookies: request.cookies,
            */
            result: true
        });
    } else {
        response.status(200).json({
            /*
            body: request.body,
            query: request.query,
            cookies: request.cookies,
            */
            result: false
        });
    }
}
