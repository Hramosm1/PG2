const expres = require('express');
const rolService = require('../services/rol.services')

const router = expres.Router();
const service = new rolService();

router.get('/', async (req,res) =>{
    const roles = await service.find();
    res.json(roles);
})

module.exports = router;