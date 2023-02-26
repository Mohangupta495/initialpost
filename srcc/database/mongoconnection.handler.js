const mongoose = require("mongoose");

const connectionDB = async () => {
  const MONGODB_URI =
    "mongodb+srv://mohan:mohan@webbrings.pageubo.mongodb.net/retryWrites=true&w=majority";
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection is established", conn.connection.host);
  } catch (err) {
    console.log("Error", err.message);
  }
};
module.exports = connectionDB;
