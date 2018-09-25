//Variables y array
var personajes=[];
var nombrePersonajes = "";
var peliculas=[];
var nombrePeliculas = "";
var planetas=[];

//Buscando informacion de las urls
function getP(url, callback){
    var httpX = new XMLHttpRequest();
        httpX.onload = function(){
        if(callback){
            callback(JSON.parse(this.responseText));  
        }
    }
    httpX.onerror = function(){
        console.log(Error('Error 🤮'));
    }
    httpX.open('GET',url,true);
    httpX.send();
}

//Buscar toda la informacion con promesas
getP('https://swapi.co/api/people/',function(data){
        personajes.push(data.results);

        personajes.forEach(item => {
            let array = Array.from(item)

            for (var i = 0; i < array.length; i++) {
                nombrePersonajes = array[i].name
                urlPersonajes = array[i].url

                var miSelect = document.getElementById("miSelect");

                // Creamos un objeto option
                var miOption = document.createElement("option");

                // Añadimos las propiedades value y label
                miOption.setAttribute("value", urlPersonajes);
                miOption.setAttribute("label", nombrePersonajes);

                // Añadimos el option al select
                miSelect.appendChild(miOption);
            }

        });

        getP('https://swapi.co/api/films/',function(data2){
                // console.log(data2.results);
                peliculas.push(data2.results);

                peliculas.forEach(item2 => {
                    let array = Array.from(item2)
                    for(var i=0; i<array.length;i++){
                        nombrePeliculas=array[i].title
                        // console.log(nombrePeliculas)
                    }
        
                });

                getP('https://swapi.co/api/planets/',function(data3){
                        // console.log(data3.results);
                        planetas.push(data3);
                })
        });
});

//Evento select
function myFunction() {
    document.getElementById("info").style.visibility = "visible";
    var url = document.getElementById("miSelect").value;
    renderRepositorios(url);
}

//Buscar datos personales personaje con ajax
function renderRepositorios(url){
    var data = [];
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState==4 && this.status == 200){
            data = JSON.parse(this.responseText);

            if(data.name === "Luke Skywalker"){
                document.getElementById("avatar").src= "./assets/img/personaje1.jpg";
            }
            if(data.name === "C-3PO"){
                document.getElementById("avatar").src= "./assets/img/personaje2.jpg";
            }
            if(data.name === "R2-D2"){
                document.getElementById("avatar").src= "./assets/img/personaje3.png";
            }
            if(data.name === "Darth Vader"){
                document.getElementById("avatar").src= "./assets/img/personaje4.jpg";
            }
            if(data.name === "Leia Organa"){
                document.getElementById("avatar").src= "./assets/img/personaje5.jpeg";
            }
            if(data.name === "Owen Lars"){
                document.getElementById("avatar").src= "./assets/img/personaje6.jpg";
            }
            if(data.name === "Beru Whitesun lars"){
                document.getElementById("avatar").src= "./assets/img/personaje7.jpg";
            }
            if(data.name === "R5-D4"){
                document.getElementById("avatar").src= "./assets/img/personaje8.jpg";
            }
            if(data.name === "Biggs Darklighter"){
                document.getElementById("avatar").src= "./assets/img/personaje9.jpg";
            }
            if(data.name === "Obi-Wan Kenobi"){
                document.getElementById("avatar").src= "./assets/img/personaje10.jpg";
            }

            document.getElementById('nombre').innerHTML = "Nombre: " + data.name;
            document.getElementById('estatura').innerHTML = "Estatura: " + data.height + "cm";
            document.getElementById('peso').innerHTML = "Peso: " + data.mass + "kg";
            document.getElementById('colorojos').innerHTML = "Color de ojos: " + data.eye_color;
        }
    }
    req.open('GET',url,true);
    req.send();
}

//Funcion para reiniciar la aplicacion
function reiniciarJuego(){
	location.reload();
}

