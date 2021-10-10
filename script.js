function validarUsuario(formulario) {
    let usuario = formulario.usuario.value
    let contraseña = formulario.contraseña.value
    let hayArroba = false

    if (usuario && contraseña) {

        for (let i = 0; i < usuario.length; i++) {
            if (usuario[i] == '@') {
                hayArroba = true
                break
            }

        }

        if (hayArroba) {
            alert("Formulario Enviado.")
        } else {
            alert("Falta el arroba.")
        }
    } else {
        alert("Complete los campos.")
    }


}