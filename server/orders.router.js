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

router.post("/search", (req, res) => {
  console.log("search", req.body);

  Order.find(createSearchQuery(req.body), (err, docs) => {
    if(err) return send(500);
    res.send(docs);
  });
  res.send(200);
});


const createSearchQuery = ({fullName, drink, burger}) => {
  const query = {};
  if(fullName.trim().length !== 0) query.fullName = fullName;
  if(drink.trim().length !== 0) query.drink = drink;
  if(burger.trim().length !== 0) query.burger = burger;
  return {

  }
};

module.exports = router;

