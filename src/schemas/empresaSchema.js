const Joi = require('joi');

const id_empresa = Joi.number();
const descripcion = Joi.string();
const id_estado = Joi.bool();

const createEmpresaSchema = Joi.object({
    descripcion: descripcion.required(),
    id_estado: id_estado.required(),
});

const updateEmpresaSchema = Joi.object({
    descripcion: descripcion,
    id_estado: id_estado
});

const getEmpresaSchema = Joi.object({
    id_empresa: id_empresa.required(),
})

module.exports = { createEmpresaSchema, updateEmpresaSchema, getEmpresaSchema }