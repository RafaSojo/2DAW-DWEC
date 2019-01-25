/*
    @author Angelo Barbara
*/
{
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let numero = prompt("Introduzca la parte númerica de su dni");

    if(numero >= 0 && numero <= 99999999){
        let letra = prompt("Introduzca la letra de su dni");
        if(letras[numero % 23] == letra.toUpperCase()){
            alert("La letra y el número introducidos son correctos");
        }
        else{
            alert("La letra introducida no es correcta");
        }
    }
    else{
        alert("El número proporcionado no es válido");
    }
}