const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class asistenciaService {
    async create(data){
        try {
            const create = await prisma.asistencia.create({
                data: {
                    id_empleado: data.id_empleado,
                    actividad: data.actividad,
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const mesEnCurso = new Date().getMonth() + 1; // Mes actual
            const find = await prisma.asistencia.findMany({
                where: {
                    fecha_hora: {
                      // Filtra por el mes en curso
                      gte: new Date(new Date().getFullYear(), mesEnCurso - 1, 1), // Primer día del mes
                      lt: new Date(new Date().getFullYear(), mesEnCurso, 1) // Primer día del próximo mes
                    }
                  },
                  select:{
                    id_asistencia: true,
                    fecha_hora: true,
                    actividad: true,
                    empleado: {
                        select: {
                            nombre: true,
                            apellido: true,
                            puesto: {
                                select: {
                                    descripcion: true,
                                    tipo_contratacion: {
                                        select: {
                                            empresa: {
                                                select: {
                                                    descripcion: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            return find;
        } catch (error) {
            return error;
        }
    }

    async findOne(id){
        try {
            const findOne = await prisma.asistencia.findUnique({
                select:{
                    id_asistencia: true,
                    fecha_hora: true,
                    actividad: true,
                    empleado: {
                        select: {
                            nombre: true,
                            apellido: true,
                            puesto: {
                                select: {
                                    descripcion: true,
                                    tipo_contratacion: {
                                        select: {
                                            empresa: {
                                                select: {
                                                    descripcion: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                where: {
                    id_asistencia: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.asistencia.update({
            where: {
                id_asistencia: parseInt(id),
            },
            data: {
                id_empleado: changes.id_empleado,
                fecha_hora: changes.fecha_hora,
                actividad: changes.actividad,
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.asistencia.delete({
            where: {
                id_asistencia: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = asistenciaService;