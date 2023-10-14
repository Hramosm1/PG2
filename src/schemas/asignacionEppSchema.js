const Joi = require('joi');

const id_asignacion_epp = Joi.number();
const id_epp = Joi.number();
const id_empleado = Joi.number();

const createAsignacionEpp = Joi.object({
    id_epp: id_epp.required(),
    id_empleado: id_empleado.required()
});

const updateAsignacionEpp = Joi.object({
    id_epp: id_epp,
    id_empleado: id_empleado
});

const getAsignacionEpp = Joi.object({
    id_asignacion_epp: id_epp.required(),
});

module.exports = { createAsignacionEpp, updateAsignacionEpp, getAsignacionEpp }