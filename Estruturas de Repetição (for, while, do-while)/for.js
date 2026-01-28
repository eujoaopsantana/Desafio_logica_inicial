for (let i = 0; i < 4; i++){
    console.log(i)
    console.log("aumentador o contador")
}

// Cuidados com for, exemplo abaixo:
let pontosDeVida = 0
for(let i = 0; i < 10; i++){
    pontosDeVida += 1
    console.log("Tomou poção mágica " + i)
}

console.log(pontosDeVida + " Pontos de vidas totais")