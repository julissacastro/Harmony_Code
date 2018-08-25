
$("#registrar").click(function(){
    var parametros = "nombre="+$("#nombre").val()+
    "&apellido="+$("#apellido").val()+
    "&correo="+$("#correo").val()+
    "&contrasena="+$("#contrasena").val()+
    "&fechaNacimiento="+$("#fNacimiento").val()+
    "&genero="+$("#radio").val()+
    "&urlimagen="+$("#urlImagen").val();

    alert(parametros);
	$.ajax({
        url:"/registrar-usuarios",
        data:parametros,
        method:"POST",
        dataType:"json",
        success:function(respuesta){
            console.log(respuesta);
            alert("Registrado");
        }
    });
});