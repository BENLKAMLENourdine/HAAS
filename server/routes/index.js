const router = require('express').Router();
const handle = require('../handlers');

router.get('/generateDummyHash', handle.generateDummyHash);

module.exports = router;