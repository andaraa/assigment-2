const marketSchema = require('../models/market');
const userSchema = require('../models/user');

class market {
  // --- membangun market
  static buildMarket = async (req, res, next) => {
    const { idUser } = req.body;
    const { NamaMarket } = req.body;
    const { Gold } = req.body;

    try {
      const result = await marketSchema.create({
        idUser: idUser,
        NamaMarket: NamaMarket,
        Gold: Gold,
      });
      await userSchema.findByIdAndUpdate(idUser, { $push: { Barack: result.id } }, { new: true });
      res.status(200).json({ Message: 'Berhasil Membangun Market', result });
    } catch (error) {
      next(error);
    }
  };
  static findAll = async (req, res, next) => {
    const { idUser } = req.body;

    try {
      const result = await marketSchema.find({ idUser: idUser });
      res.status(200).json({ Message: 'Melihat Semua List Market', result });
    } catch (error) {
      next(error);
    }
  };
  static findById = async (req, res, next) => {
    const { idMarket } = req.body;

    try {
      const result = await marketSchema.find({ _id: idMarket });
      res.status(200).json({ Message: 'Melihat Detail Market', result });
    } catch (error) {
      next(error);
    }
  };
  static delete = async (req, res, next) => {
    const { idMarket } = req.body;

    try {
      const result = await marketSchema.findOneAndDelete({ _id: idMarket });
      res.status(200).json({ Message: 'Merobohkan Market', result });
    } catch (error) {
      next(error);
    }
  };
  static update = async (req, res, next) => {
    const { idMarket, NamaMarket } = req.body;

    try {
      const result = await marketSchema.findOneAndUpdate(
        { _id: idMarket },
        {
          NamaMarket: NamaMarket,
        }
      );

      res.status(200).json({ Message: 'Merubah Nama Market', result });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = market;
