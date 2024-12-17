// 1. Declarar variables y constantes:
const headers = document.querySelectorAll(".acordeon-header");
const items = document.querySelectorAll(".acordeon-item");

// 2. Crear funciones y listeners:
// 2.1 Pasar por todas las cabeceras, agregarles un click y agregar active al que le haga click
headers.forEach((header) => {
    header.addEventListener("click", () => {
        //alert("click");
        const item = header.closest(".acordeon-item");

        // quitar el active de todos: se puede poner como comentario o no
        // items.forEach( elemento => {
        //     elemento.classList.remove("active");
        // });

        // agregar el active a item
        item.classList.toggle("active");
    });
});


// 3. Ejecutar nuestro programa: hacer click en el primer elemento.
headers[0].click();