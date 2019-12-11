const mongoose = require("mongoose");
const PlantSchema = require("../schema/plant_schema");

const PlantModel = mongoose.model("plant", PlantSchema);

module.exports = PlantModel