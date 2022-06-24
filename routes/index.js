/****************IMPORTING PACKAGE*******************************/
const express = require("express");//it will just fetch the existing instance, will not create new instance

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const homeController = require("../controller/home_controller");
const uploadController = require("../controller/upload_controller");

/**********************MAKING ROUTES*****************************/

router.get("/", homeController.Index);
router.use("/upload", require("./upload"));
router.use("/delete", require("./delete"));

/*****************EXPORTING ROUTER*******************************/
module.exports = router;