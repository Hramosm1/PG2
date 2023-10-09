const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class asistenciaService {
    async create(data){
        try {
            const create = await prisma.asistencia.create({
                data: {
                    id_empleado: data.id_empleado,
                    fecha_hora: data.fecha_hora
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.asistencia.findMany({
                select:{
                    id_asistencia: true,
                    id_empleado: true,
                    fecha_hora: true,
                }
            });
            return find;
        } catch (error) {
            return error;
        }
    }

    async findOne(id){
        try {
            const findOne = await prisma.asistencia.findUnique({
                select:{
                    id_asistencia: true,
                    id_empleado: true,
                    fecha_hora: true,
                },
                where: {
                    id_asistencia: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.asistencia.update({
            where: {
                id_asistencia: parseInt(id),
            },
            data: {
                id_empleado: changes.id_empleado,
                fecha_hora: changes.fecha_hora
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.asistencia.delete({
            where: {
                id_asistencia: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = asistenciaService;