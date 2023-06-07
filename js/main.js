const valorTicket = 200;
document.querySelector("#valor_base").innerHTML = valorTicket;
document.querySelector("#costo").innerHTML = valorTicket;

const descuentos = {
    "Estudiante": 0.8,
    "Trainee": 0.5,
    "Junior": 0.15
};
const descuentoEstudiante = 0.8;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.15;

function actualizarMontoTotal() {
    let resultado = valorTicket;

    const cantidadDOM = document.querySelector("#cantidad");
    const categoriaDOM = document.querySelector("#categoria");
    switch (categoriaDOM.value) {
        case "Estudiante":
            resultado = obtenerDescuento(valorTicket, descuentos[categoriaDOM.value]) * cantidadDOM.value
            break;
        case "Trainee":
            resultado = obtenerDescuento(valorTicket, descuentos[categoriaDOM.value]) * cantidadDOM.value
            break;
        case "Junior":
            resultado = obtenerDescuento(valorTicket, descuentos[categoriaDOM.value]) * cantidadDOM.value
            break
        default:
            resultado = valorTicket * cantidadDOM.value;
            break;
    }

    const costoDOM = document.querySelector("#costo");
    costoDOM.innerHTML = resultado;
}

function obtenerDescuento(precio, descuento) {
    return precio - (precio * descuento);
}

function reiniciarForm() {
    document.querySelector("#correo").value = "";
    document.querySelector("#apellido").value = "";
    document.querySelector("#nombre").value = "";
    document.querySelector("#cantidad").value = "";
    document.querySelector("#categoria").value = "";

    const costoDOM = document.querySelector("#costo");
    costoDOM.innerHTML = valorTicket;
}