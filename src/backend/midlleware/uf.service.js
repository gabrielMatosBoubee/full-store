const ufValidation = (req, res, next) => {
    const { uf } = req.body;
    if (!uf) return res.status(400).json({ mesage: 'The key uf is required' });
    if (typeof uf !== 'string') {
        return res.status(400).json({ mesage: 'The field uf must be a string' });
    }
    if (uf.length !== 2) {
        return res.status(400).json({ mesage: 'The field uf must have two characters' });
    }
    next();
};

module.exports = { ufValidation };