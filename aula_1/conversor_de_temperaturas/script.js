function conversao(){
	var kelvin = 273.15;
	
	var n1 = Number(document.getElementById("number1").value);
	
	var valorEmKelvin = (kelvin + n1).toFixed(2);
	var valorEmFahrenheint = ((n1 * (9/5))+32).toFixed(2);
	
	document.getElementById("result").innerText=('O valor de '+n1+ '°C para Kelvin é: '+ valorEmKelvin + ' K');
	
document.getElementById("result2").innerText=('O valor de '+n1+ '°C para Fahrenheint é: '+ valorEmFahrenheint + ' °F');
}