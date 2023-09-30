const Joi = require('joi');

const id_empleado = Joi.number();
const id_puesto = Joi.number();

const createEmpleadoSchema = Joi.object({
    id_puesto: id_puesto.required()
});

const updateEmpleadoSchema = Joi.object({
    id_puesto: id_puesto
});

const getEmpleadoSchema = Joi.object({
    id_empleado: id_empleado.required()
});

module.exports = { createEmpleadoSchema, updateEmpleadoSchema, getEmpleadoSchema }