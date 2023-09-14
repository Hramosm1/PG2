const expres = require('express');
const estadoPublicacionService = require('../services/estadoPublicacion.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createEstadoPublicacionSchema, updateEstadoPublicacionSchema, getEstadoPublicacionSchema } = require('./../schemas/estadoPublicacionSchema');

const router = expres.Router();
const service = new estadoPublicacionService();


router.get('/', async (req,res) =>{
    const estadosPublicacion = await service.find();
    res.json(estadosPublicacion);
});

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const estadoPublicacion = await service.findOne(id);
    res.json(estadoPublicacion);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createEstadoPublicacionSchema, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const createEstadoPublicacion = await service.create(body);
            res.status(201).json(createEstadoPublicacion);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el estado de la publicacion' });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updateEstadoPublicacionSchema, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const updateEstadoPublicacion = await service.update(id, body);
            res.json(updateEstadoPublicacion);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el estado de la publicacion' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const deleteEstadoPublicacion = await service.delete(id);
            res.json(deleteEstadoPublicacion);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

module.exports = router;