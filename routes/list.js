var express = require('express');
var router = express.Router();
const listController = require("../controllers/list")

/* GET users listing. */
router.get('/', listController.listAll);
router.get("/filter", listController.showSome)
router.post('/search', listController.showResult);
router.get("/detail/:id", listController.showOne)
// router.get("/:country", listController.showSome)

module.exports = router;
