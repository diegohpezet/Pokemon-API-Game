const fetch = require("node-fetch")

fetch("https://pokeapi.co/api/v2/pokemon-species/2")
.then(results => results.json())
.then(content => console.log(content));
