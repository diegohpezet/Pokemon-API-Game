function battle(type1, type2) {
    fetch(`https://pokemon-api-game.vercel.app/api/duel?type1=${type1}&type2=${type2}`)
    .then((response) => response.json())
    .then((data) => {
        if (data.response) {
            console.log("True")
        } else {
            console.log("False")
        }
    })
}