const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class empresaService {
    async create(data){
        try {
            const empresaCreate = await prisma.empresa.create({
                data: {
                    descripcion: data.descripcion,
                    id_estado: data.id_estado,
                }
            })
            return empresaCreate;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const empresas = await prisma.empresa.findMany();
        return empresas; 
    }

    async findOne(id){
        try {
            const empresaOne = await prisma.empresa.findUnique({
                select:{
                    id_empresa: true,
                    descripcion: true,
                    id_estado: true,
                    estado_empresa: {
                        select: {
                            id_estado_empresa: true,
                            descripcion: true
                        }

                    },
                },
                where: {
                    id_empresa: parseInt(id),
                },
            });
            return empresaOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const updateEmpresa = await prisma.empresa.update({
            where: {
                id_empresa: parseInt(id),
            },
            data: {
                descripcion: changes.descripcion,
                id_estado: changes.estado,
            }
        });
        return updateEmpresa;
    }

    async delete(id){
        const deleteEmpresa = await prisma.empresa.delete({
            where: {
                id_empresa: parseInt(id),
            },
        });
        return deleteEmpresa;
    }
}

module.exports = empresaService;