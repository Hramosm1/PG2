const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class plazaService {
    async create(data){
        try {
            const plazaCreate = await prisma.plaza.create({
                data: {
                    id_estado_plaza: data.id_estado_plaza,
                    descripcion: data.descripcion,
                }
            })
            return plazaCreate;
        } catch (error) {
            return error;
        }
    }

    async find(){
        const plazas = await prisma.plaza.findMany();
        return plazas; 
    }

    async findOne(id){
        try {
            const plazaOne = await prisma.plaza.findUnique({
                where: {
                    id_plaza: parseInt(id),
                },
            });
            return plazaOne;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        const updatePlaza = await prisma.plaza.update({
            where: {
                id_plaza: parseInt(id),
            },
            data: {
                id_estado_plaza: changes.estado,
                descripcion: changes.descripcion,
            }
        });
        return updatePlaza;
    }

    async delete(id){
        const deletePlaza = await prisma.plaza.delete({
            where: {
                id_plaza: parseInt(id),
            },
        });
        return deletePlaza;
    }
}

module.exports = plazaService;