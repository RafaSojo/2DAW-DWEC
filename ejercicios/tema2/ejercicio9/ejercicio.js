/*
    @author José Manuel Bravo Martínez
*/
{
    document.addEventListener("DOMContentLoaded", iniciar);

    function iniciar(){
        document.getElementById("resultado").innerHTML = mayusculasOMinusculas(prompt("Introduce una cadena"));
    }


    function mayusculasOMinusculas(cadena){

        switch(cadena){

            case cadena.toUpperCase():
            return "La cadena contiene solo mayúsculas.";
            break;

            case cadena.toLowerCase():
            return "La cadena contiene solo minúsculas."
            break;

            default:
            return "La cadena contiene mayúsculas y minúsculas"
        }

    }
}