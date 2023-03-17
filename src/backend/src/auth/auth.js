const jwt = require('jsonwebtoken')

require('dotenv').config();

const secret = process.env.JWT_SECRET

const createToken = (data) => jwt.sign({ data }, secret, {
    algorithm: 'HS256',
    expiresIn: '1d'
});

const verifyToken = (token) => jwt.verify(token, secret)

module.exports = { createToken, verifyToken }