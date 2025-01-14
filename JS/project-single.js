const productos =[
    { id: 1, nombre: "Web Emergencias", descripcion:"Descripción del producto 1", precio: "10€" },
    { id: 2, nombre: "App Reproductor de Música", descripcion:"Descripción del producto 2", precio: "10€" },
    { id: 3, nombre: "Chef Connect", descripcion:"Descripción del producto 3", precio: "10€" },
];

const contenedorProducto = document.getElementById("producto");

const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get("id");

const producto = producto.find(p => p.id == productoId);

if (producto) {
    contenedorProducto.innerHTML = `
    <article class="product">
    <h2>${producto.nombre}</h2>
    <p><strong>Descripción:</strong> ${producto.descripcion}</p>
    <p><strong>Precio:</strong> ${producto.precio}</p>
    </article>
    `;
} else {
    document.getElementById("producto").innerHTML = "<p>Producto no encontrado.</p>";
}