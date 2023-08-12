const Joi = require('joi');

const id_rol = Joi.number();
const descripcion = Joi.string().min(3).max(15);
const estado = Joi.bool();

const createRolSchema = Joi.object({
    descripcion: descripcion.required(),
    estado: estado.required(),
})

const updateRolSchema = Joi.object({
    descripcion: descripcion,
    estado: estado,
})

const getRolSchema = Joi.object({
    id_rol: id_rol.required(),
})

module.exports = { createRolSchema, updateRolSchema, getRolSchema }