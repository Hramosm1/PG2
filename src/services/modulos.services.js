const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class modulosService {
    async create(data){
        try {
            const moduloCreate = await prisma.modulos.create({
                data: {
                    descripcion: data.descripcion,
                    estado: data.estado,
                }
            })
            return moduloCreate;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const modulos = await prisma.modulos.findMany();
        return modulos; 
    }

    async findOne(id){
        try {
            const moduloOne = await prisma.modulos.findUnique({
                where: {
                    id_modulo: parseInt(id),
                },
            });
            return moduloOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const updateModulo = await prisma.modulos.update({
            where: {
                id_modulo: parseInt(id),
            },
            data: {
                descripcion: changes.descripcion,
                estado: changes.estado,
            }
        });
        return updateModulo;
    }

    async delete(id){
        const deleteModulo = await prisma.modulos.delete({
            where: {
                id_modulo: parseInt(id),
            },
        });
        return deleteModulo;
    }
}

module.exports = modulosService;