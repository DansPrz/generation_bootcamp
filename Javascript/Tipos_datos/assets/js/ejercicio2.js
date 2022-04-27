const Jonathan = {
    nombreCompleto: {
        nombre: "Yair",
        apellido: "Uriostegui"
    },
    edad: 23,
    pasatiempos: ["nadar","dibujar","anime"]
}

const victor = {
  nombreCompleto: {
    nombre: "Víctor Manuel",
    apellido: "Soto Alexander",
  },
  edad: 26,
  pasatiempos: ["anime", "leer", "tomar"],
}

const Mitzi = {
    nomCompleto: {
        nom: "Mitzi",
        app: "Hernandez"
    },
    edad: 23,
    pasatiempos: ["jugar", "dibujar", "ver series"],
}

const Katia = {
    nombreCompleto: {
      nombre: "Katia",
      apellido: "Alvarez",
    },
    edad: 28,
    pasatiempos: ["Cine", "Musica", "Baile"],
  }
  
  const Abi = {
    nombreCompleto:{
        nombre: "Abigail",
        apellido: "Moreno"
    }, 
    edad:23, 
    pasatiempos: ["bailar", "plantas", "fotografía"], 
}

const Pedro = {
    nombreCompleto: {
        nombre: "Antonio",
        apellido: "Castañón"
    },
    edad: 18,
    pasatiempos: ["jugar","salir","series"],
}

const Adolfo = {
    /* atributos o datos como info */
    nombreCompleto:{
        nombre: "Adolfo",
        apellido:"Gutierrez"
    },

     edad: 28,
     pasatiempos: ["ajedrez", "box", "leer"],
}

const Daniel = {
    nombreCompleto: {
        nombre: "Daniel",
        apellido: "Perez",
    },
    edad: 24,
    pasatiempos: ["fotografia", "peliculas", "leer"],
}

const cohorte12 = [Jonathan, victor, Mitzi, Katia, Abi, Pedro, Adolfo, Daniel]
console.log(cohorte12[0])

for(let i=0; i<cohorte12.length; i++){
    if(cohorte12[i].pasatiempos.includes("leer")){
        console.log(cohorte12[i].nombreCompleto.nombre)
    }
}