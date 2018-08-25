var express = require("express");	// Creamos la variable express
var bodyParser = require("body-parser");
var session = require("express-session");
var mysql = require("mysql");

var app = express();			// Creamos la variable app

var credenciales = {
    user:"root",
    password:"",
    port:"3306",
    host:"localhost",
    database:"db_harmony_code"
};
app.use(express.static("public"));	          //public es el nombre de la carpeta publica
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(session({secret:"ASDFE$%#%",resave:true, saveUninitialized:true}));

var publicAdmin = express.static("public_admin");
var publicBasico = express.static("public_basico");
var publicEstandar = express.static("public_estandar");
var publicPremium = express.static("public_premium");

app.use(
    function(request,response,next){
        if (request.session.correo){
            //Significa que el usuario si esta logueado
            if (request.session.codigoTipoUsuario == 1)
                publicAdmin(request,response,next);
            else if (request.session.codigoTipoUsuario == 2)
                publicBasico(request,response,next);
            else if (request.session.codigoTipoUsuario == 3)
                publicEstandar(request,response,next);
            else if (request.session.codigoTipoUsuario == 4)
                publicPremium(request,response,next);
        }
        else
            return next();
    }
);

///Para agregar seguridad a una ruta especifica:
function verificarAutenticacion(request, response, next){
	if(request.session.correo)
		return next();
	else
		response.send("ERROR, ACCESO NO AUTORIZADO");
}

app.post("/login", function(request, response){
    var conexion = mysql.createConnection(credenciales);
    
    conexion.query("SELECT CODIGO_USUARIO, CODIGO_GENERO, CODIGO_TIPO_USUARIO, CODIGO_LUGAR, NOMBRE_USUARIO, APELLIDO_USUARIO, CORREO, FOTO_PERFIL, FOTO_PORTADA, FECHA_NACIMIENTO, FECHA_REGISTRO FROM tbl_usuarios WHERE CORREO = ? AND CONTRASENIA= ?",
        [request.body.correo, request.body.contrasena],
        function(err, data, fields){
                if (data.length>0){
                    request.session.correo = data[0].CORREO;
                    request.session.codigoUsuario = data[0].CODIGO_USUARIO;
                    request.session.codigoTipoUsuario = data[0].CODIGO_TIPO_USUARIO;
                    data[0].estatus = 0;
                    response.send(data[0]); 
                }else{
                    response.send({estatus:1, mensaje: "Login fallido"}); 
                }
            	
         }
    ); 
});

app.get("/obtener-usuario-logeado", function(request, response){
    var conexion = mysql.createConnection(credenciales);
    var sql = 'SELECT CODIGO_USUARIO, CODIGO_GENERO, CODIGO_TIPO_USUARIO, CODIGO_LUGAR, NOMBRE_USUARIO, APELLIDO_USUARIO, CORREO, FOTO_PERFIL, FOTO_PORTADA, FECHA_NACIMIENTO, FECHA_REGISTRO FROM tbl_usuarios WHERE CODIGO_USUARIO = ? ';

    conexion.query(sql,[request.session.codigo_usuario],
    function(err, data, fields){
        if (err) throw err;
        console.log(data);
    });   
});

app.post("/registrar-usuarios",function(request,response){

    var conexion = mysql.createConnection(credenciales);

    var sql = `INSERT INTO tbl_usuarios(CODIGO_USUARIO, CODIGO_GENERO, CODIGO_TIPO_USUARIO, 
                CODIGO_LUGAR, NOMBRE_USUARIO, APELLIDO_USUARIO, CORREO, CONTRASENIA,
                FOTO_PERFIL, FOTO_PORTADA, FECHA_NACIMIENTO, FECHA_REGISTRO) 
                VALUES (NULL,?,2,NULL,?,?,?,?,?,NULL,?,CURDATE())`;
    
    conexion.query(sql,
        [request.body.genero, request.body.nombre, request.body.apellido, 
        request.body.correo, request.body.contrasena, 
        request.body.urlimagen, request.body.fechaNacimiento],
        
        function(err, result){
            if (err) throw err;
            response.send(result);
            console.log("1 record inserted");
            
        }
    );

    
});

app.get("/obtener-sesion", function(request, response){
    response.send("Valor de la variable de sesion almacenado: " + request.session.correo);
 });
 
 app.get("/logout",function(request, response){
     request.session.destroy();
     response.redirect("index.html");
 });

app.listen(3000);		           // especificamos el puerto de escucha disponible
console.log("Servidor Iniciado");
