const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class emailEmpresaService {
    async create(data){
        try {
            const create = await prisma.email_empresa.create({
                data: {
                    id_empresa: data.id_empresa,
                    email_empresa: data.email_empresa,
                    estado_email_empresa: data.estado_email_empresa
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const find = await prisma.email_empresa.findMany({
            select: {
                id_email_empresa: true,
                email_empresa: true,
                estado_email_empresa: true,
                empresa: {
                    select: {
                        descripcion
                    }
                }
            }
        });
        return find; 
    }

    async findOne(id){
        try {
            const findOne = await prisma.email_empresa.findUnique({
                select: {
                    id_email_empresa: true,
                    email_empresa: true,
                    estado_email_empresa: true,
                    empresa: {
                        select: {
                            descripcion
                        }
                    }
                },
                where: {
                    id_email_empresa: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.email_empresa.update({
            where: {
                id_email_empresa: parseInt(id),
            },
            data: {
                id_empresa: changes.id_empresa,
                email_empresa: changes.email_empresa,
                estado_email_empresa: changes.estado_email_empresa
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.email_empresa.delete({
            where: {
                id_email_empresa: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = emailEmpresaService;