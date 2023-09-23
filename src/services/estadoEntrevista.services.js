const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class estadoEntrevistaService {
    async create(data){
        try {
            const create = await prisma.estado_entrevista.create({
                data: {
                    descripcion: data.descripcion
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const find = await prisma.estado_entrevista.findMany();
        return find; 
    }

    async findOne(id){
        try {
            const findOne = await prisma.estado_entrevista.findUnique({
                where: {
                    id_estado_entrevista: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.estado_entrevista.update({
            where: {
                id_estado_entrevista: parseInt(id),
            },
            data: {
                descripcion: changes.descripcion,
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.estado_entrevista.delete({
            where: {
                id_estado_entrevista: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = estadoEntrevistaService;