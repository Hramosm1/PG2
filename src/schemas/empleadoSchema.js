const Joi = require('joi');

const id_empleado = Joi.number();
const id_puesto = Joi.number();
const apellido = Joi.string();
const nombre = Joi.string();

const createEmpleadoSchema = Joi.object({
    id_puesto: id_puesto.required(),
    apellido: apellido.required(),
    nombre: nombre.required(),
});

const updateEmpleadoSchema = Joi.object({
    id_puesto: id_puesto,
    apellido: apellido,
    nombre: nombre
});

const getEmpleadoSchema = Joi.object({
    id_empleado: id_empleado.required()
});

module.exports = { createEmpleadoSchema, updateEmpleadoSchema, getEmpleadoSchema }