const expres = require('express');
const telefonoEmpresaService = require('../services/telefonoEmpresa.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createTelefonoEmpreSchema, updateTelefonoEmpreSchema, getTelefonoEmpreSchema } = require('./../schemas/telefonoEmpresaSchema');

const router = expres.Router();
const service = new telefonoEmpresaService();


router.get('/', async (req,res) =>{
    const telefonoEmpresas = await service.find();
    res.json(telefonoEmpresas);
});

router.get('/:id', async (req,res) => {
    const {id} = req.params;
    const telefonos = await service.findOne(id);
    res.json(telefonos);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createTelefonoEmpreSchema, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const createTelefonoEmpresa = await service.create(body);
            res.status(201).json(createTelefonoEmpresa);
            console.log(createTelefonoEmpresa)
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updateTelefonoEmpreSchema, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const updateTelefonoEmpresa = await service.update(id, body);
            res.json(updateTelefonoEmpresa);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el telefono' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const deleteTelefonoEmpresa = await service.delete(id);
            res.json(deleteTelefonoEmpresa);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

module.exports = router;