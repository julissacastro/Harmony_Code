
INSERT INTO `db_harmony_code`.`tbl_acciones` (`CODIGO_ACCION`, `NOMBRE_ACCION`) VALUES 
('1', 'Borrar'),
('2', 'Mover'), 
('3', 'Agregar'), 
('4', 'Crear'), 
('5', 'Modificar');



INSERT INTO `db_harmony_code`.`tbl_tipos_lugar` (`CODIGO_TIPO_LUGAR`, `NOMBRE_TIPO_LUGAR`) VALUES
 ('1', 'Pais'), 
 ('2', 'Departamento'), 
 ('3', 'Municipio'), 
 ('4', 'Estado'), 
 ('5', 'Provincia');


INSERT INTO `db_harmony_code`.`tbl_tipos_usuarios` (`CODIGO_TIPO_USUARIO`, `NOMBRE_TIPO_USUARIO`) VALUES 
('1', 'Admin'), 
('2', 'Basico'), 
('3', 'Estandar'), 
('4', 'Premium');


INSERT INTO `db_harmony_code`.`tbl_tipo_documento` (`CODIGO_TIPO_DOCUMENTO`, `NOMBRE_TIPO_DOCUMENTO`) VALUES 
('1', 'Carpeta'),
('2', 'Archivo');



INSERT INTO `db_harmony_code`.`tbl_lugares` (`CODIGO_LUGAR`, `CODIGO_TIPO_LUGAR`, `CODIGO_LUGAR_PADRE`, `NOMBRE_LUGAR`, `LATITUD`, `LONGITUD`) VALUES 
('1', '1', NULL, 'Honduras', NULL, NULL),
('2', '2', 1, 'Francisco Morazan', NULL, NULL),
('3', '3', 2, 'Tegucigalpa', NULL, NULL),
('4', '2', 1, 'San Pedro Sula', NULL, NULL),
('5', '2', 1, 'Choluteca', NULL, NULL),
('6', '2', 1, 'Ocotepeque', NULL, NULL),
('7', '3', 2, 'Valle de Angeles', NULL, NULL),
('8', '3', 2, 'Cantarranas', NULL, NULL);


INSERT INTO `db_harmony_code`.`tbl_generos` (`CODIGO_GENERO`, `NOMBRE_GENERO`) VALUES
 ('1', 'Masculino'),
 ('2', 'Femenino');
 
INSERT INTO `db_harmony_code`.`tbl_estado_notificacion` (`CODIGO_ESTADO_NOTIFICACION`, `NOMBRE_ESTADO_NOTIFICACION`) VALUES 
('1', 'Leido'),
('2', 'No leido');



INSERT INTO `db_harmony_code`.`tbl_acciones` (`CODIGO_ACCION`, `NOMBRE_ACCION`) VALUES
('1', 'Crear'), 
('2', 'Agregar'), 
('3', 'Modificar'), 
('4', 'Mover'), 
('5', 'Eliminar');



INSERT INTO `db_harmony_code`.`tbl_usuarios` (`CODIGO_USUARIO`, `CODIGO_GENERO`, `CODIGO_TIPO_USUARIO`, `CODIGO_LUGAR`, `NOMBRE_USUARIO`, `APELLIDO_USUARIO`, `CORREO`, `CONTRASENIA`, `FOTO_PERFIL`, `FOTO_PORTADA`, `FECHA_NACIMIENTO`, `FECHA_REGISTRO`) VALUES
('1', '2', '1', '7', 'Julissa', 'Castro', 'admin', '$2y$10$LLE5pFVj3EWwY2OJosKuuedF.FiTZy/Pj9AWhmqC5kVgoITka/wL.', NULL, NULL, '1994-07-01', '2018-07-25'),
('2', '1', '2', '4', 'Duglas', 'Ponce', 'dponce', '$2y$10$LLE5pFVj3EWwY2OJosKuuedF.FiTZy/Pj9AWhmqC5kVgoITka/wL.', NULL, NULL, '1999-11-09', '2018-07-26'),
('3', '1', '2', '4', 'Jasiel', 'Ponce', 'jponce', '$2y$10$LLE5pFVj3EWwY2OJosKuuedF.FiTZy/Pj9AWhmqC5kVgoITka/wL.', NULL, NULL, '1999-11-09', '2018-07-26'),
('4', '2', '2', '7', 'Betsabe', 'Lopez', 'blopez', '$2y$10$LLE5pFVj3EWwY2OJosKuuedF.FiTZy/Pj9AWhmqC5kVgoITka/wL.', NULL, NULL, '1999-11-09', '2018-07-26');

