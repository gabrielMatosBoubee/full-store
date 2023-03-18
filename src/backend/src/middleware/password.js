const passwordValidation = (req, res, next) => {
    const { password } = req.body;
  if (!password) return res.status(400).json({ message: 'The field password is required' }); 
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;
  if (!regex.test(password)) { 
    return res.status(400).json({ message: `Minimum eight 
    characters, at least one uppercase letter, 
    one lowercase letter, one number and one special character` }); 
}
next(); 
};

module.exports = { passwordValidation };