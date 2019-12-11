const express = require("express");
const router = express.Router(); //using standard express router (package included in express)
const plantsRoutes = require("./plants_routes");

router.use("/plants", plantsRoutes);

module.exports = router;

