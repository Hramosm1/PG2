const expres = require('express');
const rolService = require('../services/rol.services')

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

router.post('/', async (req,res) => {
    const body = req.body;
    const createRol = await service.create(body);
    res.json(createRol);
});

router.patch('/:id', async (req, res) =>{
    const { id } = req.params;
    const body = req.body;

    if(!id){
        res.status(400).json({error: 'Debe de incluir el id'});
    }
    if(!body.descripcion){
        res.status(400).json({error: 'Debe de incluir la descripcion'});
    }

    const updateRol = await service.update(id, body);
    res.json(updateRol);
})

router.delete('/:id', async (req,res) => {
    const { id } = req.params;
    if(!id){
        res.status(400).json({error: 'Debe de incluir el id'});
    }
    const deleteRol = await service.delete(id);
    res.json(deleteRol);
});

module.exports = router;