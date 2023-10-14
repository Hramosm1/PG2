const Joi = require('joi');

const id_nomina = Joi.number();
const id_empleado = Joi.number();
const fecha_inicio = Joi.date();
const fecha_fin = Joi.date();
const diasLaborados = Joi.number();
const horasExtras = Joi.number();
const bonificaciones = Joi.number();
const igss = Joi.number();
const irtra = Joi.number();
const totalPagar = Joi.number();

const createNominaSchema = Joi.object({
    id_empleado: id_empleado.required(),
    fecha_inicio: fecha_inicio.required(),
    fecha_fin: fecha_fin.required(),
    diasLaborados: diasLaborados.required(),
    horasExtras: horasExtras.required(),
    bonificaciones: bonificaciones.required(),
    igss: igss.required(),
    irtra: irtra.required(),
    totalPagar: totalPagar.required(),
});

const updateNominaSchema = Joi.object({
    id_empleado: id_empleado,
    fecha_inicio: fecha_inicio,
    fecha_fin: fecha_fin,
    diasLaborados: diasLaborados,
    horasExtras: horasExtras,
    bonificaciones: bonificaciones,
    igss: igss,
    irtra: irtra,
    totalPagar: totalPagar,
});

const getNominaSchema = Joi.object({
    id_nomina: id_nomina.required(),
});

module.exports = { createNominaSchema, updateNominaSchema, getNominaSchema }