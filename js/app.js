const productos = [
    {
        nombre: 'televisor',
        precio: 10000,
    },
    {
        nombre: 'celular',
        precio: 4500,
    },
    {
        nombre: 'auricluares',
        precio: 2000,
    }
]; 

let carrito = [];

let seleccion = prompt("Hola, desea comprar algun producto? si o no.")

while(seleccion != "si" && seleccion != "no" ) {
    alert("por favor ingresa si o no")
    seleccion = prompt ("desea comprar algo? si o no.")
}

if (seleccion == "si"){
    alert("a continuacion nuestros productos.");
    let todoslosProductos = productos.map((productos) => `Nombre: ${productos.nombre}\n Precio: ${productos.precio}\n`);
    alert (todoslosProductos)
}else if (seleccion == "no"){
    alert("gracias por venir, hasta pronto")
}

while(seleccion != "no"){
    let producto = prompt ("agrega un producto al carrito")
    let precio = 0 

    if(producto == "televisor" || producto == "celular" || producto == "auriculares"){

    switch(producto){
        case "televisor":
            precio = 10000;
            break;
        case "celular":
            precio = 4500;
            break;
        case "auriculares":
            precio = 2000;
            break;
    }
    let  unidades = parseInt(prompt("cuantas unidades desea."))

    carrito.push({producto,unidades,precio})
    console.log(carrito)

}else{
    alert("no tenemos ese porducto")
}

seleccion = prompt("desea seguir comprando?")

while(seleccion === "no"){
    alert("gracias por su Compra.")
    carrito.forEach((carritoFinal) => { 
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
}
}

const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades,0)
alert(`El total a pagar por la compra es de ${total}`)




const fechaOferta = new Date(2023, 9, 22, 12, 0 ,0);
const contador = () => {
    const ahora = new Date();
    const tiempoRestante = fechaOferta - ahora;

    if(tiempoRestante <=0){
        document.getElementById('contador').innerHTML = 'La oferta ha terminado!';
    } else {
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));
        const minutos =  Math.floor((tiempoRestante %(1000 * 60 * 60)) / (1000 * 60));
        const segundos =  Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        const contadorHTML = `Finaliza en: ${dias}d ${horas}hs ${minutos}m ${segundos}s`;
        document.getElementById('contador').innerHTML = contadorHTML;

    }

}

setInterval(contador, 1000);