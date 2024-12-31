import bodyParser from "body-parser";
import { log } from "console";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
  let body = req.body;
  console.log(body);
  res.send('<h1>Your Band NAme Is:</h1> <hr> <h2>' + body.street + ' ' + body.pet + '</h2>');
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
