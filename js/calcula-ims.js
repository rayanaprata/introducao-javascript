// var title = document.querySelector(".title");
// title.textContent = "Novo título!";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");

if (alturaEhValida && pesoEhValido) {
  var imc = calculaImc(peso, altura);
  tdImc.textContent = imc;
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
