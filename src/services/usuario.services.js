const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class usuarioService {
    async create(data) {
        try {
            const usuarioCreate = await prisma.usuarios.create({
                data: {
                    id_rol: data.id_rol,
                    usuario: data.usuario,
                    email: data.email,
                    password: data.password,
                }
            })
            return usuarioCreate;
        } catch (error) {
            return error;
        }
    }
    async find(){
        const usuarios = await prisma.usuarios.findMany();
        return usuarios;
    }
    async findOne(id){
        try {
            const usuarioOne = await prisma.usuarios.findUnique({
                where: {
                    id_usuario: parseInt(id),
                },
            });
            return usuarioOne;
        } catch (error) {
            return error;
        }
    }
    async update(id, changes){
        const updateUsuario = await prisma.usuarios.update({
            where: {
                id_usuario: parseInt(id),
            },
            data: {
                id_rol: changes.id_rol,
                usuario: changes.usuario,
                email: changes.email,
                password: changes.password,
            }
        });
        return updateUsuario;
    }
    async delete(id){
        const deleteUsuario = await prisma.usuarios.delete({
            where: {
                id_usuario: parseInt(id),
            },
        });

        return deleteUsuario;
    }  
}

module.exports = usuarioService;