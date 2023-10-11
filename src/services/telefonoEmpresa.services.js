const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class telefonoEmpresaService {
    async create(data){
        try {
            const telefonoEmpresaCreate = await prisma.telefono_empresa.create({
                data: {
                    id_empresa: data.id_empresa,
                    telefono: data.telefono,
                    estado_telefono_empresa: data.estado_telefono_empresa
                }
            })
            return telefonoEmpresaCreate;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const telefonoEmpresa = await prisma.telefono_empresa.findMany({
            select: {
                id_telefono_empresa: true,
                telefono: true,
                estado_telefono_empresa: true,
                empresa: {
                    select: {
                        descripcion: true
                    }
                }
            }
        });
        return telefonoEmpresa; 
    }

    async findOne(id){
        try {
            const telefonoEmpresaOne = await prisma.telefono_empresa.findUnique({
                select: {
                    id_telefono_empresa: true,
                    telefono: true,
                    estado_telefono_empresa: true,
                    empresa: {
                        select: {
                            descripcion: true
                        }
                    }
                },
                where: {
                    id_telefono_empresa: parseInt(id),
                },
            });
            return telefonoEmpresaOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const updateTelefonoEmpresa = await prisma.telefono_empresa.update({
            where: {
                id_telefono_empresa: parseInt(id),
            },
            data: {
                id_empresa: changes.id_empresa,
                telefono: changes.telefono,
                estado_telefono_empresa: changes.estado_telefono_empresa
            }
        });
        return updateTelefonoEmpresa;
    }

    async delete(id){
        const deleteTelefonoEmpresa = await prisma.telefono_empresa.delete({
            where: {
                id_telefono_empresa: parseInt(id),
            },
        });
        return deleteTelefonoEmpresa;
    }
}

module.exports = telefonoEmpresaService;