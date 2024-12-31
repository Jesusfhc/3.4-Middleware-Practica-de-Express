import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(`The request method used was: ${req.method} and came from: ${req.url}`);
   return next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
