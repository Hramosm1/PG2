const Joi = require('joi');

const id_estado_entrevista = Joi.number();
const descripcion = Joi.string();

const createEstadoEntrevistaSchema = Joi.object({
    descripcion: descripcion.required(),
})

const updateEstadoEntrevistaSchema = Joi.object({
    descripcion: descripcion,
})

const getEstadoEntrevistaSchema = Joi.object({
    id_estado_entrevista: id_estado_entrevista.required(),
})

module.exports = { createEstadoEntrevistaSchema, updateEstadoEntrevistaSchema, getEstadoEntrevistaSchema }