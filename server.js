const express = require("express");
const app = express();

app.use("/api/v1/quotes", require("./api/v1/quotes"));
app.get("/", (req, res) => res.send("hello"));

const port = process.env.PORT || 3011;
app.listen(port, () =>
   console.log(`Server running at http://localhost:${port}`)
);
