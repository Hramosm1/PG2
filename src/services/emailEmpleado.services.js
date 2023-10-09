const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class emailEmpleadoService {
    async create(data){
        try {
            const create = await prisma.email_empleado.create({
                data: {
                    id_empleado: data.id_empleado,
                    email_empleado: data.email_empleado,
                    estado_email_empleado: data.estado_email_empleado
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.email_empleado.findMany({
                select:{
                    id_email_empleado: true,
                    id_empleado: true,
                    email_empleado: true,
                    estado_email_empleado: true
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
            const findOne = await prisma.email_empleado.findUnique({
                select:{
                    id_email_empleado: true,
                    id_empleado: true,
                    email_empleado: true,
                    estado_email_empleado: true
                },
                where: {
                    id_email_empleado: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.email_empleado.update({
            where: {
                id_email_empleado: parseInt(id),
            },
            data: {
                email_empleado: changes.email_empleado,
                estado_email_empleado: changes.estado_email_empleado
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.email_empleado.delete({
            where: {
                id_email_empleado: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = emailEmpleadoService;