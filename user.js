const mongoose = require('mongoose');
const { Schema } = mongoose;

const userschema = new Schema({
  name: { type: String }, // String is shorthand for {type: String}
  username: String,
  password: String,
  email: String,
  telp: { type: String },
  townhall: {
    gold: { type: Number, default: 100, min: 0, max: 1000 },
    food: { type: Number, default: 100, min: 0, max: 1000 },
    soldier: { type: Number, default: 0, min: 0, max: 500 },
    medal: { type: Number, default: 0 },
  },
  Barack: [{ type: Schema.Types.ObjectId, ref: 'barack' }],
  Farm: [{ type: Schema.Types.ObjectId, ref: 'farm' }],
  Market: [{ type: Schema.Types.ObjectId, ref: 'market' }],
});
const user = mongoose.model('user', userschema);
module.exports = user;
