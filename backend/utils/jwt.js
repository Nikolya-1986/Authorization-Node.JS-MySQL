const jwt = require('jsonwebtoken');

const jwtConfig = require('../config/jwt');

exports.verifyToken = (token) => jwt.verify(token, jwtConfig.sercet);
exports.createToken = (data) => jwt.sign(data, jwtConfig.sercet, { expiresIn: jwtConfig.ttl });
