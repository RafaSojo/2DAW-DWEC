{
    let num = prompt("Introduce un número para averiguar si es par o no: "),
        mensaje ="No es un numero valido";    
    
    if(!isNaN(num) && num%1==0){
        mensaje = "El numero es impar";
        if(esPar(num)){
            mensaje = "El numero es par.";
        }
    }
    function esPar(numero){
        if(numero%2==0){
            return true;
        }
        return false;
    }

    function init () {
        console.log(mensaje);
        document.getElementById("mensaje").innerHTML= mensaje;
    }
    window.addEventListener("load", init);
}