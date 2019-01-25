/*
    @author Angelo Barbara
*/
{
    document.addEventListener("DOMContentLoaded", init);
    let valores = [true, 5, false, "hola", "adios", 2];
    let string = [];
    let boolean = [];
    let numeros = [];

    function init(){
        initArray();
        cadenaMasLarga();
        esVerdaderoFalso();
        operadoresMatematicos();
    }

    function initArray(){
        for(let i in valores){
            switch(typeof valores[i]){
                case 'string':
                string.push(valores[i]);
                break;
                case 'boolean':
                boolean.push(valores[i]);
                break;
                default:
                numeros.push(valores[i]);
                break;
            }  
        }
    }
    
    function cadenaMasLarga(){
        let maximo = '';
        for(let i in string){
            if(string[i].length > maximo.length)
                maximo = string[i];
        }
        document.getElementById('string').innerHTML = 'La cadena más larga es ' + maximo;
    }

    function esVerdaderoFalso(){
        for(let i in boolean){
            if(boolean[i] === false)
                document.getElementById('boolean').innerHTML += 'false<br/>';
            else
                document.getElementById('boolean').innerHTML += 'true<br/>';
        }
        
    }
    
    function operadoresMatematicos(){
        document.getElementById('operadores').innerHTML = 'Suma: '+ (numeros[0] + numeros[1])+ '<br/>Resta: '+(numeros[0] - numeros[1])+'<br/>Multipicación: '+
        (numeros[0] * numeros[1])+'<br/>División: '+(numeros[0] / numeros[1])+'<br/>Modulo: '+(numeros[0] % numeros[1]);
    }
}