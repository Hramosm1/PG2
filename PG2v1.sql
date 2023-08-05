CREATE TABLE `rol` (
  `id_rol` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255),
  `estado` boolean
);

CREATE TABLE `usuarios` (
  `id_usuario` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_rol` integer,
  `usuario` varchar(255),
  `email` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `modulos` (
  `id_modulo` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255),
  `estado` boolean
);

CREATE TABLE `permisos` (
  `id_permiso` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_modulo` integer,
  `id_rol` integer,
  `r` boolean,
  `w` boolean,
  `u` boolean,
  `d` boolean
);

CREATE TABLE `estado_empresa` (
  `id_estado_empresa` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255)
);

CREATE TABLE `empresa` (
  `id_empresa` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255),
  `id_estado` integer
);

CREATE TABLE `email_empresa` (
  `id_email_empresa` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_empresa` integer,
  `email_empresa` varchar(255),
  `estado_email_empresa` boolean
);

CREATE TABLE `telefono_empresa` (
  `id_telefono_empresa` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_empresa` integer,
  `telefono` varchar(255),
  `estado_telefono_empresa` boolean
);

CREATE TABLE `tipo_contratacion` (
  `id_tipo_contratacion` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_empresa` integer,
  `descripcion` varchar(255)
);

CREATE TABLE `puesto` (
  `id_puesto` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_tipo_contratacion` integer,
  `salario_mensual` money,
  `descripcion` varchar(255)
);

CREATE TABLE `tipo_documento` (
  `id_tipo_documento` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255),
  `estado_documento` boolean
);

CREATE TABLE `empleado` (
  `id_empleado` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_puesto` integer
);

CREATE TABLE `documento` (
  `id_documento` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_tipo_documento` integer,
  `id_empleado` integer,
  `no_documento` varchar(255)
);

CREATE TABLE `nombres_empleados` (
  `id_nombres_empleados` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_empleado` integer,
  `no_orden` integer,
  `nombre` varchar(255)
);

CREATE TABLE `apellidos_empleados` (
  `id_apellidos_empleados` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_empleado` integer,
  `no_orden` integer,
  `apellido` varchar(255)
);

CREATE TABLE `email_empleado` (
  `id_email_empleado` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_empleado` integer,
  `email_empleado` varchar(255),
  `estado_email_empleado` boolean
);

CREATE TABLE `telefono_empleado` (
  `id_telefono_empleado` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_empleado` integer,
  `telefono_empleado` varchar(255),
  `estado_telefono_empleado` boolean
);

CREATE TABLE `asistencia` (
  `id_asistencia` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_empleado` integer,
  `fecha_hora` datetime
);

CREATE TABLE `hora_extra` (
  `id_hora_extra` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_empleado` integer,
  `fecha_hora` datetime,
  `cantidad` integer
);

CREATE TABLE `nomina` (
  `id_nomina` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_empleado` integer,
  `fecha_inicio` datetime,
  `fecha_fin` datetime
);

CREATE TABLE `medio_difusion` (
  `id_medio_difusion` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255)
);

CREATE TABLE `estado_plaza` (
  `id_estado_plaza` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255)
);

CREATE TABLE `asignacion_estado_plaza` (
  `id_asignacion_estado_plaza` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_estado_plaza` integer,
  `id_plaza` integer
);

CREATE TABLE `plaza` (
  `id_plaza` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_medio_difusion` integer,
  `id_estado_plaza` integer,
  `descripcion` varchar(255)
);

CREATE TABLE `estado_entrevista` (
  `id_estado_entrevista` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255)
);

CREATE TABLE `entrevista` (
  `id_entrevista` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_plaza` integer,
  `id_estado_entrevista` integer
);

ALTER TABLE `tipo_contratacion` ADD FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`id_empresa`);

ALTER TABLE `puesto` ADD FOREIGN KEY (`id_tipo_contratacion`) REFERENCES `tipo_contratacion` (`id_tipo_contratacion`);

ALTER TABLE `empleado` ADD FOREIGN KEY (`id_puesto`) REFERENCES `puesto` (`id_puesto`);

ALTER TABLE `asistencia` ADD FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`);

ALTER TABLE `hora_extra` ADD FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`);

ALTER TABLE `nomina` ADD FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`);

ALTER TABLE `usuarios` ADD FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`);

ALTER TABLE `permisos` ADD FOREIGN KEY (`id_modulo`) REFERENCES `modulos` (`id_modulo`);

ALTER TABLE `rol` ADD FOREIGN KEY (`id_rol`) REFERENCES `permisos` (`id_rol`);

ALTER TABLE `empresa` ADD FOREIGN KEY (`id_estado`) REFERENCES `estado_empresa` (`id_estado_empresa`);

ALTER TABLE `email_empresa` ADD FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`id_empresa`);

ALTER TABLE `telefono_empresa` ADD FOREIGN KEY (`id_telefono_empresa`) REFERENCES `empresa` (`id_empresa`);

ALTER TABLE `documento` ADD FOREIGN KEY (`id_tipo_documento`) REFERENCES `tipo_documento` (`id_tipo_documento`);

ALTER TABLE `documento` ADD FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`);

ALTER TABLE `nombres_empleados` ADD FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`);

ALTER TABLE `apellidos_empleados` ADD FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`);

ALTER TABLE `telefono_empleado` ADD FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`);

ALTER TABLE `email_empleado` ADD FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`);

CREATE TABLE `medio_difusion_plaza` (
  `medio_difusion_id_medio_difusion` integer,
  `plaza_id_medio_difusion` integer,
  PRIMARY KEY (`medio_difusion_id_medio_difusion`, `plaza_id_medio_difusion`)
);

ALTER TABLE `medio_difusion_plaza` ADD FOREIGN KEY (`medio_difusion_id_medio_difusion`) REFERENCES `medio_difusion` (`id_medio_difusion`);

ALTER TABLE `medio_difusion_plaza` ADD FOREIGN KEY (`plaza_id_medio_difusion`) REFERENCES `plaza` (`id_medio_difusion`);


ALTER TABLE `asignacion_estado_plaza` ADD FOREIGN KEY (`id_estado_plaza`) REFERENCES `plaza` (`id_estado_plaza`);

ALTER TABLE `estado_plaza` ADD FOREIGN KEY (`id_estado_plaza`) REFERENCES `asignacion_estado_plaza` (`id_estado_plaza`);

ALTER TABLE `entrevista` ADD FOREIGN KEY (`id_plaza`) REFERENCES `plaza` (`id_plaza`);

ALTER TABLE `estado_entrevista` ADD FOREIGN KEY (`id_estado_entrevista`) REFERENCES `entrevista` (`id_estado_entrevista`);
