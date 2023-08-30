const expres = require('express');
const permisosService = require('../services/permisos.services')
const validatorHandler = require('./../middlewares/validator.handler');
const authMiddleware  = require('./../middlewares/auth');

const { createPermisoSchema, updatePermisoSchema, getPermisoSchema } = require('./../schemas/permisoSchema');

const router = expres.Router();
const service = new permisosService();


router.get('/', async (req,res) =>{
    const permisos = await service.find();
    res.json(permisos);
});

router.get('/:id', async (req,res) => {
    const {id} = req.params;
    const permiso = await service.findOne(id);
    res.json(permiso);
});

router.post('/',
    authMiddleware.authenticateToken,
    validatorHandler(createPermisoSchema, 'body'),
    async (req,res) => {
        try {
            const body = req.body;
            const createPermiso = await service.create(body);
            res.status(201).json(createPermiso);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el permiso' });
        }
});

router.patch('/:id',
    authMiddleware.authenticateToken,
    validatorHandler(updatePermisoSchema, 'body'),
    async (req, res) =>{
        try {
            const { id } = req.params;
            const body = req.body;
            const updatePermiso = await service.update(id, body);
            res.json(updatePermiso);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el permiso' });
        }
})

router.delete('/:id', 
    authMiddleware.authenticateToken,
    async (req,res) => {
        try {
            const { id } = req.params;
            const deletePermiso = await service.delete(id);
            res.json(deletePermiso);
        } catch (err) {
            res.status(500).json({ error: err });
        }
});

module.exports = router;