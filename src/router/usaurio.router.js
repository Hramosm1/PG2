const expres = require('express');
const usuarioService = require('../services/usuario.services')
const validatorHandler = require('./../middlewares/validator.handler');
const { createUsuarioSchema, updateUsuarioSchema, getUsuarioSchema } = require('./../schemas/usuarioSchema');

const router = expres.Router();
const service = new usuarioService();

router.get('/', async(req,res) => {
    const usuarios = await service.find();
    res.json(usuarios);
});

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const usuario = await service.findOne(id);
    res.json(usuario);
});

router.post('/', 
    validatorHandler(createUsuarioSchema, 'body'),
    async (req,res) => {
        const body = req.body;
        const createUsuario = await service.create(body);
        res.status(201).json(createUsuario);
});

router.patch('/:id', 
    validatorHandler(createUsuarioSchema, 'body'),
    async (req, res) =>{
        const { id } = req.params;
        const body = req.body;
        const updateUsuario = await service.update(id, body);
        res.json(updateUsuario);
})

router.delete('/:id', async (req,res) => {
    const { id } = req.params;
    const deleteUsuario = await service.delete(id);
    res.json(deleteUsuario);
});

module.exports = router;