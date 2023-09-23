const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class entrevistaService {
    async create(data){
        try {
            const create = await prisma.entrevista.create({
                data: {
                    id_estado_entrevista: data.id_estado_entrevista,
                    id_plaza: data.id_plaza,
                    fecha_entrevista: data.fecha_entrevista
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const find = await prisma.entrevista.findMany();
        return find; 
    }

    async findOne(id){
        try {
            const findOne = await prisma.entrevista.findUnique({
                where: {
                    id_entrevista: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.entrevista.update({
            where: {
                id_entrevista: parseInt(id),
            },
            data: {
                id_estado_entrevista: changes.id_estado_entrevista,
                id_plaza: changes.id_plaza,
                fecha_entrevista: changes.fecha_entrevista
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.entrevista.delete({
            where: {
                id_entrevista: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = entrevistaService;