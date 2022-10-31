const container_1 = document.getElementById("type_1");
const container_2 = document.getElementById("type_2");
const validation = document.getElementById("check");
const points = document.getElementById("points");
let winner = 0,
  score = 0;
 
game = () => {
    async function fetchTypes() {
        let randType = Math.floor(Math.random() * 17);
        let url = "https://pokeapi.co/api/v2/type/" + randType;
        let randType_2 = Math.floor(Math.random() * 17);
        let url_2 = "https://pokeapi.co/api/v2/type/" + randType_2;
        let [type1Response, type2Response] = await Promise.all([
            fetch(url),
            fetch(url_2)
        ]);

        let type_1 = await type1Response.json();
        let type_2 = await type2Response.json()

        return [type_1, type_2]
    }

    fetchTypes().then(([type_1,type_2]) => {
        // Display of type #1
        console.log(type_1.name)
        container_1.innerHTML = type_1.name.charAt(0).toUpperCase() + type_1.name.slice(1);
        container_1.classList.add(type_1.name);
        
        // Display of type #2
        console.log(type_2.name)
        container_2.innerHTML = type_2.name.charAt(0).toUpperCase() + type_2.name.slice(1);
        container_2.classList.add(type_2.name);

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

        //Evalúa la compatibilidad entre tipos
        if (hits_hard.includes(type_2.name)) {
            winner = 1;
        } else if (gets_destroyed.includes(type_2.name)) {
            winner = 2;
        } else {
            validation.innerHTML = "x1";
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
    }).catch(error => {
        console.log("Error")
    })
}
game()