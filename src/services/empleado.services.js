const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class empleadoService {
    async create(data){
        try {
            const create = await prisma.empleado.create({
                data: {
                    id_puesto: data.id_puesto,
                    apellido: data.apellido,
                    nombre: data.nombre
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.empleado.findMany({
                select:{
                    id_empleado: true,
                    apellido: true,
                    nombre: true,
                    nombres_empleados: {
                        select: {
                            no_orden: true,
                            nombre: true
                        }
                    },
                    apellidos_empleados: {
                        select: {
                            no_orden: true,
                            apellido: true
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
            const findOne = await prisma.empleado.findUnique({
                select:{
                    id_empleado: true,
                    apellido: true,
                    nombre: true,
                    nombres_empleados: {
                        select: {
                            no_orden: true,
                            nombre: true
                        }
                    },
                    apellidos_empleados: {
                        select: {
                            no_orden: true,
                            apellido: true
                        }
                    }
                },
                where: {
                    id_empleado: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.empleado.update({
            where: {
                id_empleado: parseInt(id),
            },
            data: {
                id_puesto: changes.id_puesto,
                apellido: changes.apellido,
                nombre: changes.nombre,
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.empleado.delete({
            where: {
                id_empleado: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = empleadoService;