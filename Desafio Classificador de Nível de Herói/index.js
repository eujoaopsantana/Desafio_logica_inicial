// PASSO 1: Criar uma lista de heróis para classificar
let herois = [
    { nome: "Arthus", xp: 7500 },
    { nome: "Lúcia", xp: 1500 },
    { nome: "Thor", xp: 9500 },
    { nome: "Diana", xp: 500 },
    { nome: "Zeus", xp: 12000 }
];

// PASSO 2: Usar um LAÇO DE REPETIÇÃO para processar cada herói
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";
    
    // PASSO 3: Estrutura de decisão para classificar o nível
    if (xp < 1000) {
        nivel = "Ferro";
    } 
    else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } 
    else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } 
    else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } 
    else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } 
    else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } 
    else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } 
    else {
        nivel = "Radiante";
    }
    
    // PASSO 4: Exibir o resultado de cada herói
    console.log("O Herói de nome " + nome + " está no nível de " + nivel);
}