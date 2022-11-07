const container_1 = document.getElementById("type_1");
const container_2 = document.getElementById("type_2");
const img_1 = document.getElementById("img_1")
const img_2 = document.getElementById("img_2")

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

async function chooseTypes() {
    let type_1 = types[Math.floor(Math.random()*types.length)];
    let type_2 = types[Math.floor(Math.random()*types.length)];

    return [type_1, type_2]
}

chooseTypes().then(([type_1, type_2]) => {
    //Sets colors of containers
    container_1.style.backgroundColor = "var(--"+type_1+")"
    container_2.style.backgroundColor = "var(--"+type_2+")"
    //Sets images of containers
    img_1.src=`img/types/${type_1}.png`
    img_2.src=`img/types/${type_2}.png`
})

chooseTypes()