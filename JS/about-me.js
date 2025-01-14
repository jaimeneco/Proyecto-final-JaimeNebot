//-------------------------------------------------------------
// 1. VARIABLES
//-------------------------------------------------------------
const headers = document.querySelectorAll(".acordeon-header");
const items = document.querySelectorAll(".acordeon-item");

//-------------------------------------------------------------
// 2. FUNCIONES Y EVENT LISTENERS
//-------------------------------------------------------------
headers.forEach((header) => {
    header.addEventListener("click", () => {
        const item = header.closest(".acordeon-item");
        item.classList.toggle("active");
    });
});

//-------------------------------------------------------------
// 3.INICIAR JS
//-------------------------------------------------------------
headers[0].click();