// Fatorial
function fatorial(numero) {
  if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    console.log("Insira um número inteiro não negativo.");
    return null;
  } else {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
}

const entrada = 12;
const resultado = fatorial(entrada);

if (resultado !== null) {
  console.log(`O fatorial de ${entrada} é: ${resultado}`);
}

// Fibonacci
function fibonacci() {
  let a = 0,
    b = 1,
    temp;

  console.log(a);
  console.log(b);

  for (let i = 3; i <= 10; i++) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
}

fibonacci();

// PA - Progressão aritmética
function pa(primeiroTermo, razao) {
  let soma = 0;

  for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao;
    soma += termo;
  }
  console.log(`A soma dos termos é: ${soma}`);
}

pa(5, 3);
