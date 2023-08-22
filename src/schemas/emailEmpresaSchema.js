const Joi = require('joi');

const id_email_empresa = Joi.number();
const id_empresa = Joi.number();
const email_empresa = Joi.string();
const estado_email_empresa = Joi.bool();

const createEmailEmpreSchema = Joi.object({
    id_empresa: id_empresa.required(),
    email_empresa: email_empresa.required(),
    estado_email_empresa: estado_email_empresa.required(),
});

const updateEmailEmpreSchema = Joi.object({
    id_empresa: id_empresa,
    email_empresa: email_empresa,
    estado_email_empresa: estado_email_empresa,
});

const getEmailEmpreSchema = Joi.object({
    id_email_empresa: id_email_empresa.required(),
});

module.exports = { createEmailEmpreSchema, updateEmailEmpreSchema, getEmailEmpreSchema }