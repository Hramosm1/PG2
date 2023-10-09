const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class horaExtraService {
    async create(data){
        try {
            const create = await prisma.hora_extra.create({
                data: {
                    fecha_hora: data.fecha_hora,
                    cantidad: data.cantidad
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.hora_extra.findMany({
                select:{
                    id_hora_extra: true,
                    id_empleado: true,
                    fecha_hora: true,
                    cantidad: true
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
            const findOne = await prisma.hora_extra.findUnique({
                select:{
                    id_hora_extra: true,
                    id_empleado: true,
                    fecha_hora: true,
                    cantidad: true
                },
                where: {
                    id_hora_extra: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.hora_extra.update({
            where: {
                id_hora_extra: parseInt(id),
            },
            data: {
                fecha_hora: changes.fecha_hora,
                cantidad: changes.cantidad
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.hora_extra.delete({
            where: {
                id_nombres_empleados: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = horaExtraService;