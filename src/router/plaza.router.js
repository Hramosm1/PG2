const expres = require('express');
const plazaService = require('../services/plaza.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createPlazaSchema, updatePlazachema, getPlazaSchema } = require('./../schemas/plazaSchema');

const router = expres.Router();
const service = new plazaService();


router.get('/', async (req,res) =>{
    const plazas = await service.find();
    res.json(plazas);
});

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const plaza = await service.findOne(id);
    res.json(plaza);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createPlazaSchema, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const createPlaza = await service.create(body);
            res.status(201).json(createPlaza);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el rol' });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updatePlazachema, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const updatePlaza = await service.update(id, body);
            res.json(updatePlaza);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el rol' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const deletePlaza = await service.delete(id);
            res.json(deletePlaza);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

module.exports = router;