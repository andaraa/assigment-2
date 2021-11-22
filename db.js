const mongoose = require('mongoose');

const connectDB = () => {
  main().catch((err) => console.log(err));

  async function main() {
    await mongoose.connect('mongodb://localhost:27017/dbandara');

    console.log('DB CONNECTED');
  }
};
module.exports = connectDB;
