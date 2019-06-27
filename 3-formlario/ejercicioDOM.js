'use strict'

window.addEventListener("load",function(){

   var formulario = document.querySelector("#formulario");
   var box_dashed= document.querySelector(".dashed");
   box_dashed.style.display= "none";

   formulario.addEventListener('submit',function(){
    
        console.log("evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos= document.querySelector("#apellidos").value;
        var edad =document.querySelector("#edad").value;

        if(nombre.trim() ==null || nombre.trim().length ==0){
            alert("el nombre no es valido");
            return false;
        }

        if(apellidos.trim() ==null || apellidos.trim().length ==0){
            alert("Los apellidos no son validos");
            return false;
        }

        if(edad.trim() ==null || edad<=0 || !isNaN()){
            alert("La edad no es valida");
            return false;
        }

        box_dashed.style.display= "block";

        console.log(nombre, apellidos, edad);
        var datos_usuario= ["Nombre: "+nombre, "Apellido: "+apellidos,"Edad: "+ edad];

        

        for(var indice in datos_usuario){
            var parrafo= document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
            
        }  
       // ojo como limpiar pantalla formulario
       
   });
   
});
