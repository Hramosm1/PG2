const Joi = require('joi');

const id_medio_difusion = Joi.number();
const descripcion = Joi.string();

const createMedioDifusionSchema = Joi.object({
    descripcion: descripcion.required(),
})

const updateMedioDifusionSchema = Joi.object({
    descripcion: descripcion,
})

const getMedioDifusionSchema = Joi.object({
    id_medio_difusion: id_medio_difusion.required(),
})

module.exports = { createMedioDifusionSchema, updateMedioDifusionSchema, getMedioDifusionSchema }