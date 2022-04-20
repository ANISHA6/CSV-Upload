
const csv = require('csv-parser');
const fs = require("fs");
const path = require("path");
const File = require("../models/files");

/**********EXPORTING FUNCTION FOR View ROUTE******************/
module.exports.View = async function(req, res){
    console.log("view");
    console.log(req.params.file);
    let filePATH = await File.findOne({file: req.params.file});
    console.log(filePATH);
    console.log(filePATH.filePath);
    const results = [];
    const header =[];
    fs.createReadStream(filePATH.filePath)
    .pipe(csv())
    .on('headers', (headers) => {
        headers.map((head) => {
            header.push(head);
        });
        console.log(header);
    })
    .on('data', (data) =>
    results.push(data))
    .on('end', () => {
        console.log(header);
        console.log(results.length);
        console.log(results);
        res.render("file", {
            title: filePATH.originalName,
            head: header,
            data: results,
            length: results.length
        });
    });
}