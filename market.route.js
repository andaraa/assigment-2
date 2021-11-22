const express = require('express');
const marketRouter = express();

const marketController = require('../controller/market.controller');

marketRouter.post('/buildMarket', marketController.buildMarket);
marketRouter.post('/findAll', marketController.findAll);
marketRouter.post('/findById', marketController.findById);
marketRouter.delete('/delete', marketController.delete);
marketRouter.post('/update', marketController.update);

module.exports = marketRouter;
