let randType = Math.floor(Math.random() * 17);
let url = 'https://pokeapi.co/api/v2/type/'+randType;

const container_1 = document.getElementById("type_1")
const container_2 = document.getElementById("type_2")
const validation = document.getElementById("check")

fetch(url)
  .then((response) => response.json())
  .then((type_1) => {
    container_1.innerHTML = (type_1).name;
    container_1.classList.add(type_1.name)

    //Evalua las fortalezas del tipo 1
    let super_effective_against = type_1.damage_relations.double_damage_to;  //Muestra las fortalezas del tipo 1
    hits_hard = []; // Tiene que vaciarse al cambiar el tipo
    super_effective_against.forEach(element => {
        hits_hard.push(element.name)    // Crea una lista con las fortalezas
    })
    console.log(hits_hard)

    //Evalua las debilidades del tipo 1
    let super_effective_from = type_1.damage_relations.double_damage_from;
    gets_destroyed = []
    super_effective_from.forEach(element => {
        gets_destroyed.push(element.name)
    })
    console.log(gets_destroyed)

    //Crea un array con tipos con los que se relaciona
    versus_Options = hits_hard.concat(gets_destroyed) 
    
    //Decide por uno de esos tipos
    oponent_Type = versus_Options[Math.floor((Math.random()*versus_Options.length))]
    
    fetch('https://pokeapi.co/api/v2/type/'+oponent_Type)
    .then((response) => response.json())
    .then((type_2) => {
        container_2.innerHTML = (type_2.name);
        container_2.classList.add(type_2.name)
        
        //Evalúa la compatibilidad entre tipos
        if (hits_hard.includes(type_2.name)) {
            validation.innerHTML = ">"
        } else if (gets_destroyed.includes(type_2.name)){
            validation.innerHTML = "<"
        } else {
            validation.innerHTML = "x1"
    }
  });
});