const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const testRouter = require("./Router/testRouter")

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use("/", testRouter)

const PORT = "8000";
app.listen(PORT, () => {
  console.log(`Port running on ${PORT} `);
});
