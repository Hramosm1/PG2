const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class documentoService {
    async create(data){
        try {
            const create = await prisma.documento.create({
                data: {
                    id_tipo_documento: data.id_tipo_documento,
                    id_empleado: data.id_empleado,
                    no_documento: data.no_documento
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.documento.findMany({
                select:{
                    id_documento: true,
                    id_tipo_documento: true,
                    id_empleado: true,
                    no_documento: true,
                    tipo_documento: {
                        select: {
                            descripcion
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
            const findOne = await prisma.documento.findUnique({
                select:{
                    id_documento: true,
                    id_tipo_documento: true,
                    id_empleado: true,
                    no_documento: true,
                    tipo_documento: {
                        select: {
                            descripcion
                        }
                    }
                },
                where: {
                    id_documento: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.documento.update({
            where: {
                id_documento: parseInt(id),
            },
            data: {
                id_tipo_documento: changes.id_tipo_documento,
                id_empleado: changes.id_empleado,
                no_documento: changes.no_documento
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.documento.delete({
            where: {
                id_documento: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = documentoService;