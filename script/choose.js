const container_1 = document.getElementById("type_1");
const container_2 = document.getElementById("type_2");
const img_1 = document.getElementById("img_1")
const img_2 = document.getElementById("img_2")
const vs = document.getElementById("vs")

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

/* Chooses two different types from list types list*/
function chooseTypes() {
    let type_1 = types[Math.floor(Math.random()*types.length)];
    let type_2 = types[Math.floor(Math.random()*types.length)];
    while (type_1===type_2) {
       type_2 = types[Math.floor(Math.random()*types.length)];
    }
    
    //Sets colors of containers
    container_1.style.backgroundColor = "var(--"+type_1+")"
    container_2.style.backgroundColor = "var(--"+type_2+")"
    
    //Sets images of containers
    img_1.src=`./img/types/${type_1}.png`
    img_2.src=`./img/types/${type_2}.png`

//Generates an onclick event
    container_1.setAttribute("onclick",`battle('${type_1}','${type_2}','${type_1}')`)
    container_2.setAttribute("onclick",`battle('${type_2}','${type_1}','${type_2}')`)
    vs.setAttribute("onclick",`battle('${type_2}','${type_1}','x1')`)
}

chooseTypes()
