const Joi = require('joi');

const id_documento = Joi.number();
const id_tipo_documento = Joi.number();
const id_empleado = Joi.number();
const no_documento = Joi.string();

const createDocumentoSchema = Joi.object({
    id_tipo_documento: id_tipo_documento.required(),
    id_empleado: id_empleado.required(),
    no_documento: no_documento.required(),
});

const updateDocumentoSchema = Joi.object({
    id_tipo_documento: id_tipo_documento,
    id_empleado: id_empleado,
    no_documento: no_documento,
});

const getDocumentoSchema = Joi.object({
    id_documento: id_documento.required(),
});

module.exports = { createDocumentoSchema, updateDocumentoSchema, getDocumentoSchema }