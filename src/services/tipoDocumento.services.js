const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class tipoDocumentoService {
    async create(data){
        try {
            const create = await prisma.tipo_documento.create({
                data: {
                    descripcion: data.descripcion,
                    estado_documento: data.estado_documento
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.tipo_documento.findMany({
                select:{
                    id_tipo_documento: true,
                    descripcion: true,
                    estado_documento: true
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
            const findOne = await prisma.tipo_documento.findUnique({
                select:{
                    id_tipo_documento: true,
                    descripcion: true,
                    estado_documento: true
                },
                where: {
                    id_tipo_documento: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.tipo_documento.update({
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
        const deleteId = await prisma.tipo_documento.delete({
            where: {
                id_entrevista: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = tipoDocumentoService;