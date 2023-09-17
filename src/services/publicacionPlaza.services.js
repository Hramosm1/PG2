const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class publicacionPlazaService {
    async create(data){
        try {
            const Create = await prisma.publicacion_plaza.create({
                data: {
                    id_plaza: data.id_plaza,
                    id_medio_difusion: data.id_medio_difusion,
                    id_estado_publicacion: data.id_estado_publicacion,
                    fecha_publicacion: data.fecha_publicacion
                }
            })
            return Create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const finds = await prisma.publicacion_plaza.findMany({
            select: {
                id_publicacion_plaza: true,
                id_plaza: true,
                id_medio_difusion: true,
                id_estado_publicacion: true,
                fecha_publicacion: true,
                plaza: {
                    select: {
                        id_plaza: true,
                        descripcion: true
                    }
                },
                medio_difusion: {
                    select: {
                        id_medio_difusion: true,
                        descripcion: true
                    }
                },
                estado_publicacion: {
                    select: {
                        id_estado_publicacion: true,
                        descripcion: true
                    }
                }
            }
        });
        return finds; 
    }

    async findOne(id){
        try {
            const findOne = await prisma.publicacion_plaza.findUnique({
                select: {
                    id_publicacion_plaza: true,
                    id_plaza: true,
                    id_medio_difusion: true,
                    id_estado_publicacion: true,
                    fecha_publicacion: true,
                    plaza: {
                        select: {
                            id_plaza: true,
                            descripcion: true
                        }
                    },
                    medio_difusion: {
                        select: {
                            id_medio_difusion: true,
                            descripcion: true
                        }
                    },
                    estado_publicacion: {
                        select: {
                            id_estado_publicacion: true,
                            descripcion: true
                        }
                    }
                },
                where: {
                    id_publicacion_plaza: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        try {
            const update = await prisma.publicacion_plaza.update({
                where: {
                    id_publicacion_plaza: parseInt(id),
                },
                data: {
                    id_plaza: changes.id_plaza,
                    id_medio_difusion: changes.id_medio_difusion,
                    id_estado_publicacion: changes.id_estado_publicacion,
                    fecha_publicacion: changes.fecha_publicacion
                }
            });
            return update;
        } catch (error) {
            return error;
        }
    }

    async delete(id){
        const eliminar = await prisma.publicacion_plaza.delete({
            where: {
                id_publicacion_plaza: parseInt(id),
            },
        });
        return eliminar;
    }
}

module.exports = publicacionPlazaService;