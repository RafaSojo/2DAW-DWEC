/**
Mejorar el tooltip propuesto añadiendo las siguientes características:
1. Que el tooltip no se muestre instantáneamente, sino que transcurra un cuarto de segundo
hasta que se muestre (pista: DELAY)

2. Que exista una separación horizontal de 15 píxel entre el puntero del ratón y el tooltip
(pista: OFFSETX)
3. Que el tooltip se muestre en la parte superior del puntero del ratón y no en la parte inferior
(pista: ABOVE)

 */

{
    let tool;

    function init(){

        tool = document.getElementById("tool");

        tool.addEventListener("mouseover" , raton);

        tool.addEventListener("mouseout", function(){

            return nd();
        });
    }

    let raton = function(){

        //1.- Transcurra tiempo usamos DELAY: 999
        //2.- Separacion horizontal de 15 pidexles OFFSETX,15
        //3.-Con ABOVE se coloca encima.
        overlib_pagedefaults(WIDTH,250,FGCOLOR,'#ffffcc',BGCOLOR,'#666666',
        TEXTFONT,"Arial, Helvetica, Verdana",TEXTSIZE,".8em",
        DELAY,999,OFFSETX,15,ABOVE);

        return overlib('Prueba de un tooltip básico y muy sencillo.');

    }

    window.addEventListener("load", init);

}