'use strict'
window.addEventListener("load", function(){

    var formulario = document.querySelector("#formulario");

    formulario.addEventListener('submit', function(){

       var titulo = document.querySelector("#addpelicula").value;
       var t2 = titulo.trim();
        if(t2.length >=1){
            localStorage.setItem(titulo,titulo);
        }

    });
    
    var ul =document.querySelector("#listPeliculas")
    for( var i in localStorage){

        if(typeof localStorage[i]==="string"){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }     
    }

    var formulariob = document.querySelector("#formBorrar");

    formulariob.addEventListener('submit', function(){

       var titulo = document.querySelector("#borrarPelicula").value;
       var t2 = titulo.trim();
       
        if(t2.length >=1){
            localStorage.removeItem(titulo);            
        }
        
    
       

    });
});