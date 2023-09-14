const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class medioDifusionService {
    async create(data){
        try {
            const medioDifusionCreate = await prisma.medio_difusion.create({
                data: {
                    
                    id_medio_difusion: data.id_medio_difusion,
                    descripcion: data.descripcion,
                }
            })
            return medioDifusionCreate;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const mediosDifusion = await prisma.medio_difusion.findMany();
        return mediosDifusion; 
    }

    async findOne(id){
        try {
            const medioDifusionOne = await prisma.medio_difusion.findUnique({
                where: {
                    id_medio_difusion: parseInt(id),
                },
            });
            return medioDifusionOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const updateMedioDifusion = await prisma.medio_difusion.update({
            where: {
                id_medio_difusion: parseInt(id),
            },
            data: {
                descripcion: changes.descripcion,
            }
        });
        return updateMedioDifusion;
    }

    async delete(id){
        const deleteMedioDifusion = await prisma.medio_difusion.delete({
            where: {
                id_medio_difusion: parseInt(id),
            },
        });
        return deleteMedioDifusion;
    }
}

module.exports = medioDifusionService;