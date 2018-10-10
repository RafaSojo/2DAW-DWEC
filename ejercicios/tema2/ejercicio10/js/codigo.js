/**
 * Script del ejercicio 10
 * Autor: José Rafael Álvarez Espino
 */

 /**
  * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
  * Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
  * */

  
function comprobar_palindromo() {
  let cadena = prompt("Introduce una cadena");
  let cadena_junta_minusculas = cadena.toLowerCase().replace(/\s/g,"");
  let cadena_junta_minusculas_reves = cadena_junta_minusculas.split("").reverse().join("");
  let mensaje = (cadena_junta_minusculas == cadena_junta_minusculas_reves)?"La cadena es un palíndromo":"La cadena no es un palíndromo";
  document.getElementById("contenido").textContent = mensaje;
}
document.addEventListener("DOMContentLoaded",comprobar_palindromo);


 