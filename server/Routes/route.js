const { response } = require("express");
const express = require("express");
const router = express.Router();
const loginTemplateCopy = require("../models/LoginModel.js");
// post method
// login checking
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const userDetail = new loginTemplateCopy({
    email,
    password,
  });

  // promise
  userDetail
    .save()
    .then((data) => {
      console.log("Details saved ...");
      response.send("I recived the data");
    })
    .catch((err) => console.log(err));
});

//get method
router.get("/login", (request, response) => {
  const { email, password } = request.body;
  loginTemplateCopy.findOne(
    {
      email,
    },
    (err, data) => {
      if (err) console.log("err from get req : ", err);
      console.log("data : ", data);
    }
  );
  // .then((data) => {
  // })
  // .catch((err) => {
  //   console.log("err from get req : ", err);
  // });
});

module.exports = router;
