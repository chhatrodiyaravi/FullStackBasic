const mongoose = require("mongoose");

async function connectDb() {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongodb run on ${connect.connection.host} host`);
  } catch (error) {
    console.log(`Mongodb connection Error ${error.messge}`);
  }
}

module.exports = connectDb;
