/*
Selectores
*/

const $parrafo = document.getElementById('parrafo');
console.log('$parrafo');

const $titulo = document.querySelector('.titulo');
console.log($titulo);

const $parrafos = document.querySelectorAll('p');
console.log($parrafos[1]);
console.log($parrafos.length);

const $titulos = document.querySelectorAll('div h1')