const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class estadoEmpresaService {
    async create(data){
        try {
            const estadoEmpresaCreate = await prisma.estado_empresa.create({
                data: {
                    descripcion: data.descripcion,
                }
            })
            return estadoEmpresaCreate;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const estadoEmpresa = await prisma.estado_empresa.findMany();
        return estadoEmpresa; 
    }

    async findOne(id){
        try {
            const estadoEmpresaOne = await prisma.estado_empresa.findUnique({
                where: {
                    id_estado_empresa: parseInt(id),
                },
            });
            return estadoEmpresaOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const updateEstadoEmpresa = await prisma.estado_empresa.update({
            where: {
                id_estado_empresa: parseInt(id),
            },
            data: {
                descripcion: changes.descripcion,
            }
        });
        return updateEstadoEmpresa;
    }

    async delete(id){
        const deleteEstadoEmpresa = await prisma.estado_empresa.delete({
            where: {
                id_estado_empresa: parseInt(id),
            },
        });
        return deleteEstadoEmpresa;
    }
}

module.exports = estadoEmpresaService;