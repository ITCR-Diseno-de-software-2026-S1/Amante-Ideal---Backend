const router = require("express").Router();
const controller = require("../controllers/amante.controller");

router.post("/", controller.create);
router.get("/", controller.getByInteres);

module.exports = router;