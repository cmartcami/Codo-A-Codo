/*validacion con js*/
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("formulario")
const parrafos = document.getElementById("warning")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    parrafos.innerHTML = ""
    if (nombre.value.length < 3){
        warning += '*El nombre ingresado no es válido. <br>'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warning += '*El correo electrónico ingresado no es válido. <br>'
        entrar = true
    }
    if(!regexPass.test(pass.value)){
        warning += '*La contraseña debe tener al menos 8 caracteres incluyendo un número, una letra mayúscula y una minúscula.' 
        entrar = true
    }
    if(entrar){
        parrafos.innerHTML = warning
    }
})
