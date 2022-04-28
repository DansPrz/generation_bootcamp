/* function saludar(){
    alert('Hola');
}
*/
/*Manejador de eventos semantico */
/* const $botonSemantico = document.getElementById('evento-semantico');

$botonSemantico.onclick = saludar; */

function saludar(){
    alert('hola desde un manejador de eventos');
}

const $botonSemantico = document.getElementById('eventoSemantico');
const $botonMultiple = document.getElementById('eventoMultiple');


$botonMultiple.addEventListener('click',function(evento){
     console.log(evento.target);
});

$botonSemantico.onclick = saludar;

$botonSemantico.onclick = function(evento){
    //alert('hola desde una funcion anonima');
    console.log(evento);
    console.log(evento.target);
}