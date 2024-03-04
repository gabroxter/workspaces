let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
let arrayPersonasRegistradas = new Array("Juan Carlos","Juan David","Rafael");
let bandera = false;

function Registra(){
    nombre = document.getElementById("userName1").value;
    miClave = document.getElementById("userName1").value;
    //alert(nombre + miClave);
    arrayPersonasRegistradas.push(nombre);
    alert("Se registro correctamente " + nombre);
}
function IniciaSesion(){
    nombre = document.getElementById("nameLogin").value;
    miClave = document.getElementById("passLogin").value;
    for (var i = 0; i < arrayPersonasRegistradas.length; i++){
        if(nombre==arrayPersonasRegistradas[i]){
            bandera=true;
        }
    }
    if(bandera==true){
        alert(nombre + miClave);
    }
    else{
        alert("El usuario no se encuentra registrado");
    }
}
/*
function buttons(){
    number = document.getElementById("num").value;
    
}*/
let btn = document.querySelector(".btn");
let div1 = document.querySelector(".contador");
let sumar = 1;

document.querySelector(".contador").innerText = 0;

btn.addEventListener("click", function () {
	div1.innerText = parseInt(div1.innerText) + sumar;
});
