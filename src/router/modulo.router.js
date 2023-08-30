const expres = require('express');
const moduloService = require('../services/modulos.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createModuloSchema, updateModuloSchema, getModuleSchema } = require('./../schemas/moduloSchema');

const router = expres.Router();
const service = new moduloService();


router.get('/', async (req,res) =>{
    const modulos = await service.find();
    res.json(modulos);
});

router.get('/:id', async (req,res) => {
    const {id} = req.params;
    const modulo = await service.findOne(id);
    res.json(modulo);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createModuloSchema, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const createModulo = await service.create(body);
            res.status(201).json(createModulo);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el rol' });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updateModuloSchema, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const updateModulo = await service.update(id, body);
            res.json(updateModulo);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el modulo' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const deleteModulo = await service.delete(id);
            res.json(deleteModulo);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

module.exports = router;