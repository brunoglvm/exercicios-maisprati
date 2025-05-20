// fatorial
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

let num = 5;
console.log(`O fatorial de ${num} é: ${fatorial(num)}`);

// soma
function soma(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + soma(n - 1);
  }
}
let valorSoma = 32;
console.log(`A soma de 1 até ${valorSoma} é: ${soma(valorSoma)}`);

// fibonacci
function fibo(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}
let posFibo = 10;
console.log(
  `O ${posFibo}º número da sequência de Fibonacci é: ${fibo(posFibo)}`
);

// exibir nomes
let categorias = [
  {
    id: 1,
    nome: "Eletrônicos",
    filhos: [
      { id: 2, nome: "Celulares", filhos: [] },
      {
        id: 3,
        nome: "Computadores",
        filhos: [{ id: 4, nome: "Tablets", filhos: [] }],
      },
    ],
  },
  {
    id: 5,
    nome: "Louças",
    filhos: [],
  },
];

function exibirNomes(lista, nivel = 0) {
  for (let categoria of lista) {
    console.log(" ".repeat(nivel * 2) + categoria.nome);
    if (categoria.filhos.length > 0) {
      exibirNomes(categoria.filhos, nivel + 1);
    }
  }
}

exibirNomes(categorias);
