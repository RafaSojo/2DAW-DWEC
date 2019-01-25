/*
    @author Angelo Barbara
*/
{
    document.addEventListener("DOMContentLoaded", init);
    var numero1 = 5;
    var numero2 = 8;

    function init(){
        if(numero1 > numero2) 
        document.getElementById('condicionales').innerHTML += numero1 + ' no es mayor que ' + numero2 + '<br/>';
    
        if(numero2 > 0) 
            document.getElementById('condicionales').innerHTML += numero1 + ' es positivo<br/>';
        
        if(numero1 < 0 || numero1 != 0) 
            document.getElementById('condicionales').innerHTML += numero1 + ' es negativo o distinto de cero<br/>';
        
        if(++numero1 < numero2) 
            document.getElementById('condicionales').innerHTML += 'Incrementar en 1 unidad el valor de ' + --numero1 + ' no lo hace mayor o igual que ' + numero2 + '<br/>';
    }
}