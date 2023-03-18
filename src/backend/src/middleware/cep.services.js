const cepValidation = (req, res, next) => {
    const { cep } = req.body;
    if (!cep) return res.status(400).json({ mesage: 'The key cep is required' });
    if (typeof Number(cep) !== 'number') {
        return res.status(400).json({ mesage: 'The key cep must have only numbers' });
    }
    if (String(cep).length !== 8) {
        return res.status(400).json({ mesage: 'The key cep must have 8 characters' });
    }
    next();
};

module.exports = { cepValidation };