const cpfValidation = async (req, res, next) => {
    const { cpf } = req.body;
    if (!cpf) return res.status(400).json({ mesage: 'The key cpf is required' });
    if (typeof Number(cpf) !== 'number') {
        return res.status(400).json({ mesage: 'The key cpf must have only numbers' });
    }
    if (String(cpf).length !== 11) {
        return res.status(400).json({ mesage: 'The key cpf must have 11 characters' });
    }
    next();
};

module.exports = { cpfValidation };