const mongoose = require('mongoose');
const { Schema } = mongoose;

const marketSchema = new Schema({
  idUser: { type: Schema.Types.ObjectId, ref: 'user' },
  NamaMarket: { type: String, require: true },
  Gold: { type: Number, default: 0, min: 0, max: 20 },
});
const market = mongoose.model('market', marketSchema);
module.exports = market;
