//-------------------------------------------------------------
// 1. VARIABLES
//-------------------------------------------------------------
const listaBotones = document.querySelectorAll(".Tabs-button");
const listaPaginas = document.querySelectorAll(".Tabs-contenido");

//-------------------------------------------------------------
// 2. FUNCIONES Y EVENT LISTENERS
//-------------------------------------------------------------
listaBotones.forEach(boton => {
    boton.addEventListener("click", () => {

        const targetId = boton.dataset.tab;
        const target = document.getElementById(targetId);
        console.log(targetId)

        quitarClases();

        target.classList.add("u-visible");

        boton.classList.add("u-active");
    });
});

function quitarClases() {
    listaBotones.forEach(item => {
        item.classList.remove("u-active");
    })
    listaPaginas.forEach(pagina => {
        pagina.classList.remove("u-visible");
    })
}

//-------------------------------------------------------------
// 3.INICIAR JS
//-------------------------------------------------------------
listaBotones[0].click();