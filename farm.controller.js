const farmSchema = require('../models/farm');
const userSchema = require('../models/user');

class farmController {
  // --- membangun farm
  static buildFarm = async (req, res, next) => {
    const { idUser } = req.body;
    const { NamaFarm } = req.body;
    const { Food } = req.body;
    console.log(req.body);
    try {
      const result = await farmSchema.create({
        idUser: idUser,
        NamaFarm: NamaFarm,
        Food: Food,
      });
      // await userSchema.findByIdAndUpdate(idUser, { $push: { Farm: result.id } }, { new: true });
      res.status(200).json({ Message: 'Berhasil Membangun Farm', result });
    } catch (error) {
      next(error);
    }
  };
  static findAll = async (req, res, next) => {
    const { idUser } = req.body;

    try {
      const result = await farmSchema.find({ idUser: idUser });
      res.status(200).json({ Message: 'Berhasil Membangun Farm', result });
    } catch (error) {
      next(error);
    }
  };
  static findById = async (req, res, next) => {
    const { idFarm } = req.body;

    try {
      const result = await farmSchema.find({ _id: idFarm });
      res.status(200).json({ Message: 'Berhasil Membangun Farm', result });
    } catch (error) {
      next(error);
    }
  };
  static delete = async (req, res, next) => {
    const { idFarm } = req.body;
    try {
      const result = await farmSchema.findOneAndDelete({ _id: idFarm });
      res.status(200).json({ Message: 'Berhasil merobohkan', result });
    } catch (error) {
      next(error);
    }
  };
  static update = async (req, res, next) => {
    const { idFarm, NamaFarm } = req.body;
    try {
      const result = await farmSchema.findOneAndUpdate(
        { _id: idFarm },
        {
          NamaFarm: NamaFarm,
        }
      );
      res.status(200).json({ Message: 'Berhasil Memperbarui Farm', result });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = farmController;
