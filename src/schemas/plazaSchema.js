const Joi = require('joi');

const id_plaza = Joi.number();
const id_estado_plaza = Joi.number();
const descripcion = Joi.string();

const createPlazaSchema = Joi.object({
    id_estado_plaza: id_estado_plaza.required(),
    descripcion: descripcion.required(),
})

const updatePlazachema = Joi.object({
    id_estado_plaza: id_estado_plaza,
    descripcion: descripcion,
})

const getPlazaSchema = Joi.object({
    id_plaza: id_plaza.required(),
})

module.exports = { createPlazaSchema, updatePlazachema, getPlazaSchema }