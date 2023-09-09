const Joi = require('joi');

const id_entrevista = Joi.number();
const id_estado_entrevista = Joi.number();
const id_plaza = Joi.number();
const fecha_entrevista = Joi.date();

const createEntrevistaSchema = Joi.object({
    id_estado_entrevista: id_estado_entrevista.required(),
    id_plaza: id_plaza.required(),
    fecha_entrevista: fecha_entrevista.required(),
});

const updateEntrevistaSchema = Joi.object({
    id_estado_entrevista: id_estado_entrevista,
    id_plaza: id_plaza,
    fecha_entrevista: fecha_entrevista,
});

const getEntrevistaSchema = Joi.object({
    id_entrevista: id_entrevista.required(),
});

module.exports = { createEntrevistaSchema, updateEntrevistaSchema, getEntrevistaSchema }