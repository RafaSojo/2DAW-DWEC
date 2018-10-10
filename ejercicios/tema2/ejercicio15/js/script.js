/**
 *Completar el código JavaScript proporcionado para que:
 *1.Al mover el ratón en cualquier punto de la ventana del navegador, 
 *se muestre la posición del puntero respecto del navegador y respecto de la página:
 *2.Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y su información asociada: 
 *3.Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, 
 *el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla, 
 *el color de fondo debe ser azul (#CCE6FF). 
 *Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
 *Autor: Guillermo Boquizo Sánchez
 */
{
    let generateMessages;
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        message = document.getElementById("info");
        document.addEventListener("mousemove", generateMessages);
        document.addEventListener("keypress", generateMessages);
        document.addEventListener("click", generateMessages);
    }

    generateMessages = function (ev) {
        let xRelative, yRelative, xAbsolut, yAbsolut;
        xAbsolut = ev.pageX;
        yAbsolut = ev.pageY;
        xRelative = ev.clientX;
        yRelative = ev.clientY;
        switch (ev.type) {
            case 'mousemove':
                message.style.backgroundColor = '#FFFFFF';
                showInformation(['Moviendo el ratón', 'Posición en navegador: [' + xRelative + ', ' + yRelative + ']', 'Posición en página: [' + xAbsolut + ', ' + yAbsolut + ']']);
                break;
            case 'keypress':
                message.style.backgroundColor = '#CCE6FF';
                let character = ev.charCode || ev.keyCode;
                let sign = String.fromCharCode(character);
                let code = sign.charCodeAt(0);
                showInformation(['Pulsando el teclado:', 'Carácter de la tecla pulsada: [' + sign + ']', 'Código del carácter: [' + code + ']']);
                break;
            case 'click':
                message.style.backgroundColor = '#FFFFCC';
                showInformation(['Con ratón clicado:', 'Posición en navegador: [' + xRelative + ', ' + yRelative + ']', 'Posición en página: [' + xAbsolut + ', ' + yAbsolut + ']']);
                break;
        }
    }

    let showInformation = function (info) {
        message.innerHTML = '<h2>' + info[0] + '</h2>';
        for (let i = 1; i < info.length; i++) {
            message.innerHTML += '<p>' + info[i] + '</p>';
        }
    }
}