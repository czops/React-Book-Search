const axios = require("axios");
const router = require("express").Router();
// const key = require("../../config/config.json");

router.get("/books", (req, res) => {
    axios
        .get("https://www.googleapis.com/books/v1/volumes?q="+ req.params.title + "&key=" + "AIzaSyDY6hJYflIh2uvhhGH4HNamaGLhguBmLkI")
        
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});

module.exports = router;