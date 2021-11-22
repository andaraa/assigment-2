const express = require('express');
const farmRouter = express.Router();
const farmController = require('../controller/farm.controller');

farmRouter.post('/buildFarm', farmController.buildFarm);
farmRouter.post('/findAll', farmController.findAll);
farmRouter.post('/findById', farmController.findById);
farmRouter.delete('/delete', farmController.delete);
farmRouter.post('/update', farmController.update);

module.exports = farmRouter;
