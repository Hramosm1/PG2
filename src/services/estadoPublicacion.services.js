const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class estadoPublicacionService {
    async create(data){
        try {
            const estadoPublicacionCreate = await prisma.estado_publicacion.create({
                data: {
                    id_estado_publicacion: data.id_estado_publicacion,
                    descripcion: data.descripcion,
                }
            })
            return estadoPublicacionCreate;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const estadosPublicacion = await prisma.estado_publicacion.findMany();
        return estadosPublicacion; 
    }

    async findOne(id){
        try {
            const estadoPublicacionOne = await prisma.estado_publicacion.findUnique({
                where: {
                    id_estado_publicacion: parseInt(id),
                },
            });
            return estadoPublicacionOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const updateEstaduPublicacion = await prisma.estado_publicacion.update({
            where: {
                id_estado_publicacion: parseInt(id),
            },
            data: {
                descripcion: changes.descripcion,
            }
        });
        return updateEstaduPublicacion;
    }

    async delete(id){
        const deleteEstadoPublicacion = await prisma.estado_publicacion.delete({
            where: {
                id_estado_publicacion: parseInt(id),
            },
        });
        return deleteEstadoPublicacion;
    }
}

module.exports = estadoPublicacionService;