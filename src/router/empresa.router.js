const expres = require('express');
const empresaService = require('../services/empresa.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createEmpresaSchema, updateEmpresaSchema, getEmpresaSchema } = require('./../schemas/empresaSchema');

const router = expres.Router();
const service = new empresaService();


router.get('/', async (req,res) =>{
    const empresas = await service.find();
    res.json(empresas);
});

router.get('/:id', async (req,res) => {
    const {id} = req.params;
    const empresa = await service.findOne(id);
    res.json(empresa);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createEmpresaSchema, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const createEmpresa = await service.create(body);
            res.status(201).json(createEmpresa);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el rol' });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updateEmpresaSchema, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const updateEmpresa = await service.update(id, body);
            res.json(updateEmpresa);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el rol' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const deleteEmpresa = await service.delete(id);
            res.json(deleteEmpresa);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

module.exports = router;