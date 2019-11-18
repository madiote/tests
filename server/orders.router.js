const express = require("express");
const router = express.Router();
const {Order} = require("./order.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Order.find({});
  res.send(xs);
});

router.post("/", (req, res) => {
  const order = new Order(req.body);
  order.save((err) => {
    if(err) {
      console.log(err);
      res.send(500);
    }
    res.send(200);
  })
});

router.get("/fullName=:fullName&burger=:burger&drink=:drink",(req, res)=>{
  Item.find({
    fullName: this.fullName, 
    burger: this.burger, 
    drink: this.drink
  }, function(err, item) {
      if(err){
          console.log("Error: ", err);
          res.status(500).send(err);
          return;
      }
      res.send(item);
  });
});

module.exports = router;

