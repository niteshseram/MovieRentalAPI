const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("API for genres!!!");
});

module.exports = router;
