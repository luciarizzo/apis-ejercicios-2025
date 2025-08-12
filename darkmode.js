const botonMode = document.getElementById('botonMode');
const body = document.body;
 
function botonCambiar() {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        botonMode.checked = true;
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        botonMode.checked = false;
    }
}