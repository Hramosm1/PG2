const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class apellidosEmpleadosService {
    async create(data){
        try {
            const create = await prisma.apellidos_empleados.create({
                data: {
                    id_empleado: data.id_empleado,
                    no_orden: data.no_orden,
                    apellido: apellido
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.apellidos_empleados.findMany({
                select:{
                    id_apellidos_empleados: true,
                    id_empleado: true,
                    no_orden: true,
                    apellido: true
                }
            });
            return find;
        } catch (error) {
            return error;
        }
    }

    async findOne(id){
        try {
            const findOne = await prisma.apellidos_empleados.findUnique({
                select:{
                    id_apellidos_empleados: true,
                    id_empleado: true,
                    no_orden: true,
                    apellido: true
                },
                where: {
                    id_apellidos_empleados: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.apellidos_empleados.update({
            where: {
                id_apellidos_empleados: parseInt(id),
            },
            data: {
                no_orden: changes.no_orden,
                apellido: changes.apellido
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.apellidos_empleados.delete({
            where: {
                id_apellidos_empleados: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = apellidosEmpleadosService;