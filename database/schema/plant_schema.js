const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PlantSchema = new Schema({
    species: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
});

module.exports = PlantSchema