const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class nominaService {
    async create(data){
        try {
            const create = await prisma.nomina.create({
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
            const find = await prisma.nomina.findMany({
                select:{
                    id_nomina: true,
                    id_empleado: true,
                    fecha_inicio: true,
                    fecha_fin: true,
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
            const findOne = await prisma.nomina.findUnique({
                select:{
                    id_nomina: true,
                    id_empleado: true,
                    fecha_inicio: true,
                    fecha_fin: true,
                    empleado: {
                        select: {
                            id_empleado
                        }
                    }
                },
                where: {
                    id_nomina: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.nomina.update({
            where: {
                id_nomina: parseInt(id),
            },
            data: {
                fecha_inicio: changes.fecha_inicio,
                fecha_fin: changes.fecha_fin
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.nomina.delete({
            where: {
                id_nomina: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = nominaService;