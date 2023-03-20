const services = require('../services');

const existUser = async (req, res, next) => {
    const { email } = req.body;

    const { type, message } = await services.user.existUser({ email });

    if (type === 404) {
        return res.status(type).json(message);
    }
    next();
}

module.exports = { existUser }