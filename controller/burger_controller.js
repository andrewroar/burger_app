const express = require("express");
const path = require("path");
const router = express.Router();
const burgerModel = require("../model/model.js");
//////////////
router.get("/", function (req, res) {
  const cb = (data) => {
    const hbsObject = {
      burgers: data,
    };

    res.render("index", hbsObject);
  };
  burgerModel.all(cb);
});

router.post("/api/burgers", function (req, res) {
  const cb = (result) => {
    res.send(result);
  };
  console.log(req.body);

  burgerModel.insert(req.body.name, cb);
});

router.put("/api/burgers/:id", function (req, res) {
  const id = req.params.id;
  let newDevourStatus = req.body;
  console.log(id);

  let { devoured } = newDevourStatus;

  const cb = (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  };
  burgerModel.update(devoured, id, cb);
});

router.delete("/api/burgers/:id", function (req, res) {
  const cb = (result) => {
    console.log(result);
    res.end();
  };
  const id = req.params.id;
  burgerModel.delete(id, cb);
});

////////////Java and CSS////////////
router.get("/assets/js/index.js", (req, res) => {
  const filepath = path.join(__dirname, "../public/assets/js/index.js");
  console.log(filepath);
  res.sendFile(filepath);
});

router.get("/assets/css/index.css", (req, res) => {
  const filepath = path.join(__dirname, "../public/assets/css/index.css");
  console.log(filepath);
  res.sendFile(filepath);
});
//////////////////
module.exports = router;
