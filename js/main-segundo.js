/* Outra maneira de declarar um evento de javascript.

document.querySelector("#adicionar-paciente").addEventListener("click", function() {

});

*/

var calculaIMC = (peso, altura) => {
	 return (peso /(altura * altura)).toFixed(2);
}

var validaAltura = (altura) => {
	if(altura <= 0.0 || altura > 3.00) {
		return false;
	}
	return true;
}

var validaPeso = (peso) => {
	if(peso > 1000 || peso <= 0) {				
		return false;
	}
	return true;
}

document.querySelector("#adicionar-paciente").addEventListener("click", adicionaPaciente);

let pacientes = document.querySelectorAll(".paciente");

for(let i=0; i < pacientes.length; i++) {
	peso = pacientes[i].querySelector(".info-peso").textContent;
	altura = pacientes[i].querySelector(".info-altura").textContent;
	imc = pacientes[i].querySelector(".info-imc");

	if(!validaAltura(altura)) {
		imc.textContent = "Altura Inválida.";
		pacientes[i].classList.add("altura-invalida");

	} else if(!validaPeso(peso)) {
		imc.textContent = "Peso Inválido.";
		pacientes[i].classList.add("peso-invalido");
	} else {
		imc.textContent = calculaIMC(peso, altura);
	}
}


function adicionaPaciente(event) {
	event.preventDefault();

	let form = document.querySelector("#paciente-form");

	// Pega informações do paciente
	paciente = getInformation(form);
	pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

 	// Cria uma Td generica.
 	createTd(pacienteTr, paciente.nome, "info-nome");
 	createTd(pacienteTr, paciente.peso, "info-peso");
 	createTd(pacienteTr, paciente.altura, "info-altura");
 	createTd(pacienteTr, paciente.gordura, "info-gordura");
 	createTd(pacienteTr, calculaIMC(peso, altura),  "info-imc");

 	imc = pacienteTr.querySelector(".info-imc");
 	if(!validaAltura(paciente.altura)) {
		imc.textContent = "Altura Inválida.";
		pacienteTr.classList.add("altura-invalida");
	} else if(!validaPeso(paciente.peso)) {
		imc.textContent = "Peso Inválido.";
		pacienteTr.classList.add("peso-invalido");
	} 


	var tabelaPaciente = document.querySelector("#tabela-pacientes");
	tabelaPaciente.appendChild(pacienteTr);

	form.reset();
}

function getInformation(form) {
	let paciente = {
		nome : form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value		
	}
	return paciente;
}

function createTd(pacienteTr, valor, classType) {
	simpleTd = document.createElement("td");
	simpleTd.textContent = valor;
	simpleTd.classList.add(classType);
	pacienteTr.appendChild(simpleTd);
}

/*function calculaIMC(peso, altura) {
	if(validaPeso(peso) && validaAltura(peso))
		return (peso /(altura * altura)).toFixed(2);

}*/