---
INSERT INTO `db_harmony_code`.`tbl_planes` (`CODIGO_PLAN`, `NOMBRE_PLAN`, `PESO_MB`, `COSTO_PLAN`, `PERIODICIDAD`, `DESCRIPCION_PLAN`) VALUES 
(1, 'Basico', '15', '0', 'Hasta Agotar Peso', 'Plan inicial de Harmony Code'),
(2, 'Estandar', '100', '25', '1 año o Hasta Agotar Peso', 'Plan recomendado a pequeñas empresas'), 
(3, 'Premium', '1024', '50', '2 años o Hasta Agotar Peso', 'Plan recomendado a grandes empresas');

INSERT INTO `db_harmony_code`.`tbl_suscripciones` (`CODIGO_USUARIO`, `CODIGO_PLAN`, `FECHA_SUSCRIPCION`) VALUES 
('2', '1', '2018-07-28');

INSERT INTO `db_harmony_code`.`tbl_facturacion_pagos` (`CODIGO_FACTURA`, `CODIGO_PLAN`, `CODIGO_USUARIO`, `CODIGO_LUGAR`, `FECHA_INICIO`, `FECHA_FIN`, `MONTO`) VALUES
('1', '1', '2', '4', '2018-07-31', '2021-06-17', '0');

INSERT INTO `db_harmony_code`.`tbl_documento` (`CODIGO_DOCUMENTO`, `CODIGO_DOCUMENTO_PADRE`, `CODIGO_USUARIO_PROPIETARIO`, `CODIGO_TIPO_DOCUMENTO`, `NOMBRE_DOCUMENTO`, `TAMANIO`, `EXTENSION_DOCUMENTO`, `FECHA_CREACION`, `FECHA_MODIFICACION`, `DESCRIPCION`) VALUES
('1', NULL, '1', '1', 'Carpeta 1', '15', 'js', '2018-07-30', NULL, NULL),
('2', '1', '1', '2', 'Archivo 1', '10', 'css', '2018-07-30', NULL, NULL),
('3', NULL, '2', '1', 'Carpeta 1', '15', 'js', '2018-07-30', NULL, NULL),
('4', '1', '2', '2', 'Archivo 1', '10', 'css', '2018-07-30', NULL, NULL),
('5', NULL, '3', '1', 'Carpeta 1', '15', 'js', '2018-07-30', NULL, NULL),
('6', '1', '3', '2', 'Archivo 1', '10', 'css', '2018-07-30', NULL, NULL);

INSERT INTO `db_harmony_code`.`tbl_compartir` (`CODIGO_USUARIO_COMPARTIENDO`, `CODIGO_DOCUMENTO_COMPARTIR`, `CODIGO_USUARIO_COMPARTIDO`, `FECHA_COMPARTIDO`, `ENLACE_COMPARTIR`) VALUES 
('1', '1', '2', '2018-08-01', NULL);

INSERT INTO `db_harmony_code`.`tbl_comentarios` (`CODIGO_COMENTARIO`, `CODIGO_USUARIO`, `CODIGO_COMENTARIO_SUPERIOR`, `CONTENIDO_COMENTARIO`, `FECHA_COMENTARIO`) VALUES 
('1', '1', NULL, 'Bienvenido a Harmony Code', '2018-07-25'),
('2', '2', 1, 'Hola soy usuario 2', '2018-07-25'),
('3', '3', 1, 'Hola soy usuario 3', '2018-07-25'),
('4', '4', 1, 'Hola soy usuario 4', '2018-07-25');

INSERT INTO `db_harmony_code`.`tbl_notificaciones` (`CODIGO_NOTIFICACION`, `CODIGO_USUARIO`, `CODIGO_DOCUMENTO`, `ESTADO_NOTIFICACION`, `CODIGO_COMENTARIO`, `CODIGO_ACCION`, `FECHA_HORA_ACCESO`) VALUES 
('1', '1', '1', '2', '1', '1', '2018-07-25'), 
('2', '1', '2', '2', '2', '2', '2018-07-31');