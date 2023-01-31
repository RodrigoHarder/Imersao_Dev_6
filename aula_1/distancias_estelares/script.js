/*
var valorEmDolar = 30;
var cotacaoDoDolar = 5.09;
var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert("O valor em real é: R$" + valorEmReal);
*/

function conversao(){
	var umKm = 9460000000000;
	
	var n1 = Number(document.getElementById("number1").value);
	
	var km = (umKm * n1);
					document.getElementById("result").innerText=('O valor de ' +n1 +' anos luz é: '+ km +' Km');
}