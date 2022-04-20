/****************IMPORTING PACKAGE*******************************/
const express = require("express");


/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const uploadController = require("../controller/upload_controller");
/**********************MAKING ROUTES*****************************/
router.post("/", uploadController.Upload);
router.use("/file", require("./file"));

/*****************EXPORTING ROUTER*******************************/
module.exports = router;