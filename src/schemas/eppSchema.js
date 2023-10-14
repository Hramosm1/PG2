const Joi = require('joi');

const id_epp = Joi.number();
const equipo = Joi.string().min(3);

const createEpp = Joi.object({
    equipo: equipo.required(),
});

const updateEpp = Joi.object({
    equipo: equipo,
});

const getEpp = Joi.object({
    id_epp: id_epp.required(),
});

module.exports = { createEpp, updateEpp, getEpp }