const contenido = document.getElementById("shopContent");
const verCarrito = document.getElementById ("verCarrito")
const modalContainer = document.getElementById("modal-container");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

casacas.forEach((casaca) => {
let content = document.createElement("div");
content.className = "card";
content.innerHTML = `
<img src="${casaca.img}">
<h3 class="nombre">${casaca.nombre}</h3>
<p class="costo">${casaca.precio}</p>
`;
shopContent.append(content);


let comprar = document.createElement("button")
comprar.innerText = "comprar";
content.append(comprar)
comprar.className = "comprar"; 


comprar.addEventListener("click", () => {
    const repeticion = carrito.some ((repeticionCasaca) => repeticionCasaca.id === casaca.id);
if(repeticion){
    carrito.map((prod) => {
        if(prod.id === casaca.id){
            prod.cantidad ++;
        }
    });
}else {
    carrito.push({
        id: casaca.id,
        nombre: casaca.nombre,
        precio: casaca.precio,
        img: casaca.img,
        cantidad: casaca.cantidad,
    });
    saveLocal();
}; 
});
});
const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};


