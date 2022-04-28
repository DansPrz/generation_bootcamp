/*Algunas cosas que podemos hacer con DOM */
console.log(window.document);
console.log(document);
console.log(document.head); //Regresa el Head del documento
console.log(document.body); //Regresa el body del documento
console.log(document.documentElement); //Regresa todo el HTML
console.log(document.doctype);
console.log(document.charset);
console.log(document.links);
console.log(document.images);
console.log(document.styleSheets);
console.log(document.scripts); //Regresa las etiquetas de script

setTimeout(()=> {
    console.log(document.getSelection().toString());
}, 3000);

document.write('Hola mundo desde document write'); //Inserta el mensaje dentro del body
