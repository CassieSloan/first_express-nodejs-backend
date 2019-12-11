const express = require("express");
const router = express.Router(); //using standard express router (package included in express)
const PlantController = require("../controllers/plant_controller");

router.get("/", PlantController.index);
router.get("/new", PlantController.make);
router.post("/", PlantController.create);

module.exports = router;