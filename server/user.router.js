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
  const filter = {personalCode: req.body.personalCode};
  const doc = req.body;
  if(req.body.fullName == "") return res.send(500);
  if(req.body.address == "") return res.send(500);
  if(req.body.phoneNumber == "") return res.send(500);
  if(req.body.personalCode == "") return res.send(500);
  const options = {
    upsert: true
  };

  try {
    const {n, nModified} = await User.updateOne(filter, doc, options);
    console.log("n", n, "nModified", nModified);
    res.send(200);
  }
  catch {
    res.send(500);
  }
});

module.exports = router;