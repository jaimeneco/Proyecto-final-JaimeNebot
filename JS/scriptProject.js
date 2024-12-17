
// 1. Creamos variables y constantes
const listaBotones = document.querySelectorAll(".Tabs-button");
const listaPaginas = document.querySelectorAll(".Tabs-contenido");

// 2. Creamos funciones y eventListeners
listaBotones.forEach(boton => {
    boton.addEventListener("click", () => {

        //leer el dataset con atributo en "data-tab"
        // por ejemplo si tengo "data-edad" debería leerlo con "boton.dataset.edad"
        const targetId = boton.dataset.tab;
        const target = document.getElementById(targetId);
        console.log(targetId)

        quitarClases();

        // al target con id "paginaX" le agregue la clase u-visible
        target.classList.add("u-visible");

        // agregar la clase active al Tabs-Button
        boton.classList.add("u-active");

        // listaBotones.forEach( item => {
        //     item.classList.remove("u-active");
        // })
        // listaBotones.forEach( item => {
        //     item.classList.remove("u-active");
        // })
    });
});
//funcion que quita clases a mis elementos activos
function quitarClases() {
    listaBotones.forEach(item => {
        item.classList.remove("u-active");
    })
    listaPaginas.forEach(pagina => {
        pagina.classList.remove("u-visible");
    })
}


// 3. Iniciamos nuestro programa
listaBotones[0].click();