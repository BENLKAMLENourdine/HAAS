const router = require('express').Router();
const handle = require('../handlers');
const auth = require('../middleware/');

router.get('/generateDummyHash', handle.generateDummyHash);
router.post('/calculateHash', auth, handle.calculateHash);
router.post('/login', handle.login);
router.post('/register', handle.register);
module.exports = router;