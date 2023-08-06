const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class rolService {
    constructor(){
        this.roles = [];
    }
    async create(data){
        try {
            const rolCreate = await prisma.rol.create({
                data: {
                    descripcion: data.descripcion,
                    estado: data.estado,
                }
            })
            return rolCreate;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const roles = await prisma.rol.findMany();
        return roles; 
    }

    async findOne(id){
        try {
            const rolOne = await prisma.rol.findUnique({
                where: {
                    id_rol: parseInt(id),
                },
            });
            return rolOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const updateRol = await prisma.rol.update({
            where: {
                id_rol: parseInt(id),
            },
            data: {
                descripcion: changes.descripcion,
                estado: changes.estado,
            }
        });

        return updateRol;
    }

    async delete(id){
        const deleteRol = await prisma.rol.delete({
            where: {
                id_rol: parseInt(id),
            },
        });

        return deleteRol;
    }
}

module.exports = rolService;