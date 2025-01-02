
const headers = document.querySelectorAll(".acordeon-header");
const items = document.querySelectorAll(".acordeon-item");

headers.forEach((header) => {
    header.addEventListener("click", () => {
        const item = header.closest(".acordeon-item");
        item.classList.toggle("active");
    });
});

headers[0].click();