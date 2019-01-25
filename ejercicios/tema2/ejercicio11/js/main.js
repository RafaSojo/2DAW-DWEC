{

    /**
    * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:
    *  Número de enlaces de la página
    *  Dirección a la que enlaza el penúltimo enlace
    *  Numero de enlaces que enlazan a http://prueba
    *  Número de enlaces del tercer párrafo
    * @author Marcos Gallardo Pérez
    */
{
    document.addEventListener('DOMContentLoaded',init);
    function init(){
        let link = document.getElementsByTagName("a");
        document.getElementById("punto1").innerHTML = link.length;

        document.getElementById("punto2").innerHTML = link[link.length - 2].href;
        let contador = 0;
        for(let i=0; i<link.length; i++) {
            if(link[i].href == "http://prueba" || link[i].href == "http://prueba/") {
            contador++;
            }
        }
        document.getElementById("punto3").innerHTML = contador;
        
        document.getElementById("punto4").innerHTML = document.getElementsByTagName("p")[2].getElementsByTagName("a").length;
    }
}
}