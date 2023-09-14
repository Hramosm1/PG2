const expres = require('express');
const medioDifusionService = require('../services/medioDifusion.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createMedioDifusionSchema, updateMedioDifusionSchema, getMedioDifusionSchema } = require('./../schemas/medioDifusionSchema');

const router = expres.Router();
const service = new medioDifusionService();


router.get('/', async (req,res) =>{
    const mediosDifusion = await service.find();
    res.json(mediosDifusion);
});

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const medioDifusion = await service.findOne(id);
    res.json(medioDifusion);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createMedioDifusionSchema, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const createMedioDifusion = await service.create(body);
            res.status(201).json(createMedioDifusion);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el medio de difusion' });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updateMedioDifusionSchema, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const updateMedioDifusion = await service.update(id, body);
            res.json(updateMedioDifusion);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el medio de difusion' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const deleteMedioDifusion = await service.delete(id);
            res.json(deleteMedioDifusion);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

module.exports = router;