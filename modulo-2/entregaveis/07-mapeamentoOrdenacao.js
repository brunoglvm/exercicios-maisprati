function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map((produto) => produto.nome);
}

const produtos = [
  { nome: "Caneta", preco: 2.99 },
  { nome: "Caderno", preco: 18.5 },
  { nome: "Borracha", preco: 1.78 },
  { nome: "Mochila", preco: 42.99 },
];

console.log(nomesOrdenadosPorPreco(produtos));
