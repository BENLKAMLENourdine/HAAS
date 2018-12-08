const router = require('express').Router();
const handle = require('../handlers');

router.get('/generateDummyHash', handle.generateDummyHash);
router.post('/calculateHash', handle.calculateHash);

module.exports = router;