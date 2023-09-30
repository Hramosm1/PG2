const Joi = require('joi');

const id_nombres_empleados = Joi.number();
const id_empleado = Joi.number();
const no_orden = Joi.number();
const nombre = Joi.string();

const createNombreEmpleadoSchema = Joi.object({
    id_empleado: id_empleado.required(),
    no_orden: no_orden.required(),
    nombre: nombre.required(),
});

const updateNombreEmpleadoSchema = Joi.object({
    id_empleado: id_empleado,
    no_orden: no_orden,
    nombre: nombre,
});

const getNombreEmpleadoSchema = Joi.object({
    id_nombres_empleados: id_nombres_empleados.required(),
});

module.exports = { createNombreEmpleadoSchema, updateNombreEmpleadoSchema, getNombreEmpleadoSchema }