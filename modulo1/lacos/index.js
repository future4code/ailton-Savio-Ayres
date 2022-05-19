// Interpretação de código

// Questão 1

// A)
// O valor será 10

// Questão 2

// 19, 21, 23, 25, 27, 30

// B)

// Sim, é suficiente.

// Questão 3
// A)*
// **
// ***
// ****



// Exercício de escrita de código

// Questão 1

// let quantidadeDeBichos = Number(prompt("Quantos bichos, você tem?"))
// let listaBichos = []
// if (quantidadeDeBichos === 0) {
//     console.log("Que pena, você não pode adotar um pet")
// }
// else {
// let bichos = 0
// while (bichos < quantidadeDeBichos){
// listaBichos.push(prompt("Qual o nome do pet?"))
// bichos += 1
// }

// }
// console.log(listaBichos)

// Questão 2

// const arrayOriginal = [21, 7, 3, 5, 47, 23, 13, 29, 33]
// for (let valor of arrayOriginal){

// }
// B)
// for(let valor of arrayOriginal){
//     console.log(valor/10)
// }

// C)
// const numPar = () => {
// let arrPar = []
// for(let i = 0; i < arrayOriginal.length; i++){

// if(arrayOriginal[i] %2 === 0){

// }
// }

// }
// numPar()

// TESTE!!!!!!!!!!!!!!!!
// const verificarImpar = (numero, imprime) => {
// if (numero % 2 !== 0) {
//     imprime(numero)
// }

// }
// verificarImpar(7, function (numero){
// console.log(`Esse numero ${numero} é ímpar`)

// })


// const pokemons = [
//     {nome: "bulbasaur", tipo: "grama"},
//     {nome: "bellsprout", tipo: "grama"},
//     {nome: "charmander", tipo: "fogo"},
//     {nome: "vulpix", tipo: "fogo"},
//     {nome: "squirtle", tipo: "agua"},
//     {nome: "psyduck", tipo: "agua"},
//  ]
 
//  const retornaPokemon = pokemons.map(function(pokemon, index, array) {
// return pokemon.nome

//  })
//  console.log(retornaPokemon)

// const arrayDeNumeros = [10, 11, 12, 13, 14, 15,]
// const retornaStrings = arrayDeNumeros.map((item, index) => {
// return `o item ${index} tem o valor ${item}`

// })
// console.log(retornaStrings)

// const numeros = [1, 2, 5, 8, 10, 11, 13, 15, 20]

// const retornaMaioresDe10 = numeros.filter((numero) => {
// return numero> 10

// })
// console.log(retornaMaioresDe10)

// const numeros = [1, 2, 5, 8, 10, 11, 13, 15, 20]

// const retornaNumerosPares = numeros.filter((numero) => {
// return numero % 2 === 0


// })
// console.log(retornaNumerosPares)

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const produtorDeLimpeza = produtos.filter((produto) => {
// return produto.categoria ==="Limpeza"

// //  }).map((produto) => {
// //      return produto.nome
//  })

//  console.log(produtorDeLimpeza)

