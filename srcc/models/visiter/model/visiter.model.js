const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const VisiterModel = new Schema(
  {
    phoneNo: String,
    name: String,
    desc: String,
    email: String,
    lastActivityTimeStamp: { type: Number, default: new Date() },
  },
  { timestamps: true }
);
// UserModel.index({ phoneNo: 1 });
// UserModel.index({ username: 1 });
// UserModel.index({ isGuest: 1 });

const userModel = mongoose.model("Visiter", VisiterModel);
module.exports = userModel;
