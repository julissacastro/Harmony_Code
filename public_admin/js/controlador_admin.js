$(document).ready(function(){
	
	$.ajax({
		url:"/obtener-usuario-logeado",
		dataType:"json",
		success:function(respuesta){
            console.log(respuesta);            
            alert(respuesta);            
				/*$("#slc-usuario").append('<option value="'+respuesta.codigo_usuario+'">'+respuesta.nombre_usuario+'</option>');
				$("#perfil_usuario").append(
                    `<a class="dropdown-toggle" data-toggle="dropdown">
                    <img src="${respuesta.FOTO_PERFIL}" class="user-image" alt="User Image">
                    <span class="hidden-xs">${respuesta.NOMBRE_USUARIO}</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="user-header">
                      <img src="${respuesta.FOTO_PERFIL}" class="img-circle" alt="User Image">
                      <p>
                      ${respuesta.NOMBRE_USUARIO + respuesta.APELLIDO_USUARIO} - Web Developer
                      </p>
                    </li>`
                );*/
            }
        });

});

$("#btn-registrar").click(function(){
    var parametros = "nombre="+$("#registrarNombre").val()+
    "&apellido="+$("#registrarApellido").val()+
    "&correo="+$("#registrarCorreo").val()+
    "&contrasena="+$("#registrarContrasena").val()+
    "&fechaNacimiento="+$("#registrarFechaNacimiento").val()+
    "&genero="+$("#optionsRadios1").val()+
    "&urlimagen="+$("#registrarUrlImagen").val();

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