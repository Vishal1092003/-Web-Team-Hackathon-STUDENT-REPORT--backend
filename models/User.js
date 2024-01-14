
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Student_name: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
      
  },
  regisNo: {
    type: String,
    required: true,
    unqiue:true,
  },
  department: {
    type: String,
    required: true,
   
  },
  dsa: {
    type: Number,
    required: true,
  },
   daa: {
    type: Number,
    required: true,
  },
   dsd: {
    type: Number,
    required: true,
  },
 
});

module.exports = mongoose.model("User", userSchema);