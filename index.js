const express = require("express")
const path = require('path');
const app = express()
const mongoose = require("mongoose")
require('dotenv').config({ path: './config.env'});
const cors = require('cors');
const  db = require("./config/keys").mongoURI;
const route = require("./pages");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

console.log(typeof db)
// Connect to mongo
mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err))

app.use(cors({
  credentials: true,
   origin: ["http://localhost:3000", "http://localhost:5000"]

}));

app.use(express.static(`${__dirname}/views/build`));

app.use("/", route);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/build/index.html"))
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./views/build/index.html"))
});

app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server on ${port} \n Environment ${process.env.NODE_ENV}`))
