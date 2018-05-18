var title = document.querySelector("h1");
console.log(title);
console.log(title.textContent);
title.textContent = "Aparecida Nutricionista!!!";

let paciente = document.querySelector("#primeiro-paciente");
let peso = paciente.querySelector(".info-peso").textContent;
let altura = paciente.querySelector(".info-altura").textContent;
let imc = paciente.querySelector(".info-imc");
console.log(peso);
console.log(altura);

let alturaValida = true;
let pesoValido = true;

if(altura <= 0.0 || altura > 3.00) {
	imc.textContent = "Altura Inválida.";
	alturaValida = false;
}

if(peso > 1000 || peso <= 0) {
	imc.textContent = "Peso Inválido.";
	pesoValido = false;
}

if(alturaValida && pesoValido) {
	imc.textContent = peso / (altura * altura);
}

