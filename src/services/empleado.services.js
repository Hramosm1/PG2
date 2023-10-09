const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class empleadoService {
    async create(data){
        try {
            const create = await prisma.empleado.create({
                data: {
                    id_puesto: data.id_puesto
                }
            })
            return create;
        } catch (error) {
            return error;
        }
    }

    async find(){
        try {
            const find = await prisma.empleado.findMany({
                select:{
                    id_empleado: true,
                    id_puesto: true,
                    puesto: {
                        select: {
                            salario_mensual:true,
                            descripcion: true,
                            tipo_contratacion: {
                                select: {
                                    descripcion: true
                                }
                            }
                        }
                    },
                    documento: {
                        select: {
                            no_documento: true,
                            tipo_documento: {
                                select: {
                                    descripcion
                                }
                            }
                        }
                    },
                    telefono_empleado: {
                        select: {
                            telefono_empleado: true
                        }
                    },
                    nombres_empleados: {
                        select: {
                            no_orden: true,
                            nombre: true
                        }
                    },
                    apellidos_empleados: {
                        select: {
                            no_orden: true,
                            apellido: true
                        }
                    },
                    email_empleado: {
                        select: {
                            email_empleado: true
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
            const findOne = await prisma.empleado.findUnique({
                select:{
                    id_empleado: true,
                    id_puesto: true,
                    puesto: {
                        select: {
                            salario_mensual:true,
                            descripcion: true,
                            tipo_contratacion: {
                                select: {
                                    descripcion: true
                                }
                            }
                        }
                    },
                    documento: {
                        select: {
                            no_documento: true,
                            tipo_documento: {
                                select: {
                                    descripcion
                                }
                            }
                        }
                    },
                    telefono_empleado: {
                        select: {
                            telefono_empleado: true
                        }
                    },
                    nombres_empleados: {
                        select: {
                            no_orden: true,
                            nombre: true
                        }
                    },
                    apellidos_empleados: {
                        select: {
                            no_orden: true,
                            apellido: true
                        }
                    },
                    email_empleado: {
                        select: {
                            email_empleado: true
                        }
                    }
                },
                where: {
                    id_empleado: parseInt(id),
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.empleado.update({
            where: {
                id_empleado: parseInt(id),
            },
            data: {
                id_puesto: changes.id_puesto,
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.empleado.delete({
            where: {
                id_empleado: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = empleadoService;