const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class usercontroller {
  static createuser = async (req, res, next) => {
    const { name } = req.body;
    const { username } = req.body;
    const { password } = req.body;
    const { email } = req.body;
    const { telp } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(password, salt);

    try {
      const result = await user.create({
        name: name,
        username: username,
        password: pass,
        email: email,
        telp: telp,
      });
      res.status(200).json({ status: 'telah ada resgister', result });
    } catch (error) {
      next(error);
    }
  };

  static userlogin = async (req, res, next) => {
    const { username } = req.body;
    const { password } = req.body;

    try {
      const result = await user.findOne({ username: username });
      if (!result) {
        console.log('Email Salah!');
      }
      const passValid = bcrypt.compareSync(password, result.password);
      if (!passValid) {
        console.log('Password Salah!!');
      }
      const token = jwt.sign(
        {
          id: result.id,
          name: result.name,
          email: result.email,
        },
        'userlogin'
      );
      res.status(200).json({ Message: 'Anda Telah Login', Token: token });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = usercontroller;
