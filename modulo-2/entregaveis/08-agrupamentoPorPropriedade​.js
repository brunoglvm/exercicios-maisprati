function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    if (!acc[venda.cliente]) {
      acc[venda.cliente] = 0;
    }
    acc[venda.cliente] += venda.total;
    return acc;
  }, {});
}

const vendas = [
  { cliente: "Ana", total: 200 },
  { cliente: "Daniel", total: 130 },
  { cliente: "Gabriel", total: 50 },
  { cliente: "Daniel", total: 180 },
  { cliente: "Ana", total: 180 },
  { cliente: "Ana", total: 60 },
  { cliente: "Gabriel", total: 80 },
];

console.log(agruparPorCliente(vendas));
