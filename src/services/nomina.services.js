const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class nominaService {
    async create(data){
        try {
            const create = await prisma.nomina.create({
                data: {
                    id_empleado: data.id_empleado,
                    fecha_inicio: data.fecha_inicio,
                    fecha_fin: data.fecha_fin,
                    diasLaborados: data.diasLaborados,
                    horasExtras: data.horasExtras,
                    bonificaciones: data.bonificaciones,
                    igss: data.igss,
                    irtra: data.irtra,
                    totalPagar: data.totalPagar
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
            const find = await prisma.nomina.findMany({
                where: {
                    fecha_inicio: {
                      // Filtra por el mes en curso
                      gte: new Date(new Date().getFullYear(), mesEnCurso - 1, 1), // Primer día del mes
                      lt: new Date(new Date().getFullYear(), mesEnCurso, 1) // Primer día del próximo mes
                    }
                  },
                  select:{
                    id_nomina: true,
                    fecha_inicio: true,
                    fecha_fin: true,
                    diasLaborados: true,
                    horasExtras: true,
                    bonificaciones: true,
                    igss: true,
                    irtra: true,
                    totalPagar: true,
                    empleado: {
                        select: {
                            nombre: true,
                            apellido: true
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
            const findOne = await prisma.nomina.findUnique({
                select:{
                    id_nomina: true,
                    fecha_inicio: true,
                    fecha_fin: true,
                    diasLaborados: true,
                    horasExtras: true,
                    bonificaciones: true,
                    igss: true,
                    irtra: true,
                    totalPagar: true,
                    empleado: {
                        select: {
                            nombre: true,
                            apellido: true
                        }
                    }
                },
                where: {
                    id_nomina: parseInt(id)
                },
            });
            return findOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const update = await prisma.nomina.update({
            where: {
                id_nomina: parseInt(id),
            },
            data: {
                fecha_inicio: changes.fecha_inicio,
                fecha_fin: changes.fecha_fin
            }
        });
        return update;
    }

    async delete(id){
        const deleteId = await prisma.nomina.delete({
            where: {
                id_nomina: parseInt(id),
            },
        });
        return deleteId;
    }
}

module.exports = nominaService;