window.onload = function(){

	/*//mostrar men� m�vil*/
    document.getElementById("showm").onclick = function () {
		document.getElementById("cpanel").style.display = "none";
		document.getElementsByClassName("c")[0].style.display = "block";
		document.getElementById("showm").innerHTML="";
	}
	/*//ocultar men� dificultad*/
	document.getElementById("hidem").onclick = function () {
		document.getElementById("cpanel").style.display = "block";
		document.getElementsByClassName("c")[0].style.display = "none";
		document.getElementById("showm").innerHTML="SHOW MENU";

	}
}	      