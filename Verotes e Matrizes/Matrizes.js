// Da mesma forma que funciona os vetores, as matrizes começam da linha 0, semelhante aos vetores.

let pokemon = [" Pikachu", "Charmander", "Bulbassaur"]
let timePokemon = [
    ["Pikachu", "M", "1"],
    ["Charmander", "F", "3"]
]

console.log("O pokemon " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + 
    " e está no nível " + timePokemon [1][2]
)

//Ao colocar para utilizar algum metodo, as propriedas ficam coma cor azul, uma de exemplo é a propriedade "length"
console.log(timePokemon.length)