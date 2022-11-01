export default function handler(request, response) {
    response.status(200).json({
      id: request.id,
      damage_relations: request.damage_relations,
    });
  }
  