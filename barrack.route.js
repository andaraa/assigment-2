const express = require('express');
const barackRouter = express();

const barackController = require('../controller/barrackcontroller');

barackRouter.post('/buildBarack', barackController.buildBarack);
barackRouter.post('/findAll', barackController.findAll);
barackRouter.post('/findById', barackController.findById);
barackRouter.delete('/delete', barackController.delete);
barackRouter.post('/update', barackController.update);

module.exports = barackRouter;
