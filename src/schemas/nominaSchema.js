const Joi = require('joi');

const id_nomina = Joi.number();
const id_empleado = Joi.number();
const fecha_inicio = Joi.date();
const fecha_fin = Joi.date();

const createNominaSchema = Joi.object({
    id_empleado: id_empleado.required(),
    fecha_inicio: fecha_inicio.required(),
    fecha_fin: fecha_fin.required()
});

const updateNominaSchema = Joi.object({
    id_empleado: id_empleado,
    fecha_inicio: fecha_inicio,
    fecha_fin: fecha_fin
});

const getNominaSchema = Joi.object({
    id_nomina: id_nomina.required(),
});

module.exports = { createNominaSchema, updateNominaSchema, getNominaSchema }