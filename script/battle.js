function battle(type1, type2) {
    fetch(`https://pokemon-api-game.vercel.app/api/duel?type1=${type1}&type2=${type2}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        if (data.result) {
            console.log("True")
        } else {
            console.log("False")
        }
    })
}
