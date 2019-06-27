'use strict'

//JSON - javaScript object notation

window.addEventListener("load",function(){
    var pelicula={
        titulo: 'batma vs superman',
        year: 2017,
        pais: 'EEUU'
    };
    
    var peliculas=[
        {titulo: 'la verdad duele', year: 2016, pais:'francia'},
        pelicula
    ];
    
    var caja_peliculas=document.querySelector("#peliculas");
    var index;
    for (index in peliculas){
        var p= document.createElement("p");
        caja_peliculas.append(p);
        p.append(peliculas[index].titulo);

    };

});

