const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv').config({ path: './config.env'});
const cors = require('cors');
const  db = process.env.MONGO_URI || require("./config/keys").mongoURI;
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
   origin: "http://localhost:3000"

}));

app.use("/", route);
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server on ${port}`))
