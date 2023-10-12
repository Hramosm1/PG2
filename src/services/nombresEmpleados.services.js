const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class nombresEmpleadosService {
    async create(data){
        try {
            const create = await prisma.nombres_empleados.create({
                data: {
                    id_empleado: data.id_empleado,
                    no_orden: data.no_orden,
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
            const find = await prisma.nombres_empleados.findMany({
                select:{
                    id_nombres_empleados: true,
                    no_orden: true,
                    nombre: true,
                    empleado: {
                        select: {
                            nombre: true,
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
            const findOne = await prisma.nombres_empleados.findUnique({
                select:{
                    id_nombres_empleados: true,
                    no_orden: true,
                    nombre: true,
                    empleado: {
                        select: {
                            nombre: true,
                            apellido: true
                        }
                    }
                },
                where: {
                    id_nombres_empleados: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.nombres_empleados.update({
            where: {
                id_nombres_empleados: parseInt(id),
            },
            data: {
                no_orden: changes.no_orden,
                nombre: changes.nombre
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.nombres_empleados.delete({
            where: {
                id_nombres_empleados: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = nombresEmpleadosService;