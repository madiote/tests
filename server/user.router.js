const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");
const multer = require('multer');

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});

router.post("/", async (req, res) => {
  const existingUser = await User.findOne({ personalCode: req.personalCode });
  let user;
  if(existingUser != null){
    user = existingUser;
    console.log(user, "existing");
  }
  else {
    user = new User(req.body);
    console.log(user, "new");

  }

  user.save((err) => {
    if(err) {
      console.log(err);
      res.send(500);
    }
    res.send(200);
  })
});

module.exports = router;

