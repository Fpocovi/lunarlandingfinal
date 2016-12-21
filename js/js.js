var y = 10; /* altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo*/
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer = null;
var fueln = 100;
var timerFuel = null;
var fuel = fueln;
var z = 70;
var puntos = 0;
var nivel = 0;
/*al cargar por completo la página...*/
window.onload = function () {
	/*definición de eventos
	//mostrar menú móvil*/
	document.getElementById("showm").onclick = function () {
			document.getElementById("cpanel").style.display = "none";
			document.getElementsByClassName("c")[0].style.display = "block";
			document.getElementById("showm").innerHTML = "";
			stop();
		}
	document.getElementById("hidem").onclick = function () {
			document.getElementById("cpanel").style.display = "block";
			document.getElementsByClassName("c")[0].style.display = "none";
			document.getElementById("showm").innerHTML = "SHOW MENU";
			start();
		}
		/*encender/apagar el motor al hacer click en la pantalla*/
	document.onclick = function () {
			if (a == g) {
				motorOn();
			} else {
				motorOff();
			}
		}
		/*encender/apagar al apretar/soltar una tecla*/

	document.onkeydown = motorOn;
	document.onkeyup = motorOff;

	start();

	/*Empezar a mover nave*/

}

/*Definición de funciones*/
function start() {
	timer = setInterval(function () {
		moverNave();
	}, dt * 1000);

}

function stop() {
	clearInterval(timer);
}

function moverNave() {
	v += a * dt;
	document.getElementById("velocidad").innerHTML = v.toFixed(2);
	y += v * dt;
	document.getElementById("altura").innerHTML = Math.trunc(z - y);

	/*mover hasta que top sea un 70% de la pantalla*/
	if (y < 70) {
		document.getElementById("nave").style.top = y + "%";
	} else {
		stop();
		/*aquí se revisa la velocidad de caída*/
		if (v >= 4) {
			window.setTimeout(function () {
				document.getElementById("llama").src = "img/explosion.gif"
			}, -10000);
			window.setTimeout(function () {
				explosion()
			}, 1000);
			motorOff();
		} else {
			puntuacion(-50000);
			confirmar = confirm("Enhorabuena lo has conseguido....\nQuieres volver a empezar\n" + "Has conseguido " + puntos + " puntos");
			if (confirmar)
				window.location.href = "index.html"
			else {}
			motorOff();
		}
	} /*fin revisión velocidad de caída*/
}

function motorOn() {
	/*cambiar nave*/
	if (fuel >= 1) { /*Aquí se revisa el nivel del combustible, en caso de que este agotado la nave no sigue acelerando*/
		a = -g;
		if (timerFuel == null)
			timerFuel = setInterval(function () {
				actualizarAltura();
			}, 100);
		document.getElementById("llama").src = "img/naveon.png";
		if (fuel == 0) { /*si no hay fuel no se puede encender motor*/
			motorOff();
		}
	} else {}
}

function motorOff() {
	a = g;
	clearInterval(timerFuel);
	timerFuel = null;
	document.getElementById("llama").src = "img/naveoff.png";
}


function actualizarAltura() {
	if (y <= 70) {
		fuel -= 1; 
		if (fuel >= 50) { /*Aquí se cambia el color del fuel a naranja*/
			document.getElementById("fuel").innerHTML = fuel;
		} else {
			document.getElementById("fuel").innerHTML = fuel;
			document.getElementById("fuel").style.color = "#ffa301";
		}
		if (fuel >= 25) { /*aquí se cambia el color del fuel a rojo*/
			document.getElementById("fuel").innerHTML = fuel;
		} else {
			document.getElementById("fuel").innerHTML = fuel;
			document.getElementById("fuel").style.color = "#d32e12";
		}
		if (fuel <= 0) {
			fuel = 0;
			document.getElementById("fuel").innerHTML = fuel;
			document.getElementById("fuel").style.color = "#d32e12";
			document.onclick = motorOff();
			document.onkeydown = motorOff;
		} else {}
	} else {
		document.onkeydown = motorOff();
		document.onclick = motorOff();
	}
}

function jugar() {
	confirmar = confirm("Estas seguro que quieres reiniciar el juego");
	if (confirmar)
	/* si pulsamos en aceptar*/
		window.location.href = "index.html"
	else {}
}

function puntuacion(acierto) { /*se ha añadido una función de puntuación para saber que tal lo hemos hecho.*/
	puntos = (v - 5) * (-1000) + (50 * fuel) - (acierto);
	puntos = Math.trunc(puntos);
}

function explosion() { /*La nave explota al llegar más rápido a la tierra*/
	puntuacion(-5000)
	confirmar = confirm("Lo siento has fracasado....\nQuieres volver a intentarlo\n" + "Has conseguido " + puntos + " puntos");
	if (confirmar)
		window.location.href = "index.html"
	else {}
}