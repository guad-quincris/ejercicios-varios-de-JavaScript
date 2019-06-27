'use strict'
// eventos del raton

window.addEventListener("load", function(){

    var boton= document.querySelector("#boton");

    function cambiarColor(){
        //boton.style.background="red";
        var bgb=boton.style.background;
        if(bgb== "red"){
            boton.style.background= "green";
        }
            else{
                boton.style.background= "red";
            }
        return true;
        }
    var boton = document.querySelector("#boton");
    
    // Click
    boton.addEventListener("click", function(){
        cambiarColor();
    })
    
    
    //Mouse Over
    
    // function cambioColor(){
    //     var bgb=boton.style.color;
    //     if(bgb== "blue"){
    //         boton.style.color= "white";
    //     }
    //         else{
    //             boton.style.color= "blue";
    //         }
    //     return true;
    // }
    
    boton.addEventListener("mouseover", function(){
       boton.style.color= "white" ;
       //cambioColor();
    })
    
    boton.addEventListener("mouseout", function(){
        boton.style.color= "blue" ;
        //cambioColor();
     })
    
    
    
     //focus
     var input=document.querySelector("#campo_nombre");
     input.addEventListener("focus", function(){
        console.log("[focus] estas dentro del imput");
     })
    
    
     //blur
    
     var input=document.querySelector("#campo_nombre");
     input.addEventListener("blur", function(){
        console.log("[blur] estas fuera del imput");
     })
    
     //keydown
     var input=document.querySelector("#campo_nombre");
     input.addEventListener("keydown", function(event){
        console.log("[keydown] estas pulsando esta tecla", String.fromCharCode(event.keyCode));
     })
    
     // keypress
     var input=document.querySelector("#campo_nombre");
     input.addEventListener("keypress", function(event){
        console.log("[keypress] estas presionando esta tecla", String.fromCharCode(event.keyCode));
     })
    
     //keyup
    
     var input=document.querySelector("#campo_nombre");
     input.addEventListener("keyup", function(event){
        console.log("[keyup] tecla soltada", String.fromCharCode(event.keyCode));
     })
    
     
    

})

