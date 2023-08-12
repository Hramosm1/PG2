const Joi = require('joi');

const id_estado_empresa = Joi.number();
const descripcion = Joi.string().min(8);

const createEstadoEmpresa = Joi.object({
    descripcion: descripcion.required(),
});

const updateEstadoEmpresa = Joi.object({
    descripcion: descripcion,
});

const getEstadoEmpresa = Joi.object({
    id_estado_empresa: id_estado_empresa.required(),
});

module.exports = { createEstadoEmpresa, updateEstadoEmpresa, getEstadoEmpresa }