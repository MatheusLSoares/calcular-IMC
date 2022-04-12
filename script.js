const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && peso !== "" && altura !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = ""

    if (valorIMC <18.5) {
        classificacao = "Abaixo do peso"
    }

    resultado.textContent = `$(nome) seu IMC é $(valorIMC).`

  } else {
    resultado.textContent = "Por favor, preencha todos os campos!";
  }
}

calcular.addEventListener("click", imc);
