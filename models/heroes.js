const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HeroesSchema = new Schema(
  {
    superHero: {
      type: String,
      required: [true, "Please Enter Superhero Name."],
      unique: [true, "Superhero Name should be unique."],
      trim: true,
    },
    realName: {
      type: String,
      required: [true, "Please Enter Real Name of the superhero."],
      trim: true,
    },
  },
  { collection: "heroes" }
);

module.exports =
  mongoose.models.heroes || mongoose.model("heroes", HeroesSchema);
