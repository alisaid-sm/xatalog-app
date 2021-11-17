const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY || 'dfc36a50';

module.exports = (req, res, next) => {
    if (!req.headers.token) return res.status(401).json({code: 401, message: 'Unauthorized'});
    jwt.verify(req.headers.token, JWT_KEY, (err, result) => {
        if (err) {
            return res.status(400).json({code: 400, message: 'Invalid Token'});
        } else {
            Object.assign(req.headers, { permissions: result });
            next();
        }
    });
}