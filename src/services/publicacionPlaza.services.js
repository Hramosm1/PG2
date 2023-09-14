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
        const finds = await prisma.publicacion_plaza.findMany();
        return finds; 
    }

    async findOne(id){
        try {
            const findOne = await prisma.publicacion_plaza.findUnique({
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
        const update = await prisma.publicacion_plaza.update({
            where: {
                id_publicacion_plaza: parseInt(id),
            },
            data: {
                id_plaza: changes.id_plaza,
                id_medio_difusion: changes.id_medio_difusion,
                id_estado_publicacion: changes.id_estado_publicacion,
                fecha_publicacion: data.fecha_publicacion
            }
        });
        return update;
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