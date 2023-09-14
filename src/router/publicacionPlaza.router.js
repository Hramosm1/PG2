const expres = require('express');
const publicacionPlazaService = require('../services/publicacionPlaza.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createEstadoPublicacionSchema, updateEstadoPublicacionSchema, getEstadoPublicacionSchema } = require('./../schemas/publicacionPlazaSchema');

const router = expres.Router();
const service = new publicacionPlazaService();


router.get('/', async (req,res) =>{
    const get = await service.find();
    res.json(get);
});

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const getId = await service.findOne(id);
    res.json(getId);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createEstadoPublicacionSchema, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const post = await service.create(body);
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la publicacion' });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updateEstadoPublicacionSchema, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const patch = await service.update(id, body);
            res.json(patch);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar la publicacion' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const eliminar = await service.delete(id);
            res.json(eliminar);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

module.exports = router;