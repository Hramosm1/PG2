const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const loginUser = async (identifier, password) => {
  try {
    const user = await prisma.usuarios.findFirst({
      where: {
        OR: [
          { usuario: identifier },
          { email: identifier },
        ],
      },
    });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    if (user.password !== password) {
      throw new Error('Contraseña incorrecta');
    }

    const token = jwt.sign({ id: user.id_usuario }, process.env.SECRET_KEY, { expiresIn: '24h' });

    return token;
  } catch (error) {
    throw new Error('Error al iniciar sesión' + error);
  }
};

module.exports = { loginUser };
