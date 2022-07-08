// Exercício de interpretação de texto

// Questão 1

// A)

// Será impresso as 3 Arrays com cada informação do objeto
// Nome e apelido.

// Questão 2

// A) Será retornado todos os nomes do objeto.

// Questão 3

// A)
// Vai aparecer todos os objetos, menos a "Letícia Chijo"


// Exercício de escrita de código

// Questão 1

// // A)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
// // const arrayNomes = pets.map((pet) => {
// return pet.nome

// })
// console.log(arrayNomes)

// B)
// const arraySalsicha = pets.filter((pet) => {
// return pet.raca === "Salsicha"
// })
// console.log(arraySalsicha)


// C)

// const imprimirMensagem = pets.filter((pet) => {


//     return pet.raca === "Poodle"

    
    







// }). map((pet) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
// })
// console.log(imprimirMensagem)

// Questão 2

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
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  A)

// const arrayNomes = produtos.map((produ) => {
// return produ.nome

// })
// console.log(arrayNomes)

// B)

// let produtosCom5Desconto = produtos.map((item) => {
// console.log(item.preco)
//     return {nome: item.nome, preco: item.preco * 0.05}

// })

// console.log(produtosCom5Desconto)

// C)

// const bebida = produtos.filter((produ) => {
// return produ.categoria === "Bebidas"

// })
// console.log(bebida)

// D)

// const palavraYpe = produtos.filter((palavra) => {
// return palavra.nome.includes("Ypê")

// }).map((palavra) => {
// return `Compre ${palavra.nome} por ${palavra.preco} `

// })
// console.log(palavraYpe)








