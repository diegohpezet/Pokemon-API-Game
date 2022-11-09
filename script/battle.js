const resultContainer = document.getElementById("result")
const pointCounter = document.getElementById("points")
let points = 0

function battle(type1, type2, option) {
    fetch(`https://pokemon-api-game.vercel.app/api/duel?type1=${type1}&type2=${type2}&option=${option}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.result.isCorrect)
        if (data.result.isCorrect) {
            resultContainer.innerText = "Win"
            points++
            pointCounter.innerText = "Points " + points
            chooseTypes()
        } else {
            resultContainer.innerText = "Lose"
            chooseTypes()
        }
    })
}
