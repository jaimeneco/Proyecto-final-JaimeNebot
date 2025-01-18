//-------------------------------------------------------------
// 1. VARIABLES y addEventListeners
//-------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo');

//-------------------------------------------------------------
// 2. FUNCIONES
//-------------------------------------------------------------
    setTimeout(() => {
        titulo.classList.add('aparece');
    }, 100);
});
