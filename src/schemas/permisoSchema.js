const Joi = require('joi');

const id_permiso = Joi.number();
const id_modulo = Joi.number();
const id_rol = Joi.number();
const r = Joi.boolean();
const w = Joi.boolean();
const u = Joi.boolean();
const d = Joi.boolean();

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