const expres = require('express');
const epp = require('../services/epp.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createEpp, updateEpp, getEpp } = require('./../schemas/eppSchema');

const router = expres.Router();
const service = new epp();


router.get('/', async (req,res) =>{
    const gets = await service.find();
    res.json(gets);
});

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const get = await service.findOne(id);
    res.json(get);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createEpp, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const create = await service.create(body);
            res.status(201).json(create);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updateEpp, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const update = await service.update(id, body);
            res.json(update);
        } catch (err) {
            res.status(500).json({ error: err });
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