var personajes=[];
var nombrePersonajes = "";
var peliculas=[];
var nombrePeliculas = "";
var planetas=[];
var especie=[];

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

getP('https://swapi.co/api/people/',function(data){
        // console.log(data.results);
        personajes.push(data.results);

        personajes.forEach(item => {
            let array = Array.from(item)

            for (var i = 0; i < array.length; i++) {
                nombrePersonajes = array[i].name

                var miSelect = document.getElementById("miSelect");

                // Creamos un objeto option
                var miOption = document.createElement("option");

                // Añadimos las propiedades value y label
                miOption.setAttribute("value", nombrePersonajes);
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

                        getP('https://swapi.co/api/species/',function(data4){
                            //    console.log(data4.results);
                               especie.push(data4);
                        });
                })
        });
});

function reiniciarJuego(){
	location.reload();
}

