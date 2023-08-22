const Joi = require('joi');

const id_tipo_contratacion = Joi.number();
const id_empresa = Joi.number();
const descripcion = Joi.string();

const createTipoContratacionSchema = Joi.object({
    id_empresa: id_empresa.required(),
    descripcion: descripcion.required(),
});

const updateTipoContratacionSchema = Joi.object({
    id_empresa: id_empresa,
    descripcion: descripcion,
});

const getTipoContratacionSchema = Joi.object({
    id_tipo_contratacion: id_tipo_contratacion.required(),
});

module.exports = { createTipoContratacionSchema, updateTipoContratacionSchema, getTipoContratacionSchema }