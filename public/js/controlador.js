function registrar(){
    
    validarCampoVacio("txt-firstname");
    validarCampoVacio("txt-lastname");
    validarCampoVacio("txt-email");
    validarCampoVacio("txt-password");
    validarCampoVacio("txt-birthday");

    var usuario = {};
    usuario.firstname =  document.getElementById("txt-firstname").value;
    usuario.lastname =  document.getElementById("txt-lastname").value;
    usuario.email =  document.getElementById("txt-email").value;
    usuario.password =  document.getElementById("txt-password").value;
    usuario.birthday =  document.getElementById("txt-birthday").value;
    
    console.log(usuario);
}

function validarCampoVacio(id){
    if (document.getElementById(id).value==""){
        document.getElementById(id).classList.remove("is-valid");
        document.getElementById(id).classList.add("is-invalid");
    } else{
        document.getElementById(id).classList.remove("is-invalid");
        document.getElementById(id).classList.add("is-valid");
    }
}

function validarCorreo(etiqueta) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(etiqueta.value)){
        etiqueta.classList.remove("is-invalid");
        etiqueta.classList.add("is-valid");
    } else{
        etiqueta.classList.remove("is-valid");
        etiqueta.classList.add("is-invalid");
    }   
}