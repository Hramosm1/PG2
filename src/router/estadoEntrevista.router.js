const expres = require('express');
const estadoEntrevistaService = require('../services/estadoEntrevista.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createEstadoEntrevistaSchema, updateEstadoEntrevistaSchema, getEstadoEntrevistaSchema } = require('./../schemas/estadoEntrevistaSchema');

const router = expres.Router();
const service = new estadoEntrevistaService();


router.get('/', async (req,res) =>{
    const entrevistas = await service.find();
    res.json(entrevistas);
});

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const entrevista = await service.findOne(id);
    res.json(entrevista);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createEstadoEntrevistaSchema, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const create = await service.create(body);
            res.status(201).json(create);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el estado de la entrevista' });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updateEstadoEntrevistaSchema, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const update = await service.update(id, body);
            res.json(update);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el estado de la entrevista' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const deleteE = await service.delete(id);
            res.json(deleteE);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

module.exports = router;