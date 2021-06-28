const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors');
const app = express()
const db = require("./config/keys").mongoURI
const users = require("./pages/users")
const disc = require("./pages/discoveryy")

app.use(express.json())

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

app.use("/api/users", users)
app.use("/api/discoveryy", disc)
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server on ${port}`))
