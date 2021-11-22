const mongoose = require('mongoose');
const { Schema } = mongoose;

const barackSchema = new Schema({
  idUser: { type: Schema.Types.ObjectId, ref: 'user' },
  NamaBarack: { type: String, require: true },
  Soldier: { type: Number, default: 0, min: 0, max: 30 },
});
const barack = mongoose.model('barack', barackSchema);
module.exports = barack;
