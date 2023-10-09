const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class telefonoEmpleadoService {
    async create(data){
        try {
            const create = await prisma.telefono_empleado.create({
                data: {
                    id_empleado: data.id_empleado,
                    telefono_empleado: data.telefono_empleado,
                    estado_telefono_empleado: data.estado_telefono_empleado
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.telefono_empleado.findMany({
                select:{
                    id_telefono_empleado: true,
                    id_empleado: true,
                    telefono_empleado: true,
                    estado_telefono_empleado: true,
                    empleado: {
                        select: {
                            id_empleado
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
            const findOne = await prisma.telefono_empleado.findUnique({
                select:{
                    id_telefono_empleado: true,
                    id_empleado: true,
                    telefono_empleado: true,
                    estado_telefono_empleado: true,
                    empleado: {
                        select: {
                            id_empleado
                        }
                    }
                },
                where: {
                    id_telefono_empleado: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.telefono_empleado.update({
            where: {
                id_telefono_empleado: parseInt(id),
            },
            data: {
                telefono_empleado: changes.telefono_empleado,
                estado_telefono_empleado: changes.estado_telefono_empleado
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.telefono_empleado.delete({
            where: {
                id_telefono_empleado: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = telefonoEmpleadoService;