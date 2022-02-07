const heroes = require("../../../models/heroes");
const { default: dbConnect } = require("../../../services/db/dbConnect");

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const heros = await heroes.find({});
        res.status(200).json({ success: true, hero: heros });
      } catch (e) {
        res.status(400).json({ success: false, msg: e });
      }
      break;

    case "POST":
      try {
        const hero = await heroes.create(req.body);
        res.status(200).json({ success: true, hero });
      } catch (e) {
        res.status(400).json({ success: false, msg: e });
      }
      break;

    default:
      res.status(400).json({ success: false });
  }
};
