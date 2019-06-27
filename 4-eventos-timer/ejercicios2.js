'use strict'
/*
1. pida 6 numeros por pantalla y los introduce en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y la consosla
3.ordenanrlo y mostrarlo
4. invertir su orden y mostrarlo
5. mostrar cuantos elelmentos tiene el array
6. hacer una busqueda de un valor introducido por el usuario, decir se lo encuentra y su indice.
*/ 

// var numeros = new Array(6);
function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1> Contenido del array"+ textoCustom+"</h1>");
    document.write("<ul>");
    numeros.forEach((elementos, index) =>{
    document.write("<li>"+ elementos+"</li>");
    });
    document.write("</ul>");

}


var numeros=[];

for(var i = 0; i <= 5; i++){
    // numeros[i]= parseInt(prompt("introduce un numero",0));
    numeros.push(parseInt(prompt("introduce un numero",0)));
}
console.log(numeros);
//document.write(numeros +' ');
mostrarArray(numeros);

numeros.sort(function(a,b){return a-b});
console.log(numeros);
mostrarArray(numeros, ' ordenando');
//invertir y mostrar

numeros.reverse();
mostrarArray(numeros, ' invertido');

// mostrar o contar elelemeentos del array
document.write("<h1> el array tiene: </h1>"+ numeros.length+" elemeentos");


//Busqueda
var busqueda = parseInt(prompt(" numero a buscar",0));

var posicion= numeros.findIndex( numero => numero == busqueda);

if(posicion != -1){
    document.write("<hr/> <h1> ENCONTRADO </h1>");
    document.write("<h1>Posicion de la busqueda: "+ posicion +"</h1>");
    }
    else{
        document.write("<h1> no encontrado</h1>")
    }