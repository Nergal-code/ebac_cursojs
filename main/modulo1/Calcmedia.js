function calcMedia() {
	var a = parseInt(document.getElementById("a").value);
	var b = parseInt(document.getElementById("b").value);
	var c = parseInt(document.getElementById("c").value);

	var resultado = (a + b + c) / 3;

	document.getElementById("Resultado").innerHTML = "Resultado " + resultado;

}
