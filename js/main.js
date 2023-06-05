const categoria = document.querySelector("#categoria")
const cantidad = document.querySelector("#cantidad")
const totalAPagar = document.querySelector("#totalAPagar")

function resumen(){
    let resultado

    switch (categoria.value) {
        case "Estudiante":
            resultado = (200 - (200 * 0.8)) * cantidad.value
            break;
        case "Trainee":
            resultado = (200 - (200 * 0.5)) * cantidad.value
            break;
        case "Junior":
            resultado = (200 - (200 * 0.15)) * cantidad.value
            break
        default:
            break;
    }
    totalAPagar.value = `Total a pagar: $${resultado}`
}