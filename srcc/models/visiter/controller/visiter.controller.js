const VisiterModel = require("../model/visiter.model");
const ResponseModel = require("../../output/response.model");

const visiterDetails = async (req, res) => {
  const { name, email, phone, desc } = req.body;
  const visiter = new VisiterModel({ name, email, phone, desc });
  const savedUserData = await visiter.save();
  const response = { isSaved: true, dbResponse: savedUserData };
  res.status(200).send(response);
};

const getVisiterDetails = async (req, res) => {
  const savedVisiterModel = await VisiterModel.find();
  if (savedVisiterModel) {
    const response = ResponseModel(200, true, {
      visiter: savedVisiterModel,
    });
    res.status(200).send(response);
  } else {
    const response = ResponseModel(404, false, undefined, "Visiter not found");
    res.status(404).send(response);
  }
};
module.exports = { visiterDetails, getVisiterDetails };
