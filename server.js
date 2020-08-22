const express = require("express");
const app = express();
const path = require("path");

app.use("/api/v1/quotes", require("./api/v1/quotes"));

app.use(express.static("client/build"));
app.get("*", (req, res) => {
   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 3011;
app.listen(port, () =>
   console.log(`Server running at http://localhost:${port}`)
);
