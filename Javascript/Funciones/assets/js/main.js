/*Las funciones nos permiten reutilizar código*/

function saludar(nombre="Panchito",apellido=""){
/*     let nombre = 'Daniel'; */
    //string Normal
    //console.log('Hola mi nombre es:', nombre, apellido);
    // Template Strings || Plantillas laterales
    //console.log(`Hola mi nombre es ${nombre?"Daniel":"Desconocido"}`);
    return `Mi nombre es ${nombre}${apellido}`

}
saludar("Daniel", "Pèrez");

let funcionSaludar = saludar('Felipe ', 'Maqueda');
console.log(funcionSaludar);
console.log(saludar('Alberto ', 'Hernandez'));

/* 
document.write('<h1>Este es un h1</h1>');
console.log('<h1>Este es un h1</h1>');
console.log(`<h1>Este es un h1</h1>`); // Plantilla Literal */

funcionSaludar.toLowerCase();

/*Funciones declaradas*/
function suma(a,b){
    return a + b;
}
console.log(suma(10,20));

/*Funciones expresadas*/
const resta = function (a,b){
    return a-b;
}
console.log(resta(30,10));

/*Funcion flecha*/
const multiplicacion = (a,b) => a * b;
console.log(multiplicacion(40,5));