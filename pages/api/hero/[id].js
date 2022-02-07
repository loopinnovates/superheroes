const heroes = require("../../../models/heroes");
const { default: dbConnect } = require("../../../services/db/dbConnect");

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const hero = await heroes.findById(id);
        if (!hero) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, hero });
      } catch (error) {
        res.status(400).json({ success: false, msg: e });
      }
      break;

    case "PUT":
      try {
        const hero = await heroes.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!hero) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, hero });
      } catch (error) {
        res.status(400).json({ success: false, msg: e });
      }
      break;

    case "DELETE":
      try {
        const hero = await heroes.deleteOne({ _id: id });
        if (!hero) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, hero });
      } catch (error) {
        res.status(400).json({ success: false, msg: e });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
