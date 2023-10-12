const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class puestoService {
    async create(data){
        try {
            const create = await prisma.puesto.create({
                data: {
                    id_tipo_contratacion: data.id_tipo_contratacion,
                    salario_mensual: data.salario_mensual,
                    descripcion: data.descripcion
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.puesto.findMany({
                select:{
                    id_puesto: true,
                    salario_mensual: true,
                    descripcion: true,
                    tipo_contratacion: {
                        select: {
                            descripcion: true,
                            empresa: {
                                select: {
                                    descripcion: true
                                }
                            }
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
            const findOne = await prisma.puesto.findUnique({
                select:{
                    id_puesto: true,
                    salario_mensual: true,
                    descripcion: true,
                    tipo_contratacion: {
                        select: {
                            descripcion: true,
                            empresa: {
                                select: {
                                    descripcion: true
                                }
                            }
                        }
                    }
                },
                where: {
                    id_puesto: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.puesto.update({
            where: {
                id_puesto: parseInt(id),
            },
            data: {
                id_tipo_contratacion: changes.id_tipo_contratacion,
                salario_mensual: changes.salario_mensual,
                descripcion: changes.descripcion
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.puesto.delete({
            where: {
                id_puesto: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = puestoService;