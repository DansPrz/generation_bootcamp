const teclado = document.querySelector('Espaciado-de-teclas');

document.addEventListener('keypress', (event) => {
    const teclas = 'Key':${event.key}, keyCode:${event.keyCode}, code:${event.code};
    const listaTecla = document.createElement('li');
    listaTecla.textContent = teclas;
    teclado.appendChild(listaTecla);
});