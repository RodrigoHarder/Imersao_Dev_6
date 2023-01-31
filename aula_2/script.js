var numeroSecreto = parseInt(Math.random()*101);
var tentativas = 3;

function chutar(){
	
  var valor = document.getElementById("valor").value
  var chute = parseInt(valor);
  var result = document.getElementById("result")
  
  if(chute === numeroSecreto){
    resultado.innerHTML = `<p class="depoisdochute" id="acertou">Parabéns! Você acertou!</p>`;
    return;
  } else if(chute > 100 || chute < 0){
    tentativas--;
    resultado.innerHTML = '<p class="depoisdochute">Por favor, digite um número de 0 a 100.</p>';
  } else if(chute < numeroSecreto){
    tentativas--;
    resultado.innerHTML = `<p class="depoisdochute" id="maior">Ops! O número é maior que ${chute}. Você tem ${tentativas} tentativas.</p>`;
  } else if(chute > numeroSecreto){
    tentativas--;
    resultado.innerHTML = `<p class="depoisdochute" id="menor">Ops! O número é menor que ${chute}. Você tem ${tentativas} tentativas.</p>`;
  }
  if(tentativas <= 0){
    resultado.innerHTML = `<p class="depoisdochute" id="acabou">Suas tentativas acabaram!Não foi dessa vez!</p>`;
    return;
  }
}

function reiniciar(){
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;            
  resultado.innerHTML = "";
  valor.value = "";
	}

/*

while(chute!= numeroSecreto){
	
	var numeroSecreto = parseInt(Math.random()*101);
	var chute = prompt('Digite um número de 0 a 100');

	if(chute==numeroSecreto){
		alert('Você acertou!')
	}else if(chute>numeroSecreto){
		alert('Você errou! O número é maior que o número secreto!')
	}else if(chute<numeroSecreto){
		alert('Você errou! O número é menor que o número secreto!')
	}
}
*/