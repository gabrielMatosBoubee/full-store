const rgValidation = (req, res, next) => {
    const { rg } = req.body;
    if (!rg) return res.status(400).json({ mesage: 'The key rg is required' });
    if (typeof Number(rg) !== 'number') {
        return res.status(400).json({ mesage: 'The field rg must have only numbers' });
    }
    next();
};

module.exports = { rgValidation };