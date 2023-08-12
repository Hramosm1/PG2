const expres = require('express');
const rolService = require('../services/rol.services')
const validatorHandler = require('./../middlewares/validator.handler');
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

router.post('/', validatorHandler(createRolSchema, 'body'),
    async (req,res) => {
        const body = req.body;
        const createRol = await service.create(body);
        res.status(201).json(createRol);
});

router.patch('/:id', 
    validatorHandler(createRolSchema, 'body'),
    async (req, res) =>{
        const { id } = req.params;
        const body = req.body;
        const updateRol = await service.update(id, body);
        res.json(updateRol);
})

router.delete('/:id', async (req,res) => {
    const { id } = req.params;
    const deleteRol = await service.delete(id);
    res.json(deleteRol);
});

module.exports = router;