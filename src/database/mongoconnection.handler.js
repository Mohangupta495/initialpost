const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection is established", conn.connection.host);
  } catch (err) {
    console.log("Error", err.message);
  }
};
module.exports = connectionDB;
