const Joi = require('joi');

const id_apellidos_empleados = Joi.number();
const id_empleado = Joi.number();
const no_orden = Joi.number();
const apellido = Joi.string();

const createApellidoSchema = Joi.object({
    id_empleado: id_empleado.required(),
    no_orden: no_orden.required(),
    apellido: apellido.required()
});

const updateApellidoSchema = Joi.object({
    id_empleado: id_empleado,
    no_orden: no_orden,
    apellido: apellido
});

const getApellidoSchema = Joi.object({
    id_apellidos_empleados: id_apellidos_empleados.required(),
});

module.exports = { createApellidoSchema, updateApellidoSchema, getApellidoSchema }