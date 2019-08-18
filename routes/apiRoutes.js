const axios = require("../client/node_modules/axios");
const router = require("express").Router();
const db = require("../models");
router.get("/books", (req, res) => {

  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q + "&printType=books&key=AIzaSyB7Z7_nQSsSyLm3KmH6zlepYrsm9IipBmk")
    .then((data) => {
      res.json(data.data.items);
    })
    .catch(err => res.status(422).json(err));

});

router.post("/save", (req, res) => {

    db.Book.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

});

router.get("/getsaved", (req, res) => {

    db.Book.find({})
    .then(books => res.json(books))
    .catch(err => res.status(422).json(err));

});

router.delete("/delete/:id", (req, res) => {

  db.Book.findById({ _id: req.params.id})
  .then(dbModel => dbModel.remove())
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})

module.exports = router;