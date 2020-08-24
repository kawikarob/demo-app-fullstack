const express = require("express");
const router = express.Router();
const db = require("../../db");
const selectQuote = require("../../queries/selectQuote");
const deleteQuoteById = require("../../queries/deleteQuoteById");
const { toJson, toSafeParse } = require("../../utils/helpers");

router.get("/", (req, res) => {
   db.query(selectQuote())
      .then((dbRes) => {
         const quote = toSafeParse(toJson(dbRes));
         console.log(quote);
         res.json(quote);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

router.delete("/:id", (req, res) => {
   db.query(deleteQuoteById())
      .then((dbRes) => {
         const quote = toSafeParse(toJson(dbRes));
         console.log(quote);
         res.json(quote);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

module.exports = router;
