function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const pares = [
  ["nome", "Carlos"],
  ["idade", 28],
  ["cidade", "Fortaleza"],
];

const objeto = paresParaObjeto(pares);
console.log("Objeto convertido:", objeto);

const novosPares = objetoParaPares(objeto);
console.log("Pares convertidos:", novosPares);
