const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const DocSchema = new Schema({
    file: {
        type: Buffer
    }
  
  
   
});

module.exports = File = mongoose.model("files", DocSchema);