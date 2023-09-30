const Joi = require('joi');

const id_hora_extra = Joi.number();
const id_empleado = Joi.number();
const fecha_hora = Joi.date();
const cantidad = Joi.number();

const createHoraExtraSchema = Joi.object({
    id_empleado: id_empleado.required(),
    fecha_hora: fecha_hora.required(),
    cantidad: cantidad.required(),
});

const updateHoraExtraSchema = Joi.object({
    id_empleado: id_empleado,
    fecha_hora: fecha_hora,
    cantidad: cantidad,
});

const getHoraExtraSchema = Joi.object({
    id_hora_extra: id_hora_extra.required(),
});

module.exports = { createHoraExtraSchema, updateHoraExtraSchema, getHoraExtraSchema }