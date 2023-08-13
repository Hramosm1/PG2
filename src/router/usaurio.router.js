const expres = require('express');
const usuarioService = require('../services/usuario.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');
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
        try {
            const body = req.body;
            const createUsuario = await service.create(body);
            res.status(201).json(createUsuario);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
});

router.patch('/:id', 
    authMiddleware.authenticateToken,
    validatorHandler(createUsuarioSchema, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const updateUsuario = await service.update(id, body);
            res.status(201).json(updateUsuario);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el usuario' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const deleteUsuario = await service.delete(id);
            res.status(201).json(deleteUsuario);
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el usuario' });
        }
});

module.exports = router;