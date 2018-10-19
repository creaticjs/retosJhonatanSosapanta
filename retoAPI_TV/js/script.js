//Variables y array
var personajes=[];

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
getP('http://api.tvmaze.com/shows',function(data){
        
        personajes.push(data);

        var cont = document.getElementById("contenedor");
        var cont2 = document.getElementById("contenedor2");
        var series = "";
        var estrenos = "";

        personajes.forEach(item => {
            let array = Array.from(item)
            for (var i = 0; i < array.length; i++) {
                var res = array[i].summary.slice(0,150);
                var arrayy = array[i].premiered.split('');
                var ano = parseInt(arrayy[0] + arrayy[1] + arrayy[2] + arrayy[3])
                if(ano === 2014 & i < 15){
                    if(i===2){
                        estrenos += "<div class='carousel-item item" + i + " active'>" + "<div class='carousel-caption d-none d-md-block'>" + 
                         "</div>" + "</div>"
                    }else{
                        estrenos += "<div class='carousel-item item" + i + "'>" + "<div class='carousel-caption d-none d-md-block'>" + 
                         "</div>" + "</div>"
                    }
                    i += 1;
                }
                series += "<div class='col-lg-4 col-sm-6 portfolio-item'" + "<div class='card h-80'>" + "<a href='"+ array[i].url +"'><img class='card-img-top' src='"+ array[i].image.medium +"' alt=''></a>" + 
                          "<div class='card-body letrasBlancas'>" + "<h4 class='card-title'></h4>" + "<a>"+ "<strong class='letrasBlancas'>" + array[i].name + "</strong>" +"</a>" + "</h4>" + "<p class='card-text'>"+ res +"</p>" + 
                          "</div>" + "</div>" + "</div>"
            }
            cont2.innerHTML = estrenos;
            cont.innerHTML = series;
        });
});

// //Evento select
// function myFunction() {
//     document.getElementById("info").style.visibility = "visible";
//     document.getElementById("imagen").style.display = "none";
//     var url = document.getElementById("miSelect").value;
//     repositorioPersonajes(url);
// }

// //Buscar datos personales personaje con ajax
// function repositorioPersonajes(url){
//     var data = [];
//     var req = new XMLHttpRequest();
//     req.onreadystatechange = function(){
//         if(this.readyState==4 && this.status == 200){
//             data = JSON.parse(this.responseText);
//             debugger
//             repositorioPeliculas(data.films[0])

//             if(data.name === "Luke Skywalker"){
//                 document.getElementById("avatar").src= "./assets/img/personaje1.jpg";
//             }
//             if(data.name === "C-3PO"){
//                 document.getElementById("avatar").src= "./assets/img/personaje2.jpg";
//             }
//             if(data.name === "R2-D2"){
//                 document.getElementById("avatar").src= "./assets/img/personaje3.png";
//             }
//             if(data.name === "Darth Vader"){
//                 document.getElementById("avatar").src= "./assets/img/personaje4.jpg";
//             }
//             if(data.name === "Leia Organa"){
//                 document.getElementById("avatar").src= "./assets/img/personaje5.jpeg";
//             }
//             if(data.name === "Owen Lars"){
//                 document.getElementById("avatar").src= "./assets/img/personaje6.jpg";
//             }
//             if(data.name === "Beru Whitesun lars"){
//                 document.getElementById("avatar").src= "./assets/img/personaje7.jpg";
//             }
//             if(data.name === "R5-D4"){
//                 document.getElementById("avatar").src= "./assets/img/personaje8.jpg";
//             }
//             if(data.name === "Biggs Darklighter"){
//                 document.getElementById("avatar").src= "./assets/img/personaje9.jpg";
//             }
//             if(data.name === "Obi-Wan Kenobi"){
//                 document.getElementById("avatar").src= "./assets/img/personaje10.jpg";
//             }

