document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("toggleDark");
    const body = document.querySelector('body');

    toggle.addEventListener("click", function() {
        body.classList.toggle('toggleDark'); // Agrega o quita la clase 'dark-mode' al body
        toggle.classList.toggle('bx-sun'); // Alterna entre los íconos 'bx-moon' y 'bx-sun'
        if(this.classList.toggle('bx-moon')){
            body.style.background='#FFFFE8'
            body.style.color='#040D12'
            body.style.transition="2s"
        }else{
            body.style.background='#040D12'
            body.style.color='#FFFFE8'
        }
    });
});