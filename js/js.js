var y=10;var v=0;var g=1.622;var a=g;var dt=0.016683;var timer=null;var fueln=100;var timerFuel=null;var fuel=fueln;var z=70;var puntos=0;var nivel=0;window.onload=function(){document.getElementById("showm").onclick=function(){document.getElementById("cpanel").style.display="none";document.getElementsByClassName("c")[0].style.display="block";document.getElementById("showm").innerHTML="";stop()}
document.getElementById("hidem").onclick=function(){document.getElementById("cpanel").style.display="block";document.getElementsByClassName("c")[0].style.display="none";document.getElementById("showm").innerHTML="SHOW MENU";start()}
document.onclick=function(){if(a==g){motorOn()}else{motorOff()}}
document.onkeydown=motorOn;document.onkeyup=motorOff;start()}
function start(){timer=setInterval(function(){moverNave()},dt*1000)}
function stop(){clearInterval(timer)}
function moverNave(){v+=a*dt;document.getElementById("velocidad").innerHTML=v.toFixed(2);y+=v*dt;document.getElementById("altura").innerHTML=Math.trunc(z-y);if(y<70){document.getElementById("nave").style.top=y+"%"}else{stop();if(v>=4){window.setTimeout(function(){document.getElementById("llama").src="img/explosion.gif"},-10000);window.setTimeout(function(){explosion()},1000);motorOff()}else{puntuacion(-50000);confirmar=confirm("Enhorabuena lo has conseguido....\nQuieres volver a empezar\n"+"Has conseguido "+puntos+" puntos");if(confirmar)
window.location.href="index.html"
else{}
motorOff()}}}
function motorOn(){if(fuel>=1){a=-g;if(timerFuel==null)
timerFuel=setInterval(function(){actualizarAltura()},100);document.getElementById("llama").src="img/naveon.png";if(fuel==0){motorOff()}}else{}}
function motorOff(){a=g;clearInterval(timerFuel);timerFuel=null;document.getElementById("llama").src="img/naveoff.png"}
function actualizarAltura(){if(y<=70){fuel-=1;if(fuel>=50){document.getElementById("fuel").innerHTML=fuel}else{document.getElementById("fuel").innerHTML=fuel;document.getElementById("fuel").style.color="#ffa301"}
if(fuel>=25){document.getElementById("fuel").innerHTML=fuel}else{document.getElementById("fuel").innerHTML=fuel;document.getElementById("fuel").style.color="#d32e12"}
if(fuel<=0){fuel=0;document.getElementById("fuel").innerHTML=fuel;document.getElementById("fuel").style.color="#d32e12";document.onclick=motorOff();document.onkeydown=motorOff}else{}}else{document.onkeydown=motorOff();document.onclick=motorOff()}}
function jugar(){confirmar=confirm("Estas seguro que quieres reiniciar el juego");if(confirmar)
window.location.href="index.html"
else{}}
function puntuacion(acierto){puntos=(v-5)*(-1000)+(50*fuel)-(acierto);puntos=Math.trunc(puntos)}
function explosion(){puntuacion(-5000)
confirmar=confirm("Lo siento has fracasado....\nQuieres volver a intentarlo\n"+"Has conseguido "+puntos+" puntos");if(confirmar)
window.location.href="index.html"
else{}}