/**Ejercicio 18 Mejorar el calendario creado añadiendo las opciones necesarias para que
 * muestre el siguiente aspecto:
 * Que no se muestre el número de la semana en el calendario (pista: weekNumbers)
 * Modificar el formato en el que se muestra la fecha seleccionada. El formato original es
 * 21 / 08 / 2007 (indicado como %d / %m / %Y). El formato deseado es
 * Martes, 21 de Agosto de 2007 (pistas: %A, %B)
 * El nuevo formato de fecha es mucho más agradable para los usuarios, pero más incómodo para
 * los scripts que tienen que manejarlo. Afortunadamente, el calendario dispone de la
 * posibilidad de guardar dos valores: un valor para mostrar a los usuarios y otro valor para
 * que lo procesen los scripts. Cuando el usuario seleccione una fecha, la fecha con el
 * formato original se debe almacenar en un campo oculto de formulario y el otro formato más
 * largo debe mostrar al usuario en un elemento de tipo <span> (pistas: displayArea, daFormat)
 */

{
    function confCalendar() {
        Calendar.setup({
            inputField: "fecha",
            ifFormat:   "%d / %m / %Y",
            daFormat:   "%A , %d de %B de %Y",
            displayArea:   "fechaf",
            button:     "selector",
            weekNumbers:    false
        });
    }

    window.addEventListener("load",confCalendar);
}