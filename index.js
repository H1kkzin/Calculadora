  let n1 = prompt("Digite um número:");
  let n2 = prompt("Digite um número:");
  let tipo = prompt("Digite o tipo de operação que deve ser feita:");
  let resultado = undefined;
  if (tipo === "+" || tipo.toLowerCase() === "Soma") {
    tipo = "soma";
    resultado = parseFloat(n1) + parseFloat(n2);
  } else if (tipo === "-" || tipo.toLowerCase() === "Subtração") {
    tipo = "subtração";
    resultado = parseFloat(n1) - parseFloat(n2);
  } else if (tipo === "/" || tipo.toLowerCase() === "Divisão") {
    tipo = "divisão";
    resultado = parseFloat(n1) / parseFloat(n2);
  } else if (tipo === "*" || tipo.toLowerCase() === "Multiplicação") {
    tipo = "multiplicação";
    resultado = parseFloat(n1) * parseFloat(n2);
  } else if (tipo === "%" || tipo.toLowerCase() === "Porcentagem") {
    tipo = "porcentagem";
    resultado = (parseFloat(n1) * parseFloat(n2)) / 100;
  } else if ((tipo === "^" || tipo.toLowerCase() === "Potencialização") && (n2 === "") ) {
    tipo = "potencialização";
    resultado = n1 * n1
  } else if ((tipo === "!" || tipo.toLowerCase() === "Fatoração") && (n2 === "")) {
    tipo = "fatoração"
    resultado = n1
    for(let i = 1; i < n1; i++) {
      resultado *= i;
    }
  } else console.log("Operação inválida!");
  console.log(
    "O resultado da operação de " +
      tipo +
      " entre os números: " +
      n1 +
      " e " +
      n2 +
      " é igual a: " +
      resultado
  );