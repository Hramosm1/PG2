const Joi = require('joi');

const id_telefono_empleado = Joi.number();
const id_empleado = Joi.number();
const telefono_empleado = Joi.number();
const estado_telefono_empleado = Joi.bool();

const createTelefonoEmpleadoSchema = Joi.object({
    id_empleado: id_empleado.required(),
    telefono_empleado: telefono_empleado.required(),
    estado_telefono_empleado: estado_telefono_empleado.required(),
});

const updateTelefonoEmpleadoSchema = Joi.object({
    id_empleado: id_empleado,
    telefono_empleado: telefono_empleado,
    estado_telefono_empleado: estado_telefono_empleado,
});

const getTelefonoEmpleadoSchema = Joi.object({
    id_telefono_empleado: id_telefono_empleado.required(),
});

module.exports = { createTelefonoEmpleadoSchema, updateTelefonoEmpleadoSchema, getTelefonoEmpleadoSchema }