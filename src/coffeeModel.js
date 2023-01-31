const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "El cafe debe de tener nombre"],
    unique: true,
  },
  description: {
    type: String,
    require: [true, "Debe de tener una descripcion"],
  },
  ingredients: {
    type: [String],
    require: [true, "Debe de tener una receta"],
  },
  image: {
    type: String,
  },
  id: {
    type: Number,
  },
});
const Menu = mongoose.model("Menu", coffeeSchema);
module.exports = Menu;
