const VisiterModel = require("../model/visiter.model");

const visiterDetails = async (req, res) => {
  console.log(req.body);
  const { name, email, phone, desc } = req.body;
  const visiter = new VisiterModel({ name, email, phone, desc });
  const savedUserData = await visiter.save();
  const response = { isSaved: true, dbResponse: savedUserData };
  res.status(200).send(response);
};

module.exports = visiterDetails;
