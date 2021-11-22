const express = require('express');
const playerRouter = express();

const usercontroller = require('./../controller/user.controller');
// define the home page route
// playerRouter.get('/', function (req, res) {
//   res.send('student GET playerRouter');
// });

playerRouter.post('/register', usercontroller.createuser);
playerRouter.post('/login', usercontroller.userlogin);
// playerRouter.get('/', usercontroller.showAll);

// playerRouter.delete('/', function (req, res) {
//   res.send('student DELETE playerRouter');
// });

module.exports = playerRouter;
