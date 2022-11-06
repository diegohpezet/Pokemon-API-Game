request = `https://pokeapi.co/api/v2/type/1/`
export default function handler(request, response) {
    response.status(200).json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
    });
  }
  
