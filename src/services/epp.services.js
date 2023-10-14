const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class eppService {
    async create(data){
        try {
            const create = await prisma.epp.create({
                data: {
                    equipo: data.equipo,
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.epp.findMany({
                select:{
                    id_epp: true,
                    equipo: true
                }
            });
            return find;
        } catch (error) {
            return error;
            console.log(error)
        }
    }

    async findOne(id){
        try {
            const findOne = await prisma.epp.findUnique({
                select:{
                    id_epp: true,
                    equipo: true
                },
                where: {
                    id_epp: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.epp.update({
            where: {
                id_epp: parseInt(id),
            },
            data: {
                equipo: changes.equipo
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.epp.delete({
            where: {
                id_epp: parseInt(id),
            }
        });
        return deleteId;
    }
}

module.exports = eppService;