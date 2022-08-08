const express = require("express");
const fs = require("fs");
const moment = require("moment");
const router = express.Router();

router.get("/", (_req, res) => {
  fs.readFile("server/db/products.json", "utf-8", (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

router.post("/", (req, res) => {
  fs.readFile("server/db/products.json", "utf-8", (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      const newCart = JSON.parse(data);
      const id = moment().format("MMMDoYYhh:mm:ss");
      newCart.push({ ...req.body, id: id });
      fs.writeFile(
        "server/db/products.json",
        JSON.stringify(newCart),
        (err) => {
          if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
          } else {
            res.send(JSON.stringify({ result: 1, id: id }));
          }
        }
      );
    }
  });
});

router.delete("/:id", (req, res) => {
  fs.readFile("server/db/products.json", "utf-8", (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      const newCart = JSON.parse(data);
      const index = newCart.findIndex((el) => el.id == req.params.id);
      newCart.splice(index, 1);
      fs.writeFile(
        "server/db/products.json",
        JSON.stringify(newCart),
        (err) => {
          if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
          } else {
            res.send(JSON.stringify({ result: 1 }));
          }
        }
      );
    }
  });
});

module.exports = router;
