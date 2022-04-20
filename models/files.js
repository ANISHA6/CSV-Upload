/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const FILES_PATH = path.join("/uploads/files");

/***************CREATING USER SCHEMA*****************************/
const fileSchema = new mongoose.Schema({
  filePath:{
    type: String
  },
  originalName:{
    type: String
  } , 
  file:{
        type:String
    }
},{
    timestamps: true
});

/*******SETTINGS FOR UPLOADING FILE USING MULTER****************/
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", FILES_PATH));//exact path where files need to uplaod
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });


  //static functions
  fileSchema.statics.uploadedFile = multer({ storage: storage }).single("file");
  fileSchema.statics.filePath = FILES_PATH;//Making FILES_PATH publicly available


/******************MAKING MODEL*********************************/
const Files = mongoose.model("Files", fileSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Files;