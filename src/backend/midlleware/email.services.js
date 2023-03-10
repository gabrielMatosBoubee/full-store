const emailValidation = async (req, res, next) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'The field email is required' });
    if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i.test(email)) {
      return res.status(400).json({
       message: 'The "email" must have the formart "email@email.com"',
     });
     }
     next();
};

module.exports = { emailValidation };