const Joi = require('joi');

const id_publicacion_plaza = Joi.number();
const id_plaza = Joi.number();
const id_medio_difusion = Joi.number();
const id_estado_publicacion = Joi.number();
const fecha_publicacion = Joi.date();

const createEstadoPublicacionSchema = Joi.object({
    id_plaza: id_plaza.require(),
    id_medio_difusion: id_medio_difusion.require(),
    id_estado_publicacion: id_estado_publicacion.require(),
    fecha_publicacion: fecha_publicacion.require(),
});

const updateEstadoPublicacionSchema = Joi.object({
    id_plaza: id_plaza,
    id_medio_difusion: id_medio_difusion,
    id_estado_publicacion: id_estado_publicacion,
    fecha_publicacion: fecha_publicacion,
});

const getEstadoPublicacionSchema = Joi.object({
    id_publicacion_plaza: id_publicacion_plaza.required(),
});

module.exports = { createEstadoPublicacionSchema, updateEstadoPublicacionSchema, getEstadoPublicacionSchema }