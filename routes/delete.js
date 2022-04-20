/****************IMPORTING PACKAGE*******************************/
const express = require("express");


/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const deleteController = require("../controller/delete_controller");

/**********************MAKING ROUTES*****************************/
router.get("/:file", deleteController.delete);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;