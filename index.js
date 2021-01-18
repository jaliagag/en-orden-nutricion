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
    const myForm = dgebi("miFormu");
    if (validation()) {
        myForm.addEventListener("submit", (e) => {
            e.preventDefault()

            const formData = new FormData(this); // new form data object ; this refers to the form itself
            const searchParams = new URLSearchParams();

            for (const pair of formData) {
                searchParams.append(pair[0], pair[1]);
            }

            fetch('login.php', {
                method: 'post'
                , body: searchParams
            }).then((r) => {
                return r.text();
            }).then((text)=> {
                console.log(text)
            }).catch((error) => {
                console.log(error)
            })
        })
        //dgebi("myForm").submit;
        alert('Formulario enviado - nos comunicaremos con vos a la brevedad; si no querés esperar, te dejamos abajo más formas de contactarnos')
    }
}