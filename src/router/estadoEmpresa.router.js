const expres = require('express');
const estadoEmpresaService = require('../services/estadoEmpresa.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createEstadoEmpresa, updateEstadoEmpresa, getEstadoEmpresa } = require('./../schemas/estadoEmpresaSchema');

const router = expres.Router();
const service = new estadoEmpresaService();


router.get('/', async (req,res) =>{
    const estadoEmpresas = await service.find();
    res.json(estadoEmpresas);
});

router.get('/:id', async (req,res) => {
    const {id} = req.params;
    const estados = await service.findOne(id);
    res.json(estados);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createEstadoEmpresa, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const createEstadoEmpresa = await service.create(body);
            res.status(201).json(createEstadoEmpresa);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el estado' });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updateEstadoEmpresa, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const updateEstadoEmpresa = await service.update(id, body);
            res.json(updateEstadoEmpresa);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el estado' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const deleteEstadoEmpresa = await service.delete(id);
            res.json(deleteEstadoEmpresa);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

module.exports = router;