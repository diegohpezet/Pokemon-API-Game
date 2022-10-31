const container_1 = document.getElementById("type_1");
const container_2 = document.getElementById("type_2");
const validation = document.getElementById("check");
const points = document.getElementById("points");
let winner = 0,
  score = 0;

async function game() {
  let randType = Math.floor(Math.random() * 16) + 1;
  let url = "https://pokeapi.co/api/v2/type/" + randType;

  let response = await fetch(url);
  let type_1 = await response.json();
  container_1.innerHTML =
    type_1.name.charAt(0).toUpperCase() + type_1.name.slice(1);
  container_1.style = "background-color: var(--"+type_1.name+")"

  //Evalua las fortalezas del tipo 1
  let super_effective_against = type_1.damage_relations.double_damage_to; //Muestra las fortalezas del tipo 1
  hits_hard = []; // Tiene que vaciarse al cambiar el tipo
  super_effective_against.forEach((element) => {
    hits_hard.push(element.name); // Crea una lista con las fortalezas
  });
  console.log(hits_hard);

  //Evalua las debilidades del tipo 1
  let super_effective_from = type_1.damage_relations.double_damage_from;
  gets_destroyed = [];
  super_effective_from.forEach((element) => {
    gets_destroyed.push(element.name);
  });
  console.log(gets_destroyed);

  //Crea un array con tipos con los que se relaciona
  versus_Options = hits_hard.concat(gets_destroyed);

  //Decide por uno de esos tipos
  oponent_Type =
    versus_Options[Math.floor(Math.random() * versus_Options.length)];

  fetch("https://pokeapi.co/api/v2/type/" + oponent_Type)
    .then((response) => response.json())
    .then((type_2) => {
      container_2.innerHTML =
        type_2.name.charAt(0).toUpperCase() + type_2.name.slice(1);
      container_2.style = "background-color: var(--"+type_2.name+")"

      //Evalúa la compatibilidad entre tipos
      if (hits_hard.includes(type_2.name)) {
        winner = 1;
      } else if (gets_destroyed.includes(type_2.name)) {
        winner = 2;
      } else {
        validation.innerHTML = "x1";
      }
    });
}
container_1.onclick = function () {
  if (winner == 1) {
    validation.innerHTML = "Win";
    score++;
    points.innerHTML = "Points: " + score;
    game();
  } else {
    validation.innerHTML = "Lose";
    container_1.classList.add("disabled");
  }
};
container_2.onclick = function () {
  if (winner == 2) {
    validation.innerHTML = "Win";
    score++;
    points.innerHTML = "Points: " + score;
    game();
  } else {
    validation.innerHTML = "Lose";
    container_2.classList.add("disabled");
  }
};

game();
