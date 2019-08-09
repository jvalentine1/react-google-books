const axios = require("../client/node_modules/axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {

  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q + "+inauthor:keyes&key=AIzaSyB7Z7_nQSsSyLm3KmH6zlepYrsm9IipBmk")
    // .then(({ data: { results } }) => res.json(results))
    .then((data) => {
      console.log(data.data);
      res.json(data.data.items);
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;