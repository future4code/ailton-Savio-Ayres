/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
//  */
console.log('Boas vindas ao jogo de Blackjack!')

let comecarJogo = confirm('Quer iniciar uma nova rodada?')
let numComputador = comprarCarta()
let numComputador2 =  comprarCarta()
let numUsuario = comprarCarta()
let numUsuario2 =  comprarCarta()

const jogo = () => {
if(comecarJogo == true)
for(let i = 0; i < 2 ; i++)
numComputador = comprarCarta()
numUsuario = comprarCarta()


}
let somaPc = numComputador.valor + numComputador2.valor
let somaUsuario = numUsuario.valor + numUsuario2.valor
console.log(`as cartas do computador são: ${numComputador.texto}, e ${numComputador2.texto}, e a pontuação é ${somaPc}`)
console.log(`as cartas do usuário são: ${numUsuario.texto}, e ${numUsuario2.texto}, e a pontuação é ${somaUsuario}`)
if (somaPc > somaUsuario) {
   console.log('O computador venceu!!!')
} else if (somaUsuario > somaPc) {
   console.log('O usuário venceu!!!')
}else if (somaUsuario === somaPc) {
   console.log('EMPATE')
} else{ 
   console.log('O jogo acabou!!!')
}

jogo()
























