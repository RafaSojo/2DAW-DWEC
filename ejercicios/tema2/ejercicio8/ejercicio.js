/*
    @author José Manuel Bravo Martínez
*/
{ 
    function iniciar(){
        document.getElementById("resultado").innerHTML = esParImpar(prompt("Introduce un número"));
        
    }
    
    function esParImpar(numero){
        
        if(numero%2 == 0){
            return "El número " + numero +" es par";
        }else{
            return "El número " + numero +" es impar";
        }
    }
    
    document.addEventListener("DOMContentLoaded", iniciar);
}