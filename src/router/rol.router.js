const expres = require('express');
const rolService = require('../services/rol.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createRolSchema, updateRolSchema, getRolSchema } = require('./../schemas/rolSchema');

const router = expres.Router();
const service = new rolService();


router.get('/', async (req,res) =>{
    const roles = await service.find();
    res.json(roles);
});

router.get('/:id', async (req,res) => {
    const {id} = req.params;
    const rol = await service.findOne(id);
    res.json(rol);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createRolSchema, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const createRol = await service.create(body);
            res.status(201).json(createRol);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el rol' });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updateRolSchema, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const updateRol = await service.update(id, body);
            res.json(updateRol);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el rol' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const deleteRol = await service.delete(id);
            res.json(deleteRol);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

module.exports = router;