const { verifyToken } = require('../auth/auth');

const validateToken = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const payload = verifyToken(authorization);
        req.body.data = payload.data;
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Expired or invalid token',
        });
    }
};

const hasAuthorization = (req, res, next) => {
    const { admin } = req.body.data;

    if (!admin) {
        return res.status(401).json({ message: 'Authorization denied' });
    };

    next();
}

module.exports = { validateToken, hasAuthorization };