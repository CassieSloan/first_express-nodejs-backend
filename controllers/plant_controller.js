const PlantModel = require("../database/model/plant_model");

const index = async (req, res) => {
    let plants = await PlantModel.find();
    res.render("plants/index"); // automagically looks into views directory
}

let make = (req, res)=> {
    res.render("plants/new");
}

let create = async (req, res) => {
    console.log("IS this working?!")
    let {species, size} = req.body
    let plant = await PlantModel.create({ species, size })
    .catch(err => res.status(500).send(err))
    res.redirect("/plants");
}

module.exports = {
    index,
    make,
    create
}