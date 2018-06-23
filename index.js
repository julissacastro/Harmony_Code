var express = require("express");	// Creamos la variable express
var app = express();			// Creamos la variable app

app.use(express.static("public"));	          //public es el nombre de la carpeta publica
app.listen(3000);		           // especificamos el puerto de escucha disponible
console.log("Servidor Iniciado");
