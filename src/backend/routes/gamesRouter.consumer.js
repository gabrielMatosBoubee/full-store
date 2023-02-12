const express = require('express');

const router = express.Router();

router.get('/', async (_req, res) => {
    res.status(200).json({});
});

router.post('');

module.exports = router;