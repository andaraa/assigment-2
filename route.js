const express = require('express');
const router = express.Router();

const playerRouter = require('./player.route');
const barackRouter = require('./barrack.route');
const farmRouter = require('./farm.route');
const marketRouter = require('./market.route');

router.use('/user', playerRouter);
router.use('/barack', barackRouter);
router.use('/farm', farmRouter);
router.use('/market', marketRouter);

module.exports = router;
