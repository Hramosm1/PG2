-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: eve_personal
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `apellidos_empleados`
--

DROP TABLE IF EXISTS `apellidos_empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apellidos_empleados` (
  `id_apellidos_empleados` int NOT NULL AUTO_INCREMENT,
  `id_empleado` int DEFAULT NULL,
  `no_orden` int DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_apellidos_empleados`),
  KEY `id_empleado` (`id_empleado`),
  CONSTRAINT `apellidos_empleados_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apellidos_empleados`
--

LOCK TABLES `apellidos_empleados` WRITE;
/*!40000 ALTER TABLE `apellidos_empleados` DISABLE KEYS */;
/*!40000 ALTER TABLE `apellidos_empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asistencia`
--

DROP TABLE IF EXISTS `asistencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asistencia` (
  `id_asistencia` int NOT NULL AUTO_INCREMENT,
  `id_empleado` int DEFAULT NULL,
  `fecha_hora` datetime DEFAULT NULL,
  PRIMARY KEY (`id_asistencia`),
  KEY `id_empleado` (`id_empleado`),
  CONSTRAINT `asistencia_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asistencia`
--

LOCK TABLES `asistencia` WRITE;
/*!40000 ALTER TABLE `asistencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `asistencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documento`
--

DROP TABLE IF EXISTS `documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documento` (
  `id_documento` int NOT NULL AUTO_INCREMENT,
  `id_tipo_documento` int DEFAULT NULL,
  `id_empleado` int DEFAULT NULL,
  `no_documento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_documento`),
  KEY `id_tipo_documento` (`id_tipo_documento`),
  KEY `id_empleado` (`id_empleado`),
  CONSTRAINT `documento_ibfk_1` FOREIGN KEY (`id_tipo_documento`) REFERENCES `tipo_documento` (`id_tipo_documento`),
  CONSTRAINT `documento_ibfk_2` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documento`
--

LOCK TABLES `documento` WRITE;
/*!40000 ALTER TABLE `documento` DISABLE KEYS */;
/*!40000 ALTER TABLE `documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email_empleado`
--

DROP TABLE IF EXISTS `email_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `email_empleado` (
  `id_email_empleado` int NOT NULL AUTO_INCREMENT,
  `id_empleado` int DEFAULT NULL,
  `email_empleado` varchar(255) DEFAULT NULL,
  `estado_email_empleado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_email_empleado`),
  KEY `id_empleado` (`id_empleado`),
  CONSTRAINT `email_empleado_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_empleado`
--

LOCK TABLES `email_empleado` WRITE;
/*!40000 ALTER TABLE `email_empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `email_empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email_empresa`
--

DROP TABLE IF EXISTS `email_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `email_empresa` (
  `id_email_empresa` int NOT NULL AUTO_INCREMENT,
  `id_empresa` int DEFAULT NULL,
  `email_empresa` varchar(255) DEFAULT NULL,
  `estado_email_empresa` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_email_empresa`),
  KEY `id_empresa` (`id_empresa`),
  CONSTRAINT `email_empresa_ibfk_1` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`id_empresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_empresa`
--

LOCK TABLES `email_empresa` WRITE;
/*!40000 ALTER TABLE `email_empresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `email_empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `id_empleado` int NOT NULL AUTO_INCREMENT,
  `id_puesto` int DEFAULT NULL,
  PRIMARY KEY (`id_empleado`),
  KEY `id_puesto` (`id_puesto`),
  CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`id_puesto`) REFERENCES `puesto` (`id_puesto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `id_empresa` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `id_estado` int DEFAULT NULL,
  PRIMARY KEY (`id_empresa`),
  KEY `id_estado` (`id_estado`),
  CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`id_estado`) REFERENCES `estado_empresa` (`id_estado_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (2,'Toledo',1),(3,'Bayer',6),(5,'Unipharm',8);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entrevista`
--

DROP TABLE IF EXISTS `entrevista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entrevista` (
  `id_entrevista` int NOT NULL AUTO_INCREMENT,
  `id_estado_entrevista` int NOT NULL,
  `id_plaza` int NOT NULL,
  `fecha_entrevista` datetime DEFAULT NULL,
  PRIMARY KEY (`id_entrevista`),
  KEY `fk_entrevista_estado_entre` (`id_estado_entrevista`),
  KEY `fk_entrevista_plaza` (`id_plaza`),
  CONSTRAINT `fk_entrevista_estado_entre` FOREIGN KEY (`id_estado_entrevista`) REFERENCES `estado_entrevista` (`id_estado_entrevista`),
  CONSTRAINT `fk_entrevista_plaza` FOREIGN KEY (`id_plaza`) REFERENCES `plaza` (`id_plaza`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entrevista`
--

LOCK TABLES `entrevista` WRITE;
/*!40000 ALTER TABLE `entrevista` DISABLE KEYS */;
INSERT INTO `entrevista` VALUES (1,3,3,'2023-09-20 00:00:00');
/*!40000 ALTER TABLE `entrevista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_empresa`
--

DROP TABLE IF EXISTS `estado_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado_empresa` (
  `id_estado_empresa` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_estado_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_empresa`
--

LOCK TABLES `estado_empresa` WRITE;
/*!40000 ALTER TABLE `estado_empresa` DISABLE KEYS */;
INSERT INTO `estado_empresa` VALUES (1,'Activa'),(6,'Edición'),(8,'Fuera de coverturas');
/*!40000 ALTER TABLE `estado_empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_entrevista`
--

DROP TABLE IF EXISTS `estado_entrevista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado_entrevista` (
  `id_estado_entrevista` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_estado_entrevista`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_entrevista`
--

LOCK TABLES `estado_entrevista` WRITE;
/*!40000 ALTER TABLE `estado_entrevista` DISABLE KEYS */;
INSERT INTO `estado_entrevista` VALUES (1,'Pendiente'),(2,'Aprobada'),(3,'Rechazada');
/*!40000 ALTER TABLE `estado_entrevista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_plaza`
--

DROP TABLE IF EXISTS `estado_plaza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado_plaza` (
  `id_estado_plaza` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_estado_plaza`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_plaza`
--

LOCK TABLES `estado_plaza` WRITE;
/*!40000 ALTER TABLE `estado_plaza` DISABLE KEYS */;
/*!40000 ALTER TABLE `estado_plaza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_publicacion`
--

DROP TABLE IF EXISTS `estado_publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado_publicacion` (
  `id_estado_publicacion` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_estado_publicacion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_publicacion`
--

LOCK TABLES `estado_publicacion` WRITE;
/*!40000 ALTER TABLE `estado_publicacion` DISABLE KEYS */;
INSERT INTO `estado_publicacion` VALUES (1,'Publicado'),(2,'Pendiente');
/*!40000 ALTER TABLE `estado_publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hora_extra`
--

DROP TABLE IF EXISTS `hora_extra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hora_extra` (
  `id_hora_extra` int NOT NULL AUTO_INCREMENT,
  `id_empleado` int DEFAULT NULL,
  `fecha_hora` datetime DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`id_hora_extra`),
  KEY `id_empleado` (`id_empleado`),
  CONSTRAINT `hora_extra_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hora_extra`
--

LOCK TABLES `hora_extra` WRITE;
/*!40000 ALTER TABLE `hora_extra` DISABLE KEYS */;
/*!40000 ALTER TABLE `hora_extra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medio_difusion`
--

DROP TABLE IF EXISTS `medio_difusion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medio_difusion` (
  `id_medio_difusion` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_medio_difusion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medio_difusion`
--

LOCK TABLES `medio_difusion` WRITE;
/*!40000 ALTER TABLE `medio_difusion` DISABLE KEYS */;
INSERT INTO `medio_difusion` VALUES (1,'Compu trabajo'),(3,'Tecoloco');
/*!40000 ALTER TABLE `medio_difusion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modulos`
--

DROP TABLE IF EXISTS `modulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modulos` (
  `id_modulo` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_modulo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulos`
--

LOCK TABLES `modulos` WRITE;
/*!40000 ALTER TABLE `modulos` DISABLE KEYS */;
INSERT INTO `modulos` VALUES (1,'Empresas edit',1),(3,'Nuevo modulo',1),(4,'Nueva descripcion',1),(5,'Test modulo',1),(6,'Test modulo 2',1),(7,'Test modulo 3',1),(8,'Test modulo 4',1);
/*!40000 ALTER TABLE `modulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nombres_empleados`
--

DROP TABLE IF EXISTS `nombres_empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nombres_empleados` (
  `id_nombres_empleados` int NOT NULL AUTO_INCREMENT,
  `id_empleado` int DEFAULT NULL,
  `no_orden` int DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_nombres_empleados`),
  KEY `id_empleado` (`id_empleado`),
  CONSTRAINT `nombres_empleados_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nombres_empleados`
--

LOCK TABLES `nombres_empleados` WRITE;
/*!40000 ALTER TABLE `nombres_empleados` DISABLE KEYS */;
/*!40000 ALTER TABLE `nombres_empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nomina`
--

DROP TABLE IF EXISTS `nomina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nomina` (
  `id_nomina` int NOT NULL AUTO_INCREMENT,
  `id_empleado` int DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  PRIMARY KEY (`id_nomina`),
  KEY `id_empleado` (`id_empleado`),
  CONSTRAINT `nomina_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nomina`
--

LOCK TABLES `nomina` WRITE;
/*!40000 ALTER TABLE `nomina` DISABLE KEYS */;
/*!40000 ALTER TABLE `nomina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos` (
  `id_permiso` int NOT NULL AUTO_INCREMENT,
  `id_modulo` int DEFAULT NULL,
  `id_rol` int DEFAULT NULL,
  `r` tinyint(1) DEFAULT NULL,
  `w` tinyint(1) DEFAULT NULL,
  `u` tinyint(1) DEFAULT NULL,
  `d` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_permiso`),
  KEY `id_modulo` (`id_modulo`),
  KEY `id_rol` (`id_rol`),
  CONSTRAINT `permisos_ibfk_1` FOREIGN KEY (`id_modulo`) REFERENCES `modulos` (`id_modulo`),
  CONSTRAINT `permisos_ibfk_2` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
INSERT INTO `permisos` VALUES (1,1,1,1,1,1,1),(2,1,2,1,1,1,1),(3,1,3,1,1,1,1),(4,1,3,1,1,1,1),(6,3,15,1,1,1,1);
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plaza`
--

DROP TABLE IF EXISTS `plaza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plaza` (
  `id_plaza` int NOT NULL AUTO_INCREMENT,
  `id_estado_plaza` int NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_plaza`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plaza`
--

LOCK TABLES `plaza` WRITE;
/*!40000 ALTER TABLE `plaza` DISABLE KEYS */;
INSERT INTO `plaza` VALUES (1,1,'Desarrollador FrontEnd'),(2,2,'Desarrollador BackEnd'),(3,0,'Contador'),(5,1,'Montacarguista');
/*!40000 ALTER TABLE `plaza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion_plaza`
--

DROP TABLE IF EXISTS `publicacion_plaza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicacion_plaza` (
  `id_publicacion_plaza` int NOT NULL AUTO_INCREMENT,
  `id_plaza` int NOT NULL,
  `id_medio_difusion` int NOT NULL,
  `id_estado_publicacion` int NOT NULL,
  `fecha_publicacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_publicacion_plaza`),
  KEY `fk_publicacion_plaza_plaza` (`id_plaza`),
  KEY `fk_publicacion_plaza_medio` (`id_medio_difusion`),
  KEY `fk_publicacion_plaza_estado` (`id_estado_publicacion`),
  CONSTRAINT `fk_publicacion_plaza_estado` FOREIGN KEY (`id_estado_publicacion`) REFERENCES `estado_publicacion` (`id_estado_publicacion`),
  CONSTRAINT `fk_publicacion_plaza_medio` FOREIGN KEY (`id_medio_difusion`) REFERENCES `medio_difusion` (`id_medio_difusion`),
  CONSTRAINT `fk_publicacion_plaza_plaza` FOREIGN KEY (`id_plaza`) REFERENCES `plaza` (`id_plaza`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion_plaza`
--

LOCK TABLES `publicacion_plaza` WRITE;
/*!40000 ALTER TABLE `publicacion_plaza` DISABLE KEYS */;
INSERT INTO `publicacion_plaza` VALUES (2,2,3,2,'2023-09-19 00:00:00'),(3,3,3,2,'2023-09-28 00:00:00');
/*!40000 ALTER TABLE `publicacion_plaza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puesto`
--

DROP TABLE IF EXISTS `puesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `puesto` (
  `id_puesto` int NOT NULL AUTO_INCREMENT,
  `id_tipo_contratacion` int DEFAULT NULL,
  `salario_mensual` decimal(15,2) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_puesto`),
  KEY `id_tipo_contratacion` (`id_tipo_contratacion`),
  CONSTRAINT `puesto_ibfk_1` FOREIGN KEY (`id_tipo_contratacion`) REFERENCES `tipo_contratacion` (`id_tipo_contratacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puesto`
--

LOCK TABLES `puesto` WRITE;
/*!40000 ALTER TABLE `puesto` DISABLE KEYS */;
/*!40000 ALTER TABLE `puesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id_rol` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Desarrollo',1),(2,'Administracion',1),(3,'RRHH',1),(4,'Reclutador',1),(7,'Editar',1),(12,'Implementador',1),(15,'Nuevo rol',1),(16,'nuevo rol 2',1);
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefono_empleado`
--

DROP TABLE IF EXISTS `telefono_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefono_empleado` (
  `id_telefono_empleado` int NOT NULL AUTO_INCREMENT,
  `id_empleado` int DEFAULT NULL,
  `telefono_empleado` varchar(255) DEFAULT NULL,
  `estado_telefono_empleado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_telefono_empleado`),
  KEY `id_empleado` (`id_empleado`),
  CONSTRAINT `telefono_empleado_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefono_empleado`
--

LOCK TABLES `telefono_empleado` WRITE;
/*!40000 ALTER TABLE `telefono_empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefono_empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefono_empresa`
--

DROP TABLE IF EXISTS `telefono_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefono_empresa` (
  `id_telefono_empresa` int NOT NULL AUTO_INCREMENT,
  `id_empresa` int DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `estado_telefono_empresa` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_telefono_empresa`),
  CONSTRAINT `telefono_empresa_ibfk_1` FOREIGN KEY (`id_telefono_empresa`) REFERENCES `empresa` (`id_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefono_empresa`
--

LOCK TABLES `telefono_empresa` WRITE;
/*!40000 ALTER TABLE `telefono_empresa` DISABLE KEYS */;
INSERT INTO `telefono_empresa` VALUES (2,2,'12345678',1);
/*!40000 ALTER TABLE `telefono_empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_contratacion`
--

DROP TABLE IF EXISTS `tipo_contratacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_contratacion` (
  `id_tipo_contratacion` int NOT NULL AUTO_INCREMENT,
  `id_empresa` int DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_tipo_contratacion`),
  KEY `id_empresa` (`id_empresa`),
  CONSTRAINT `tipo_contratacion_ibfk_1` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`id_empresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_contratacion`
--

LOCK TABLES `tipo_contratacion` WRITE;
/*!40000 ALTER TABLE `tipo_contratacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_contratacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_documento`
--

DROP TABLE IF EXISTS `tipo_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_documento` (
  `id_tipo_documento` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `estado_documento` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_tipo_documento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_documento`
--

LOCK TABLES `tipo_documento` WRITE;
/*!40000 ALTER TABLE `tipo_documento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `id_rol` int DEFAULT NULL,
  `usuario` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `id_rol` (`id_rol`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,1,'hramos','admin@gmail.com','25f9e794323b453885f5181f1b624d0b'),(2,1,'mleiva','admin@gmail.com','25f9e794323b453885f5181f1b624d0b'),(3,2,'bmendez','bmendez@gmail.com','25f9e794323b453885f5181f1b624d0b'),(4,1,'sperez','sperez@gmail.com','25f9e794323b453885f5181f1b624d0b'),(5,15,'egomez3','egomez3@gmail.com','25f9e794323b453885f5181f1b624d0b'),(8,4,'agarcia','agarcia@gmail.com','25f9e794323b453885f5181f1b624d0b'),(9,3,'test1','test1@gmail.com','25f9e794323b453885f5181f1b624d0b'),(10,12,'test2','test2@gmail.com','25f9e794323b453885f5181f1b624d0b');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'eve_personal'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-23 21:14:43
