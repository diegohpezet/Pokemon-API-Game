export default function handler(request,response){
    console.log("Si funciono :D")
    response.status(200).json({
        /*
        body: request.body,
        query: request.query,
        cookies: request.cookies,
        */
        result: true
    });
}