var express = require('express');
var router = express.Router();
var zone_controller = require("../../controllers/zone");

router.get("/", zone_controller.index);
router.post("/",zone_controller.create);
router.get("/:id", zone_controller.show);
router.delete("/:id", zone_controller.delete);
router.put("/:id", zone_controller.update);

module.exports = router;