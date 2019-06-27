'use strict'
// LocalStorage
window.addEventListener('load',function(){

    // comprobar si el localstorage esta disponible
if(typeof(Storage) !=='undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("LocalStorage no disponible");   
}

// guardar datos en el localstorage

localStorage.setItem("titulo","curso de master javaScript");

// recuperar elelemento

console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");


// guardar objetos

var usuario={
    nombre: 'victor',
    email: 'holamundo@kkk.com',
    web:'holandasweb.es'
};

localStorage.setItem("usuario", JSON.stringify(usuario));


//recuperar objeto

var userjs= JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);


// remueve un dato del localstorage
localStorage.removeItem("usuario");

//localStorage.clear();

});

