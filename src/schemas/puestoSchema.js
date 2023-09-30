const Joi = require('joi');

const id_puesto = Joi.number();
const id_tipo_contratacion = Joi.number();
const salario_mensual = Joi.number();
const descripcion = Joi.string();

const createPuestoSchema = Joi.object({
    id_tipo_contratacion: id_tipo_contratacion.required(),
    salario_mensual: salario_mensual.required(),
    descripcion: descripcion.required()
});

const updatePuestoSchema = Joi.object({
    id_tipo_contratacion: id_tipo_contratacion,
    salario_mensual: salario_mensual,
    descripcion: descripcion
});

const getPuestoSchema = Joi.object({
    id_puesto: id_puesto.required(),
});

module.exports = { createPuestoSchema, updatePuestoSchema, getPuestoSchema }