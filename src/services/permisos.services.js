const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class permisosService {
    async create(data){
        try {
            const permisoCreate = await prisma.permisos.create({
                data: {
                    id_modulo: data.id_modulo,
                    id_rol: data.id_rol,
                    r: data.r,
                    w: data.w,
                    u: data.u,
                    d: data.d
                }
            })
            return permisoCreate;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const permisos = await prisma.permisos.findMany({
            select: {
                id_permiso: true,
                r: true,
                w: true,
                u: true,
                d: true,
                rol: {
                    select:{
                        descripcion: true
                    }
                },
                modulos: {
                    select: {
                        descripcion: true
                    }
                }
            }
        });
        return permisos; 
    }

    async findOne(id){
        try {
            const permisoOne = await prisma.permisos.findUnique({
                select: {
                    id_permiso: true,
                    r: true,
                    w: true,
                    u: true,
                    d: true,
                    rol: {
                        select:{
                            descripcion: true
                        }
                    },
                    modulos: {
                        select: {
                            descripcion: true
                        }
                    }
                },
                where: {
                    id_permiso: parseInt(id),
                },
            });
            return permisoOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const updatePermiso = await prisma.permisos.update({
            where: {
                id_permiso: parseInt(id),
            },
            data: {
                id_modulo: changes.id_modulo,
                id_rol: changes.id_rol,
                r: changes.r,
                w: changes.w,
                u: changes.u,
                d: changes.d,
            }
        });
        return updatePermiso;
    }

    async delete(id){
        const deletePermiso = await prisma.permisos.delete({
            where: {
                id_permiso: parseInt(id),
            },
        });
        return deletePermiso;
    }
}

module.exports = permisosService;