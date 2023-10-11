const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class tipoContratacionService {
    async create(data){
        try {
            const create = await prisma.tipo_contratacion.create({
                data: {
                    id_empresa: data.id_empresa,
                    descripcion: data.descripcion
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.tipo_contratacion.findMany({
                select:{
                    id_tipo_contratacion: true,
                    descripcion: true,
                    empresa: {
                        select: {
                            descripcion: true
                        }
                    }
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
            const findOne = await prisma.tipo_contratacion.findUnique({
                select:{
                    id_tipo_contratacion: true,
                    descripcion: true,
                    empresa: {
                        select: {
                            descripcion: true
                        }
                    }
                },
                where: {
                    id_tipo_contratacion: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.tipo_contratacion.update({
            where: {
                id_tipo_contratacion: parseInt(id),
            },
            data: {
                id_empresa: changes.id_empresa,
                descripcion: changes.descripcion
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.tipo_contratacion.delete({
            where: {
                id_tipo_contratacion: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = tipoContratacionService;