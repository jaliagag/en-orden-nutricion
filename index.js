let dgebi = (value) => {
    return document.getElementById(value);
}

let validation = () => {
    let name = dgebi("name").value;
    let email = dgebi("email").value;

    if (name == '' || email == '') {
        alert("Por favor, completa los campos requeridos - nombre y correo electrónico");
        return false;
    } else {
        return true;
    }
}

let submitForm = () => {
    if (validation()) {
        dgebi("myForm").submit;
        alert('Formulario enviado - nos comunicaremos con vos a la brevedad; si no querés esperar, te dejamos abajo más formas de contactarnos')
    }
}