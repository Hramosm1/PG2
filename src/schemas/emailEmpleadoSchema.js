const Joi = require('joi');

const id_email_empleado = Joi.number();
const id_empleado = Joi.number();
const email_empleado = Joi.string();
const estado_email_empleado = Joi.bool();

const createEmailEmpleadoSchema = Joi.object({
    id_empleado: id_empleado.required(),
    email_empleado: email_empleado.required(),
    estado_email_empleado: estado_email_empleado.required(),
});

const updateEmailEmpleadoSchema = Joi.object({
    id_empleado: id_empleado,
    email_empleado: email_empleado,
    estado_email_empleado: estado_email_empleado,
});

const getEmailEmpleadoSchema = Joi.object({
    id_email_empleado: id_email_empleado.required(),
});

module.exports = { createEmailEmpleadoSchema, updateEmailEmpleadoSchema, getEmailEmpleadoSchema }