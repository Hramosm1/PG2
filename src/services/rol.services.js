const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class rolService {
    constructor(){
        this.roles = [];
    }
    async create(data){
        return data;
    }

    async find(){
        const rol = await prisma.rol.findMany();
        return rol;
    }

    async findOne(id){
        return id;
    }

    async update(id, changes){
        return changes;
    }

    async delete(id){
        return id;
    }
}

module.exports = rolService;