//             document.getElementById('nombre').innerHTML = "Nombre: " + data.name;
//             document.getElementById('estatura').innerHTML = "Estatura: " + data.height + "cm";
//             document.getElementById('peso').innerHTML = "Peso: " + data.mass + "kg";
//             document.getElementById('colorojos').innerHTML = "Color de ojos: " + data.eye_color;
//         }
//     }
//     req.open('GET',url,true);
//     req.send();
// }

// //Buscar datos de peliculas con ajax
// function repositorioPeliculas(films){
//     var data = [];
//     var req = new XMLHttpRequest();
//     req.onreadystatechange = function(){
//         if(this.readyState==4 && this.status == 200){
//             data = JSON.parse(this.responseText);
//             debugger
//             repositorioPlanetas(data.planets[0])

//             switch(data.title){
//                 case "A New Hope":
//                      document.getElementById('avatar2').src= "./assets/img/pelicula1_7.jpg";
//                      break;
//                 case "The Empire Strikes Back":
//                      document.getElementById('avatar2').src= "./assets/img/pelicula1_1.jpg";
//                      break;
//                 case "Return of the Jedi":
//                      document.getElementById('avatar2').src= "./assets/img/pelicula1_3.jpg";
//                      break;
//                 case "The phantom Menace":
//                      document.getElementById('avatar2').src= "./assets/img/pelicula1_4.jpg";
//                      break;
//                 case "Attack of the Clones":
//                      document.getElementById('avatar2').src= "./assets/img/pelicula1_5.jpg";
//                      break;
//                 case "Revenge of the Sith": 
//                      document.getElementById('avatar2').src= "./assets/img/pelicula1_2.jpg"; 
//                      break;
//                 case "The Force Awakens": 
//                      document.getElementById('avatar2').src= "./assets/img/pelicula1_6.jpg"; 
//                      break;
//                 default:
//                      document.getElementById('avatar2').src= "";     
//             }

//             document.getElementById('titulo').innerHTML = "Titulo: " + data.title;
//             document.getElementById('productor').innerHTML = "Productor: " + data.producer;
//             document.getElementById('director').innerHTML = "Director: " + data.director;
//             document.getElementById('fechalanza').innerHTML = "Fecha de lazamiento: " + data.release_date;
//         }
//     }
//     req.open('GET',films,true);
//     req.send();
// }

// //Buscar datos de peliculas con ajax
// function repositorioPlanetas(planets){
//     var data = [];
//     var req = new XMLHttpRequest();
//     req.onreadystatechange = function(){
//         if(this.readyState==4 && this.status == 200){
//             data = JSON.parse(this.responseText);
//             debugger
//             switch(data.name){
//                 case "Hoth":
//                      document.getElementById('avatar3').src= "./assets/img/planeta1_1.png";
//                      break;
//                 case "Dagobah": 
//                      document.getElementById('avatar3').src= "./assets/img/planeta1_2.jpg"; 
//                      break;  
//                 case "Bespin":
//                     document.getElementById('avatar3').src = "./assets/img/planeta1_3.png";
//                     break; 
//                 case "Endor": 
//                      document.getElementById('avatar3').src= "./assets/img/planeta1_4.png"; 
//                      break;  
//                 case "Naboo": 
//                      document.getElementById('avatar3').src= "./assets/img/planeta1_5.jpg"; 
//                      break;     
//                 case "Coruscant": 
//                      document.getElementById('avatar3').src= "./assets/img/planeta1_6.jpg"; 
//                      break; 
//                 case "Alderaan": 
//                      document.getElementById('avatar3').src= "./assets/img/planeta1_7.jpg"; 
//                      break;     
//                 default:
//                      document.getElementById('avatar3').src= "";     
//             }

//             document.getElementById('nombreP').innerHTML = "Nombre: " + data.name;
//             document.getElementById('diametro').innerHTML = "Diametro: " + data.diameter;
//             document.getElementById('clima').innerHTML = "Clima: " + data.climate;
//             document.getElementById('terreno').innerHTML = "Terreno: " + data.terrain;
//         }
//     }
//     req.open('GET',planets,true);
//     req.send();
// }

