var datosperfil={};

function getRequestGit(){
    var nombre = document.getElementById('user').value;
    var estatura = document.getElementById('estatura').value;
    var peso = document.getElementById('peso').value;
    var colorojos = document.getElementById('colorojos').value;
    alert(colorojos);
    var peticion  = new  XMLHttpRequest();
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            datosperfil = JSON.parse(this.responseText)
            // document.getElementById("contenedorform").style.display = "block";
            var imagen=document.getElementById('avatar');
            imagen.setAttribute('src',datosperfil.avatar_url)
            document.getElementById('nombre').innerHTML = datosperfil.name
            document.getElementById('Estatura').innerHTML = estatura + " cm"
            document.getElementById('Peso').innerHTML = peso + "kg"
            document.getElementById('Colorojos').innerHTML = "Ojos " + colorojos
            console.log(datosperfil);
        }
    }
    peticion.open('GET','https://api.github.com/users/' + nombre,true);
    peticion.send();

    document.getElementById('vermas').href = "https://github.com/" + nombre;
}

function renderRepositorios(url){
    var data = [];
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState==4 && this.status == 200){
            data = JSON.parse(this.responseText);
            document.getElementById('repositorios').innerHTML = this.responseText;
        }
    }
    req.open('GET',url,true);
    req.send();
}

function reiniciarJuego(){
	location.reload();
}

