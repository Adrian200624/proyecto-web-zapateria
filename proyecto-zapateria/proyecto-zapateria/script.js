// Hora actual
document.getElementById("hora").value = new Date();

// Select dinámico
function actualizar() {

    let select = document.getElementById("contacto");
    select.innerHTML = '<option value="">Seleccione una opción</option>';

    if (telefono.value !== "") {
        select.innerHTML += '<option>Teléfono</option>';
    }

    if (correo.value !== "") {
        select.innerHTML += '<option>Email</option>';
    }

    if (instagram.value !== "") {
        select.innerHTML += '<option>Instagram</option>';
    }

}

correo.oninput = actualizar;
telefono.oninput = actualizar;
instagram.oninput = actualizar;

// Papelera
function borrar(){
    document.getElementById("comentarios").value = "";
}