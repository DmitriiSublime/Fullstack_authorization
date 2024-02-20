const jwt = require('jsonwebtoken');
const { prisma } = require('../prisma/prisma-client');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await prisma.user.findFirst({
            where: {
                id: decodedData.id
            }
        });
        next();
    } catch {
        res.status(401).json({ message: 'Пользователь не авторизован' })
    }
}

module.exports = {auth};