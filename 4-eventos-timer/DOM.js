'use strict'
// BOM browser oject model

console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.location);

function abrirVentana(url){
    window.open(url,"", "width= 100px , heigth=300px");
}
