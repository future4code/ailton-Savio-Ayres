// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();

  // DESAFIO!!
  // let arrayInvertido = []
  // for (let i = array.lengtht; i > 1; i--) {
  //     arrayInvertido[array.length - i] - array[i-1]
  //     return arrayInvertido
  // }
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const ordenado = array.sort(function (a, b) {
    return a - b;
  });
  return ordenado;
}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
  const novoArray = array.filter((item) => item % 2 === 0);
  return novoArray;
}

// DESAFIO NÃO CONCLUÍDO

// let numerosPares = [];
// for (let i = 0; numerosPares.length < array.length; i++) {
//     if (array[i] % 2 === 0) {
//     numerosPares.push(array[i]);

// }
// return numerosPares;
// }
// }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const novoArray = array
    .filter((item) => item % 2 === 0)
    .map((item) => item * item);
  return novoArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const novoArray = [];
  const numeroMaior = Math.max.apply(null, array);
  return numeroMaior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNum = 0
let maiorDivisivePeloMen = 0
let diferenc = 0
let objeto1 = {maiorNumero: 0,}
let objeto2 = {maiorNumero: 0,}
if (num1 > num2) {
    maiorNum = num1
    maiorDivisivePeloMen = num1 % num2 === 0
    diferenc = num1 - num2
    objeto1.maiorNumero = maiorNum
    objeto1.maiorDivisivePeloMenor = maiorDivisivePeloMen
    objeto1.diferenca = diferenc
    return objeto1

}else{
maiorNum = num2
maiorDivisivePeloMen = num2 % num1 === 0
diferenc = num2 - num1
objeto2.maiorNumero = maiorNum,
objeto2.MaiorDivMenor = maiorDivisivePeloMen,
objeto2.diferenca = diferenc


return objeto2
}
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

let arrayPares = []
    for (let i = 0; i < n; i++) {
arrayPares.push(i*2)
}
   return arrayPares 
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA === ladoB && ladoA == ladoC) {
    return "Equilátero"
}else if (ladoA === ladoB && ladoA !== ladoC || ladoA === ladoC && ladoA !== ladoB || ladoB === ladoC && ladoB !== ladoA) {

return "Isósceles"
}else if (ladoA !== ladoB && ladoA !== ladoC){
    return "Escaleno"
}


}

// EXERCÍCIO 10
// Não rodou o código
function retornaSegundoMaiorESegundoMenor(array) {
  let primMaior = -Infinity;
  let segMaior = -Infinity;
  let primMenor = +Infinity;
  let segMenor = Infinity;

  for (let number of array) {
    if (number > primMaior) {
      primMaior = number;
    }
    if (number < primMenor) {
      primMenor = number;
    }
  }

for (let number of array) {
  if (number > segMaior && number !== primMaior) {
    segMaior = number;
  }
  if (number < segMenor && number !== primMenor) {
    segMenor = number;
}
}
const resultado = [segMaior, segMenor];
return resultado;
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
let pessoaAnonima  = {...pessoa}
    pessoaAnonima.nome = "ANONIMO"
return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
