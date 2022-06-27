// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const mainController = require("../controllers/mainController");

const miMiddleware = require("../middleware/helloMiddlware");

router.get("/", mainController.index);
router.get("/search", mainController.search);
router.get("/admin", miMiddleware, mainController.admin);

module.exports = router;
