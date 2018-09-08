var conta = 0;

function contaclick(){
	return conta +=1; 
}

function iniciar(){
	
	var boton = document.getElementById('boton');
    var palabra = seleccionarPalabra();

	palabra = palabra.toUpperCase();
	
    var espacio = new Array(palabra.length);

	mostrarPista(espacio);

	boton.addEventListener('click', function(){
		agregarLetra(palabra, espacio);
	});
}

function seleccionarPalabra(){
	var palabras = ["bootcamp", "platzi", "mouse", "hola", "objeto", "clase"];
	var pos = Math.round(Math.random() * palabras.length - 1);
	return palabras[pos];
}

function mostrarPista(espacio){
	var pista = document.getElementById('pista');
	var texto = '';

	for (var i = 0; i < espacio.length; i++) {
		if (espacio[i] !== undefined){
			texto += espacio[i] + ' ';
		} else {
			texto += '_ ';
		}
	}

	pista.innerText = texto;
}

function agregarLetra(palabra, espacio){
	var l = document.getElementById('letra');
    
	var letra = l.value;
	
	l.value = '';
	mostrarPalabra(palabra, letra, espacio);
	l.focus();
}

function mostrarPalabra(palabra, letra, espacio){
	var p;
	var btn_refresh = document.getElementById('refresh');
	letra = letra.toUpperCase();
	var encontrado = false;

	for (p in palabra){
		if (letra == palabra[p]){
			espacio[p] = letra;
			encontrado = true;
			contador;
		}
	}

	if(encontrado ==false){
		var contador = contaclick(); 
		if(contador==1){
			document.getElementById("contador").innerHTML = "Primer intento te quedan 4";
			document.getElementById('opcion').src = "img/opcion1.png";
		}
		if(contador==2){
			document.getElementById("contador").innerHTML = "Segundo intento te quedan 3";
			document.getElementById('opcion').src = "img/opcion2.png";
		}
		if(contador==3){
			document.getElementById("contador").innerHTML = "Tercer intento te quedan 2";
			document.getElementById('opcion').src = "img/opcion3.png";
		}
		if(contador==4){
			document.getElementById("contador").innerHTML = "Cuarto intento te queda 1";
			document.getElementById('opcion').src = "img/opcion4.png";
		}
		if(contador==5){
			document.getElementById("contador").innerHTML = "Ultimo intento";
			document.getElementById('opcion').src = "img/opcion5.png";
		}
		if(contador==6){
			document.getElementById("contador").innerHTML = "Has perdido";
			document.getElementById('opcion').src = "img/opcion6.png";
			btn_refresh.style.display = 'inline';
			btn_refresh.addEventListener('click', reiniciarJuego);
		}
	}
	
	mostrarPista(espacio);

	for (var aux = false, i = 0; i < espacio.length; i++){
		if (espacio[i] === undefined){
			aux = true;
		} else if (i == espacio.length - 1 && !aux){
			document.getElementById("contador").innerHTML = "Palabra encontrada";
			btn_refresh.style.display = 'inline';
            btn_refresh.addEventListener('click', reiniciarJuego);
		}
	}

}

function reiniciarJuego(){
	location.reload();
}