const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.querySelector("form")
console.log(formulario);

const inputs = document.querySelectorAll("input")
console.log(inputs);

const nombreError = document.querySelector("#errorNombre");
const apellidoError = document.querySelector("#errorApellido");
const emailError = document.querySelector("#errorEmail");
const passwordError = document.querySelector("#errorPassword");
const telefonoError = document.querySelector("#errorTelefono");

/* console.log(nombreError, apellidoError, emailError, passwordError, telefonoError); */

const statusInf = {
	nombre: false,
	apellido: false,
	email: false,
	password: false,
	telefono: false
}



inputs.forEach((input)=>{
	console.log(input);
	input.addEventListener("keyup", (e)=>{
		console.log(e.target.name);

		switch(e.target.name){
			case "nombre":
				console.log(e.target.value);
				if(expresiones.nombre.test(e.target.value)){
					/* console.log("Nombre Correcto") */
					statusInf.nombre = true
					nombreError.textContent = ""
				}else{
					/* console.log("Nombre Incorrecto") */
					statusInf.nombre = false
					nombreError.textContent = "error"
				}
				break
			case "apellido":
				console.log(e.target.value);
				if(expresiones.nombre.test(e.target.value)){
					/* console.log("Apellido Correcto") */
					statusInf.apellido = true
					apellidoError.textContent = ""
				}else{
					/* console.log("Apellido Incorrecto") */
					statusInf.apellido = false
					apellidoError.textContent = "error"
				}
				break
			case "email":
				console.log(e.target.value);
				if(expresiones.email.test(e.target.value)){
					/* console.log("Email Correcto") */
					statusInf.email = true
					emailError.textContent = ""
				}else{
					/* console.log("Email Incorrecto") */
					statusInf.email = false
					emailError.textContent = "error"
				}
				break
			case "password":
				console.log(e.target.value);
				if(expresiones.password.test(e.target.value)){
					/* console.log("Password Correcto") */
					statusInf.password = true
					passwordError.textContent = ""
				}else{
					/* console.log("Password Incorrecto") */
					statusInf.password = false
					passwordError.textContent = "error"
				}
				break
			case "telefono":
				console.log(e.target.value);
				if(expresiones.telefono.test(e.target.value)){
					/* console.log("Telefono Correcto") */
					statusInf.telefono = true
					telefonoError.textContent = ""
				}else{
					/* console.log("Telefono Incorrecto") */
					statusInf.telefono = false
					telefonoError.textContent = "error"
				}
				break
		}
	})

})

formulario.addEventListener("submit", (e)=>{
	e.preventDefault();
	
const check = document.querySelector("#terminos").checked
console.log(check)
	
	if(!Object.values(statusInf).includes(false) && check == true){
		/* console.log("Enviado") */
		document.querySelector(".alert-danger").style.display = "none"
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos)
		formulario.reset()
	}else{
		/* console.log("No Enviado") */
		document.querySelector(".alert-danger").style.display = "block"
	}
})