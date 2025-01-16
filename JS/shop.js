document.addEventListener("DOMContentLoaded",() =>{
    const checkboxes = document.querySelector(".Btn-item");
    const contadorItem = document.getElementById("Contador-item");
    const precioTotal = document.getElementById("Contador-precio");

    let cart = {
        items: 0,
        total: 0,
    };

    //Actualizar
    const updateCart = () => {
        contadorItem.textContent = cart.items;
        precioTotal.textContent = cart.total.toFixed(2);
        //Guardar para usar en shop.html
        localStorage.setItem("cart", JSON.stringify(cart));
    };
    //Manejar el evento de click
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (e) => {
            const price = parseFloat(e.target.getAttribute("data-price"));
            if (e.target.checked) {
                cart.items += 1;
                cart.total += price;
            }else{
                cart.items -= 1;
                cart.total -= price;
            }
            updateCart();
        });
    });
    //Iniciar carrito desde local storage
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
        cart = savedCart;
        updateCart();
    }
});