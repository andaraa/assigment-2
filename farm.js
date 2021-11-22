const mongoose = require('mongoose');
const { Schema } = mongoose;

const farmSchema = new Schema({
  idUser: { type: Schema.Types.ObjectId, ref: 'user' },
  NamaFarm: { type: String, require: true },
  Food: { type: Number, default: 0, min: 0, max: 20 },
});
const farm = mongoose.model('farm', farmSchema);
module.exports = farm;
