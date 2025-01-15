//-------------------------------------------------------------
// 1. VARIABLES
//-------------------------------------------------------------
const headers = document.querySelectorAll(".Acordeon-itemHeader");
const items = document.querySelectorAll(".Acordeon-item");

//-------------------------------------------------------------
// 2. FUNCIONES Y EVENT LISTENERS
//-------------------------------------------------------------
headers.forEach((header) => {
    header.addEventListener("click", () => {
        const item = header.closest(".Acordeon-item");
        item.classList.toggle("active");
    });
});

//-------------------------------------------------------------
// 3.INICIAR JS
//-------------------------------------------------------------
headers[0].click();