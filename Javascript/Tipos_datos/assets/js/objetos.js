const nombre = "Daniel";
const nombre2 = new String("Pedro");
new Date()

const persona = new Object();
persona.nombre = "Daniel"
persona.apellido = "Perez"
persona.edad = "23"

console.log(nombre.toLowerCase())
console.log(nombre2.toLowerCase())
console.log(persona)

const nuevaPersona = {
    /* Atributos o propiedades */
    nombreCompleto: {
        nombre: "Angeles",
        apellido: "Reyes",
    },
    edad: 23,
    pasatiempos: ["nadar", "dibujar", "cantar"],
}
    tieneTrabajo: true,
    /* Mètodo */
    saludar: function(){
        console.log("Hola")
    },
    sumar: function(n1,n2){
        console.log(`El resultado de la suma es: ${n1 + n2}`)
    }
}

"Hola".lenght /* Atributo o propiedad */
"Hola".toLowerCase() /* Metodo */

console.log(nuevaPersona);
console.log(nuevaPersona.edad);
console.log(nuevaPersona.nombreCompleto.nombre);
console.log(nuevaPersona.pasatiempos[1]);

nuevaPersona.saludar()
nuevaPersona.sumar(10,5)

/* Para cambiar el valor */

nuevaPersona.edad = 10
console.log(nuevaPersona)

/* Agregar un nuevo atributo */
nuevaPersona.colorFavorito = "Morado"
console.log(nuevaPersona.colorFavorito)


console.log(nuevaPersona.hasOwnProperty("edades"))

console.log(Object.keys(nuevaPersona))
console.log(Object.values(nuevaPersona))


const nuevaPersona = {
    nombreCompleto: {
        nombre: "Daniel",
        apellido: "Perez",
    },
    edad: 24,
    pasatiempos: ["fotografia", "peliculas", "leer"],
}