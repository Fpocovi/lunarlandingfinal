## Proyecto lunar landing
***
Este proyecto a sido creado por Felip Pocoví Rubert
Se ha descargado una imagen del cohete de la página [*web*](https://pixabay.com/es/cohete-nave-espacial-lanzamiento-528071/). Dicha imagen
ha sido modificada con el photoshop para usarla con el motor encendido o apagado.

Todas las fotos han sido optimizadas con el PNGGaunlet.

Se ha añadido un mensaje al finalizar el juego diciendo como ha ido (si se ha ganado o se ha perdido), dando además la opción de reiniciar el juego en cualquiera de los casos.

También se ha añadido una variable con la puntuación que se mostrará dependiendo de como se haya jugado durante la partida.

En cualquier momento antes de reiniciarse, este pedirá siempre confirmación.

Se ha modificado el esqueleto suministrado por el profesor para que una vez, que la nave llegue al suelo, no gaste fuel ni encienda el motor.

Se ha cambiado los valores de velocidad para que solo salga con 2 dígitos y la altura y el fuel sean números enteros.

La imagen de la tierra se ha descargado de la [*Wikipedia*](https://commons.wikimedia.org/wiki/File:The_Earth_seen_from_Apollo_17.jpg#/media/File:The_Earth_seen_from_Apollo_17_with_transparent_background.png).

Se ha creado una rama que se llama [*“minifier”*](https://github.com/Fpocovi/lunarlandingfinal/tree/minifier), en la cual hay todo el código escrito en formato minifier (todo en una sola línea).

En la rama principal ([*master*](https://github.com/Fpocovi/lunarlanding)) está todo el código escrito bien identado.

En el directorio raíz (rama master) hay tres archivos:
* [**index.html**](https://github.com/Fpocovi/lunarlandingfinal/tree/master/index.html): es la página principal de la aplicación.
* [**about.html**](https://github.com/Fpocovi/lunarlandingfinal/tree/master/about.html): en esta página se explica lo que se ha hecho en esta aplicación. 
* [**howplay.html**](https://github.com/Fpocovi/lunarlandingfinal/tree/master/howplay.html): Aquí hay una breve descripción de como se maneja este juego. 

Al probar con rawgit.com da algunos fallos como no cargar el motor encendido o bien no salir una explosión que hay cuando no llegas a la velocida correcta.Se ha probado en un servidor interno que tengo y funciona correctamente igual que al probarlo en el disco duro.Después de unos 5 minutos con la aplicación cargada el el rawgit empieza a funcionar correctamente(no se si sera problema de mi conexión de internet o bien es algún fallo del rawgit).También parece ser que cuando cargas la versión móvil en el rawgit la página principal la carga correctamente pero al cargar la página about.hml y howplay.html lo carga como si fuera versión pc. Este fallo solo ocurre cuando se prueba con el rawgit cuando la cargas en local funciona correctamente.
***
