const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && peso !== "" && altura !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if (valorIMC < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (valorIMC >= 18.5 && valorIMC < 24.9) {
      classificacao = "Peso Normal";
    } else if (valorIMC >= 25 && valorIMC < 29.9) {
      classificacao = "Sobrepeso";
    } else if (valorIMC >= 30 && valorIMC < 34.9) {
      classificacao = "Obesidade Grau I";
    } else if (valorIMC >= 35 && valorIMC < 39.9) {
      classificacao = "Obesidade Grau II";
    } else if (valorIMC >= 40) {
      classificacao = "Obesidade Grau III ou Mórbida";
    }

    resultado.textContent =
      `${nome} seu IMC é ${valorIMC}. - ${classificacao} -`;
  } else {
    resultado.textContent = "Por favor, preencha todos os campos!";
  }
}

calcular.addEventListener("click", imc);
