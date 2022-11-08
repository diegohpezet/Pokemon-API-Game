const resultContainer = document.getElementById("result")
const pointCounter = document.getElementById("points")
let points = 0

function battle(type1, type2) {
    fetch(`https://pokemon-api-game.vercel.app/api/duel?type1=${type1}&type2=${type2}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.result.isCorrect)
        if (data.result.isCorrect) {
            resultContainer.innerText = "Win"
            points++
            resultContainer.innerText = "Points " + points
        } else {
            resultContainer.innerText = "Lose"
        }
    })
}
