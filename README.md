# 2DAW-DWEC

Repositorio común para la clase de 2º de DAW del [IES Gran Capitán](https://informatica.iesgrancapitan.org/).


La estructura de los ejercicios tiene que ser -> [TEMA]/[EjercicioN]/ejercicio.html
Por cada ejercicio se creará una rama (branch). Cuando se termine de hacer el ejercicio el pull requests irá a la rama desarrollo.
La rama master será la que se pueda ver desde el .io

Cada index.html de cada ejercicio tendrá un CSS común y se añadirá un elemento <p> con la clase 'enunciado' donde estará contenido el enunciado.
El CSS a incluir es: https://rafasojo.github.io/2DAW-DWEC/assets/style.css

Se tiene que incluir en el HTML dentro de la etiqueta HEAD.
```HTML
<link rel="stylesheet" href="https://rafasojo.github.io/2DAW-DWEC/assets/style.css">
```

El enunciado del ejercicio tiene que estar en el index.html en un elemento 'p' con la clase 'enunciado'
```HTML
<p class="enunciado">
    Ejercicio X ....
</p>
```

Cada ejercicio contará con 3 ficheros:
    * index.html - Será un resumen del ejercicio y tendrá el enunciado en una etiqueta <p> con la clase 'enunciado' además de incluir el css.
    * ejercicio.html - Contendrá el HTML del ejercicio además de incluir el fichero JS.
    * ejercicio.js - Contendrá el código JS del ejercicio

Se tiene que usar la plantilla que está en la carpeta 'plantilla-ejercicios'

HAY QUE ACTUALIZAR EL index.html CUANDO SE SUBE UN EJERCICIO NUEVO!!!

# Buscaminas
Para tener un sitio donde estén todos los enlaces de los buscaminas se ha creado el fichero buscaminas.html.
En éste index ponemos todos los enlaces a los buscaminas, tanto al .io como al código fuente.

Para añadir vuestros enlaces es editando el fichero añadiendo un article por casa uno.

```
            <article>
                <header>Marcos Gallardo</header>
                <a href="ENLACE_IO" target="_blank" class="enlaceDemo">
                    <div id="enlaceTemas">Demo</div>
                </a>
                <a href="ENLACE_GITHUB" target="_blank" class="enlaceCodigoFuente">
                    <div id="enlaceTemas">Código fuente</div>
                </a>
            </article>
```

Para añadir el vuestro, crear una rama a partir de la de desarrollo, lo añadís y hacéis un pull requests.

