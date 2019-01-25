/**
 * Script del ejercicio 17
 * Autor: José Rafael Álvarez Espino
 */

/**
  * Comprueba el número de caracteres que aún puedes escribir.
  */

{   
    let text_area;
    let info;
    let nCaracteres_actuales;
    const numero_max_caracteres = 5;
    

    document.addEventListener("DOMContentLoaded", iniciar);

    function iniciar() {
        text_area = document.getElementById("texto");
        info = document.getElementById("info");
        text_area.addEventListener('keypress', limitar_caracteres);
        text_area.addEventListener('keyup', actualizar_caracteres);
    }

    function limitar_caracteres(evento) {
        nCaracteres_actuales = text_area.value.length + 1;
        if(nCaracteres_actuales > numero_max_caracteres){
            evento.preventDefault();
            return false;
        }     
        return true;
    }

    function actualizar_caracteres(){
        nCaracteres_actuales = text_area.value.length;
        let numero_caracteres_permitidos = numero_max_caracteres - nCaracteres_actuales;
        if(numero_caracteres_permitidos > 0)
            info.innerHTML = "Aún puedes escribir "+ numero_caracteres_permitidos + " caracteres";
        else
            info.innerHTML = "No puedes escribir mas caracteres";
    }
}