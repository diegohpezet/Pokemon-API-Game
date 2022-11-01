const container_1 = document.getElementById("type_1");
const container_2 = document.getElementById("type_2");

types = [
    "normal",
    "fire",
    "water",
    "grass",
    "flying",
    "fighting",
    "poison",
    "electric",
    "ground",
    "rock",
    "psychic",
    "ice",
    "bug",
    "ghost",
    "steel",
    "dragon",
    "dark",
    "fairy"
]

export function chooseTypes() {
    let type_1 = types[Math.floor(Math.random()*types.length)];
    let type_2 = types[Math.floor(Math.random()*types.length)];

    return [type_1, type_2]
}

