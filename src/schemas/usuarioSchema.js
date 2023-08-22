const Joi = require('joi');

const id_usuario = Joi.number();
const id_rol = Joi.number();
const usuario = Joi.string();
const email = Joi.string();
const password = Joi.string().min(8).max(12);

const createUsuarioSchema = Joi.object({
    id_rol: id_rol.required(),
    usuario: usuario.required(),
    email: email.required(),
    password: password.required(),
})

const updateUsuarioSchema = Joi.object({
    id_rol: id_rol,
    usuario: usuario,
    email: email,
    password, password,
})

const getUsuarioSchema = Joi.object({
    id_usuario: id_usuario.required(),
})

module.exports = { createUsuarioSchema, updateUsuarioSchema, getUsuarioSchema }