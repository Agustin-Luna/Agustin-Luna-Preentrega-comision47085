const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    };
const contenido = document.getElementById("shopContent");
const verCarrito = document.getElementById ("verCarrito")
const modalContainer = document.getElementById("modal-container");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProduct = async () => {
    const respuesta = await fetch("data.json");
    const data = await respuesta.json();


    data.forEach((casaca) => {
        let content = document.createElement("div");
        content.className = "card";
        content.setAttribute("data-aos", "flip-left");
        content.setAttribute("data-aos-up", "fade");
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
            Toastify({
        
                text: "Se agrego al carrito",
                
                duration: 2000
                
                }).showToast();
        
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
}; 
getProduct();








