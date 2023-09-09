const Joi = require('joi');

const id_estado_publicacion = Joi.number();
const descripcion = Joi.string();

const createEstadoPublicacionSchema = Joi.object({
    descripcion: descripcion.required(),
});

const updateEstadoPublicacionSchema = Joi.object({
    descripcion: descripcion,
});

const getEstadoPublicacionSchema = Joi.object({
    id_estado_publicacion: id_estado_publicacion.required(),
});

module.exports = { createEstadoPublicacionSchema, updateEstadoPublicacionSchema, getEstadoPublicacionSchema }