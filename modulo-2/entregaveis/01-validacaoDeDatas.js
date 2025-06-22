const prompt = require("prompt-sync")();

const dia = Number(prompt("Informe o Dia: "));
const mes = Number(prompt("Informe o Mês: "));
const ano = Number(prompt("Informe o Ano: "));

function ehDataValida(dia, mes, ano) {
  if (
    typeof dia !== "number" ||
    typeof mes !== "number" ||
    typeof ano !== "number"
  ) {
    return false;
  }

  if (
    dia <= 0 ||
    mes <= 0 ||
    ano < 0 ||
    !Number.isInteger(dia) ||
    !Number.isInteger(mes) ||
    !Number.isInteger(ano)
  ) {
    return false;
  }

  if (mes < 1 || mes > 12) {
    return false;
  }

  let diasNoMes;

  if (
    mes === 1 ||
    mes === 3 ||
    mes === 5 ||
    mes === 7 ||
    mes === 8 ||
    mes === 10 ||
    mes === 12
  ) {
    diasNoMes = 31;
  } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    diasNoMes = 30;
  } else if (mes === 2) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      diasNoMes = 29;
    } else {
      diasNoMes = 28;
    }
  }

  return dia <= diasNoMes;
}

console.log(ehDataValida(dia, mes, ano));
