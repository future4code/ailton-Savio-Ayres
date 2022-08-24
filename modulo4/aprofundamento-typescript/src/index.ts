// EXERCÍCIO 1

// A) O próprio Typescript informa que o valor que
// atribuimos a ela não corresponde com o tipo que foi
// inserido

// B)
// Colocamos o |

// C e D ABAIXO

// enum favoritecolor {
//   RED = 'Vermelho',
//   BLUE = 'Azul',
//   WHITE = 'Branco',
//   BLACK = 'Preto'
// }

// type pessoa = {
//   name: string
//   age: number
//   favoritecolor: string
// }

// const newPerson: pessoa = {
//   name: 'Sávio',
//   age: 27,
//   favoritecolor: favoritecolor.BLACK
// }

// const newPerson2: pessoa = {
//   name: 'Tatiana',
//   age: 30,
//   favoritecolor: favoritecolor.BLUE
// }

// const newPerson3: pessoa = {
//   name: 'João',
//   age: 60,
//   favoritecolor: favoritecolor.WHITE
// }
// console.table([newPerson, newPerson2, newPerson3])

// EXERCÍCIO 2

// a)
// type ArrayDeNumeros = number[]
// type returnFuncao = {
//   maior: number
//   menor: number
//   media: number
// }

// function obterEstatisticas(numeros: ArrayDeNumeros) {
//   const numerosOrdenados = numeros.sort((a, b) => a - b)

//   let soma: number = 0

//   for (let num of numeros) {
//     soma += num
//   }

//   const estatisticas = {
//     maior: numerosOrdenados[numeros.length - 1],
//     menor: numerosOrdenados[0],
//     media: soma / numeros.length
//   }

//   return estatisticas
// }

// console.table([45, 27, 78, 85])

// C)  Não Entendi muito bem

// EXERCÍCIO 3

// a)
// type postString = {
//   autor: string
//   texto: string
// }

// const posts: postString[] = [
//   {
//     autor: 'Alvo Dumbledore',
//     texto: 'Não vale a pena viver sonhando e se esquecer de viver'
//   },
//   {
//     autor: 'Severo Snape',
//     texto: 'Menos 10 pontos para Grifinória!'
//   },
//   {
//     autor: 'Hermione Granger',
//     texto: 'É levi-ô-sa, não levio-sá!'
//   },
//   {
//     autor: 'Dobby',
//     texto: 'Dobby é um elfo livre!'
//   },
//   {
//     autor: 'Lord Voldemort',
//     texto: 'Avada Kedavra!'
//   }
// ]

// function buscarPostsPorAutor(posts: postString[], autorInformado: string) {
//   return posts.filter((post) => {
//     return post.autor === autorInformado
//   })
// }
// console.table(buscarPostsPorAutor(posts, 'Hermione Granger'))

// EXERCICIO 5

// Há diversas opções, porém as necessárias são o "outDir" e "rootDir"
