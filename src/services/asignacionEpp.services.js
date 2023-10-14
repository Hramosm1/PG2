const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class AsignacionEppService {
    async create(data){
        try {
            const create = await prisma.asignacion_epp.create({
                data: {
                    id_empleado: data.id_empleado,
                    id_epp: data.id_epp
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.asignacion_epp.findMany({
                select:{
                    id_asignacion_epp: true,
                    empleado: {
                        select: {
                            nombre: true,
                            apellido: true
                        }
                    },
                    epp: {
                        select: {
                            equipo: true
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
            const findOne = await prisma.asignacion_epp.findUnique({
                select:{
                    id_asignacion_epp: true,
                    empleado: {
                        select: {
                            nombre: true,
                            apellido: true
                        }
                    },
                    epp: {
                        select: {
                            equipo: true
                        }
                    }
                },
                where: {
                    id_asignacion_epp: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.asignacion_epp.update({
            where: {
                id_asignacion_epp: parseInt(id),
            },
            data: {
                id_epp: parseInt(changes.id_epp)
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.asignacion_epp.delete({
            where: {
                id_asignacion_epp: parseInt(id),
            }
        });
        return deleteId;
    }
}

module.exports = AsignacionEppService;