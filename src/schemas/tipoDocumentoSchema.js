const Joi = require('joi');

const id_tipo_documento = Joi.number();
const descripcion = Joi.string();
const estado_documento = Joi.bool();

const createTipoDocumentoSchema = Joi.object({
    descripcion: descripcion.required(),
    estado_documento: estado_documento.required(),
});

const updateTipoDocumentoSchema = Joi.object({
    descripcion: descripcion,
    estado_documento: estado_documento,
});

const getTipoDocumentoSchema = Joi.object({
    id_tipo_documento: id_tipo_documento.required(),
});

module.exports = { createTipoDocumentoSchema, updateTipoDocumentoSchema, getTipoDocumentoSchema }