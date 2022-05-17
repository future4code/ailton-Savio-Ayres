// Exercício de interpretação de código

// Questão 1

// A)
// O código quer verificar se o número inserido pelo usuário será 
// será igual a zero, considerando que terá o resto de 2. Vai ser verificado se é verdadeiro ou 
// falso

// B)
// Números pares

// C)
// Números ìmpares

// Questão 2

// A)

// O código verifica o preços das frutas de um supermercado. Ele pode ser consultado

// B)

// "O preço da fruta maça, é de 2.25"

// C)

// Ele vai automaticamente para o default, ou seja, o valor será 5

// Questão 3

// A)

// O número pedido será maior que zero, daí é dado o resultado

// B)

// Se o usuário colocar 10, a mensagem será:
//  "Esse número passou no teste", com -10 não terá resultado, e deverá levar em consideração que a variável mensagem não foi definida

// C)

// Só haverá erro no console de o usuário colocar algum número negativo


// Exercício de escrita de código

// Questão 1

// const idadeMinima = 18

// let perguntaUsuario = Number(prompt('Qual a sua idade?'))

// const comparaNumeros = (idadeMin, pergusu) => {
// if (idadeMin <= pergusu) {
//     console.log('Você pode dirigir')
// }else if (idadeMin > pergusu) {
//     console.log('Você não pode dirigir') 

//     } else {
// console.log('erro 404 ueheueh')
//     }


// }



// comparaNumeros(idadeMinima, perguntaUsuario)

// Questão 2


// const pergunta = prompt('Digite, M, V ou N').toUpperCase()

// const resultadoTurno = (turno) => {
// if (turno === 'M' ) {
//     console.log('Bom dia!!')
// } else if (turno === 'V') {
//     console.log('Boa tarde!!')
// } else if  (turno === 'N') {
//     console.log('Boa noite!!')
// }

// }
// resultadoTurno(pergunta)

// Questão 3

// const pergunta = prompt('Digite, M, V ou N').toUpperCase()

// switch(pergunta.toUpperCase()) {
// case 'M':
//     console.log('Bom dia') 
//     break
//     case 'V':
//     console.log('Boa tarde')
//     break
//     case 'N':
//         console.log('Boa noite')
//         break
//         default:
//             console.log('Opa, houve um erro')

// }

// Questão 4

const pergunta1 = prompt('Qual o gênero de Filme que iremos assitir?')
const pergunta2 = prompt('Qual o valor do ingresso?')

const decisaoFilme = (genero, valor) => {
if (genero === "Fantasia" && valor < 15) {
    console.log('Bom filme!')
} else if (genero === "Fantasia" && valor > 15) {
console.Log("Escolha outro filme =(")
}

}
decisaoFilme(pergunta1, pergunta2)