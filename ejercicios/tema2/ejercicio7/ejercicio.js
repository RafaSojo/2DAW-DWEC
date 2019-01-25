/**
 * El factorial de un número entero n es una operación matemática que consiste en multiplicar todos
 * los factores n x (n-1) x (n-2) x ... x 1. 
 * Así, el factorial de 5 (escrito como 5!) es igual a: 
 * 5! = 5 x 4 x 3 x 2 x 1 = 120
 * Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
 * @author Guillermo Boquizo Sánchez
 */
{
	let number = prompt('Introduce un número para hacer su factorial');
	let factorial = 1;

	function init() {
		showResults();
	}

	function showResults() {
		info = document.getElementById('info');
		info.innerHTML =
			'<h2> Resultado:</h2>' + '<h3>El factorial de ' + number + ' es ' + calculateFactorial() + '</h3>';
	}

	function calculateFactorial() {
		for (let i = 1; i <= number; i++) {
			factorial = factorial * i;
		}
		return factorial;
	}

	document.addEventListener('DOMContentLoaded', init);
}