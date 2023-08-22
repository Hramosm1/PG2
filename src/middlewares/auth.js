const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const authenticateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Acceso no autorizado' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await prisma.usuarios.findUnique({ where: { id_usuario: decoded.id } });

    if (!user) return res.status(401).json({ error: 'Usuario no encontrado' });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: err });
  }
};

module.exports = { authenticateToken };
