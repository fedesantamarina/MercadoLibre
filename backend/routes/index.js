const express = require("express");
const url = require("url");
const querystring = require("querystring");
const router = express.Router();
const searchService = require("../services/searchService");
const product = require("../business/product");
const products = require("../business/products");
router.route("/").get(async (req, res) => {
  const query = req.query.q;
  try {
    const result = await products(query);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json({});
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await product(id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json({});
  }
});

module.exports = router;
