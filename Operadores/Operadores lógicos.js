// AND ( && )
let idade = 18
let vistoVerificado = false
let resultados =  (idade >= 18) && (vistoVerificado === true) 
console.log(resultados)

// AND ( && ) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let item = "estrela"
let resultado = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado)

// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempoDoDia = "chuva"
let itens = "guarda chuva"
let podeSair = (tempo !== "chuva") || (itens === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)

// NOT  ( !) - nega uma afirmação
let tempoDiario = "chuva"
let resultadoAtual = tempo === "chuva"
console.log(!!resultado)

// NOT  ( !) - nega uma afirmação
let tempo = "chuva"
let horario = 8
let resultadoReal = !((tempo !== "chuva") && (horario > 6))
console.log(resultado)