function battle(chosenOption) {
    fetch(`https://pokeapi.co/api/v2/type/${chosenOption}`)
    .then((response) => response.json())
    .then((data) => {
        if (data.damage_relations.double_damage_to.includes('grass')) {
            console.log(data.damage_relations.double_damage_to)
            console.log("Win")
        } else {
            console.log("Lose")
        }
    })
}