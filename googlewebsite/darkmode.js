const botonMode = document.querySelector('#botonMode');
const body = document.body;
 
function botonCambiar() {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    botonMode.checked = body.classList.contains('dark-mode');
}
