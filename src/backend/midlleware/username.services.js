const usernameValidation = (req, res, next) => {
    const { username } = req.body;
    if (!username) return res.status(400).json({ mesage: 'The key username is necessary' });    
    if (typeof username !== 'string') {
        return res.status(400).json({ mesage: 'The username must to be string' });
    }
    if (/[ ]/gm.test(username)) {
        return res.status(400).json({ mesage: 'The username mustn\'t have space' });
    }
    if (username.length < 6) {
        return res.status(400).json({ 
            mesage: 'The username must to have more than 6 characters' }); 
}
        
    next();
};

module.exports = { usernameValidation };