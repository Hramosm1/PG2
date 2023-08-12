const Joi = require('joi');

const id_permiso = Joi.number();
const id_modulo = Joi.number();
const id_rol = Joi.number();
const r = Joi.number();
const w = Joi.number();
const u = Joi.number();
const d = Joi.number();

const createPermisoSchema = Joi.object({
    id_modulo: id_modulo.required(),
    id_rol: id_rol.required(),
    r: r.required(),
    w: w.required(),
    u: u.required(),
    d: d.required(),
});

const updatePermisoSchema = Joi.object({
    id_modulo: id_modulo,
    id_rol: id_rol,
    r: r,
    w: w,
    u: u,
    d: d,
});

const getPermisoSchema = Joi.object({
    id_permiso: id_permiso.required(),
});

module.exports = { createPermisoSchema, updatePermisoSchema, getPermisoSchema }