const Joi = require('joi');

const id_telefono_empresa = Joi.number();
const id_empresa =  Joi.number();
const telefono = Joi.string();
const estado_telefono_empresa = Joi.bool();

const createTelefonoEmpreSchema = Joi.object({
    id_empresa: id_empresa.required(),
    telefono: telefono.required().min(8).max(11),
    estado_telefono_empresa: estado_telefono_empresa.required(),
});

const updateTelefonoEmpreSchema = Joi.object({
    id_empresa: id_empresa,
    telefono: telefono,
    estado_telefono_empresa: estado_telefono_empresa,
});

const getTelefonoEmpreSchema = Joi.object({
    id_telefono_empresa: id_telefono_empresa.required(),
});

module.exports = { createTelefonoEmpreSchema, updateTelefonoEmpreSchema, getTelefonoEmpreSchema }