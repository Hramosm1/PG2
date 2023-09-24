const Joi = require('joi');

const id_modulo = Joi.number();
const descripcion = Joi.string();
const estado = Joi.bool();

const createModuloSchema = Joi.object({
    descripcion: descripcion.required(),
    estado: estado.required(),
});

const updateModuloSchema = Joi.object({
    descripcion: descripcion,
    estado: estado
})

const getModuleSchema = Joi.object({
    id_modulo: Joi.required(),
});

module.exports = { createModuloSchema, updateModuloSchema, getModuleSchema}