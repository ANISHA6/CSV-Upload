/****************IMPORTING PACKAGE*******************************/
const express = require("express");


/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const fileController = require("../controller/file_controller");

/**********************MAKING ROUTES*****************************/
router.get("/:file", fileController.View);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;