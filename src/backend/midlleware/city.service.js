const cityValidation = (req, res, next) => {
    const { city } = req.body;
    if (!city) return res.status(400).json({ mesage: 'The key city is required' });
    if (typeof city !== 'string') {
        return res.status(400).json({ mesage: 'The city must be a string' });
    }
    next();
};

module.exports = { cityValidation };