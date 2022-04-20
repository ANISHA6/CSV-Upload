/****************IMPORTING PACKAGE/MODELS*************************/
const File = require("../models/files");

const fs = require("fs");
const path = require("path");
/**********EXPORTING FUNCTION FOR Register ROUTE******************/
module.exports.Index = async function(req, res){
    try{
        let files = await File.find({});
        res.render("home", {
            file: files
        });
    }catch(err){
        console.log(err);
    }
}


