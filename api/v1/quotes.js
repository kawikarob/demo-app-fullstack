const express = require("express");
const router = express.Router();
const db = require("../../db");
const selectQuote = require("../../queries/selectQuote");
const deleteQuoteById = require("../../queries/deleteQuoteById");
const addQuote = require("../../queries/addQuote");
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

// router.delete("/:id", (req, res) => {
//    db.query(deleteQuoteById())
//       .then((dbRes) => {
//          const quote = toSafeParse(toJson(dbRes));
//          console.log(quote);
//          res.json(quote);
//       })
//       .catch((err) => {
//          console.log(err);
//          res.status(400).json(err);
//       });
// });

router.delete("/:id", (req, res) => {
   const id = req.params.id;
   db.query(deleteQuoteById, id)
      .then(() => {
         return res.status(200).json({ success: "quote deleted" });
      })
      .catch((err) => {
         console.log(err);
         const dbError = `${err.code} ${err.sqlMessage}`;
         return res.status(500).json({ dbError });
      });
});

router.post("/", (req, res) => {
   // const id = req.body.id;
   // const quote = req.body.quote;
   console.log(req.body);

   db.query(addQuote())
      .then((dbRes) => {
         //success
         console.log("Created quote", dbRes);
         //return with a status response
         return res.status(200).json({ success: "quote created" });
      })
      .catch((err) => {
         //error
         console.log(err);
         // return with an error response
         const dbError = `${err.code} ${err.sqlMessage}`;
         return res.status(400).json({ dbError });
      });
});

module.exports = router;
