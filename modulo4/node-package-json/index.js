// 'use strict'

// // EXERCÍCIO 1

// // a) o parâmetro que usamos é o process.argv[]

// // b)
// const minhaIdade = Number(process.argv[3]) + Number(7)
// console.log(
//   'Olá',
//   process.argv[2],
//   'Você tem',
//   process.argv[3],
//   'anos. Em sete anos você terá',
//   minhaIdade
// )

// // c)

// const idadeFuturo = () => {
//   if (process.argv.length === 4) {
//     console.log(
//       `Olá, ${process.argv[2]}! Você tem ${
//         process.argv[3]
//       } anos. Em sete anos você terá ${Number(process.argv[3]) + 7}`
//     )
//   } else {
//     console.log('Você precisa de dois valores')
//   }
// }
// idadeFuturo()

// EXERCÍCIO 2

// const soma = Number(process.argv[2]) + Number(process.argv[3])
// console.log(soma)

// const subtrair = Number(process.argv[2]) - Number(process.argv[3])
// console.log(sub)

// const multiplicar = Number(process.argv[2]) * Number(process.argv[3])
// console.log(multi)

// const dividir = Number(process.argv[2]) / Number(process.argv[3])
// console.log(soma)

// EXERCÍCIO 3

// const tarefa = ['varrer', 'passar pano']
// const adicionarTarefa = tarefa.push(process.argv[2])
// console.log(adicionarTarefa)
// console.log(tarefa)
