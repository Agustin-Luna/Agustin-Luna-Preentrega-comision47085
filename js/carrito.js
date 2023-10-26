const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement ("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-item">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "Cerrar"
    modalbutton.className = "modal-header-button";
    modalHeader.append(modalbutton);

modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
});

carrito.forEach((casaca) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <img src="${casaca.img}">
    <h3>${casaca.nombre}</h3>
    <p>${casaca.precio} </p>
    <span class="restar"> - </span>
    <p>Cantidad: ${casaca.cantidad}</p>
    <span class="sumar"> + </span>
    <p>Total: ${casaca.cantidad * casaca.precio}</p>
    <button class="borrar-producto">Eliminar Item</button>
    `;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
        if(casaca.cantidad !== 1){
        casaca.cantidad--;
    };
    saveLocal();
    pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar")
    sumar.addEventListener("click", () => {
        casaca.cantidad++;
        saveLocal();
        pintarCarrito();
    });

let eliminar = carritoContent.querySelector(".borrar-producto");
eliminar.addEventListener("click", () => {
    eliminarRemera(casaca.id);
});
});
const total = carrito.reduce ((acc, el) => acc + el.precio * el.cantidad, 0);
const totalPagar = document.createElement("div");
totalPagar.className = "total-content"
totalPagar.innerHTML = `Total a abonar: $ ${total} `;
modalContainer.append(totalPagar);
};
verCarrito.addEventListener("click", pintarCarrito);

const eliminarRemera = (id) => {
    const fuoundId = carrito.find((element) => element.id === id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== fuoundId;
    });
saveLocal();
pintarCarrito();
};