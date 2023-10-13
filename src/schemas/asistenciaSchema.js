const Joi = require('joi');

const id_asistencia = Joi.number();
const id_empleado = Joi.number();
const fecha_hora = Joi.date();
const actividad = Joi.string();

const createAsistenciaSchema = Joi.object({
    id_empleado: id_empleado.required(),
    actividad: actividad.required(),
});

const updateAsistenciaSchema = Joi.object({
    id_empleado: id_empleado,
    actividad: actividad,
});

const getAsistenciaSchema = Joi.object({
    id_asistencia: id_asistencia.required(),
});

module.exports = { createAsistenciaSchema, updateAsistenciaSchema, getAsistenciaSchema }