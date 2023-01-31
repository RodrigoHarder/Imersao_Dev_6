/*
var valorEmDolar = 30;
var cotacaoDoDolar = 5.09;
var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert("O valor em real é: R$" + valorEmReal);
*/

function conversao(){
	var cotacaoDoDolar = 5.09;
	var cotacaoDoEuro = 5.54;
	var cotacaoDoPesoArgentino = 0.027;
	var cotacaoDoBitcoin =116534.42;
	
	var n1 = Number(document.getElementById("number1").value);
	
	var valorEmReal = (cotacaoDoDolar * n1).toFixed(2);
	var valorEmReal2 = (cotacaoDoEuro * n1).toFixed(2);
	var valorEmReal3 = (cotacaoDoPesoArgentino * n1).toFixed(2);
	var valorEmReal4 = (cotacaoDoBitcoin * n1).toFixed(2);
					document.getElementById("result").innerText=('A conversão de U$ '+n1+ ' para real é: R$'+ valorEmReal);
	
document.getElementById("result2").innerText=('A conversão de '+n1+ ' EUR para real é: R$' + valorEmReal2);
	
document.getElementById("result3").innerText=('A conversão de '+n1+ ' ARS para real é: R$' +valorEmReal3);

document.getElementById("result4").innerText=('A conversão de '+n1+ ' Bitcoin para real é: R$' +valorEmReal4);
}