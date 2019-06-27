
var fecha = new Date();
var year = fecha.getFullYear();
var mes= fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();
var tex= "";
if(hora >12){
hora1= (hora-12);
tex=":pm"
}

if(hora <12){
    hora1= (hora);
    tex=":am"
    }

console.log(fecha);

var textoHora = `
    el año es: ${year}
    el mes es: ${mes+1}
    el dia es:${dia}
    la hora es: ${hora1+tex}
`;

console.log(textoHora);