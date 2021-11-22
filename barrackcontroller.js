const barackSchema = require('../models/barrack');
const userSchema = require('../models/user');

class baracks {
  // --- membangun barack
  static buildBarack = async (req, res, next) => {
    const { idUser } = req.body;
    const { NamaBarack } = req.body;
    const { Soldier } = req.body;

    try {
      const result = await barackSchema.create({
        idUser: idUser,
        NamaBarack: NamaBarack,
        Soldier: Soldier,
      });
      await userSchema.findByIdAndUpdate(idUser, { $push: { Barack: result.id } }, { new: true });
      res.status(200).json({ Message: 'Berhasil Membangun Barack', result });
    } catch (error) {
      next(error);
    }
  };
  static findAll = async (req, res, next) => {
    const { idUser } = req.body;

    try {
      const result = await barackSchema.find({ idUser: idUser });
      res.status(200).json({ Message: 'Berhasil Membangun Barack', result });
    } catch (error) {
      next(error);
    }
  };
  static findById = async (req, res, next) => {
    const { idBarack } = req.body;

    try {
      const result = await barackSchema.find({ _id: idBarack });
      res.status(200).json({ Message: 'Berhasil Membangun Barack', result });
    } catch (error) {
      next(error);
    }
  };
  static delete = async (req, res, next) => {
    const { idBarack } = req.body;

    try {
      const result = await barackSchema.findOneAndDelete({ _id: idBarack });
      res.status(200).json({ Message: 'Berhasil Merobohkan Barack', result });
    } catch (error) {
      next(error);
    }
  };
  static update = async (req, res, next) => {
    const { idBarack, NamaBarack } = req.body;

    try {
      const result = await barackSchema.findOneAndUpdate(
        { _id: idBarack },
        {
          NamaBarack: NamaBarack,
        }
      );
      res.status(200).json({ Message: 'Berhasil Memperbarui Barack', result });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = baracks;
