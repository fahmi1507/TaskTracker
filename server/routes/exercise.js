const router = require("express").Router();
const Exercise = require("../models/exercise");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/").post((req, res) => {
  const { username, description, duration, date } = req.body;

  const newEx = new Exercise({
    username,
    description,
    duration: Number(duration),
    date: Date.parse(date),
  });

  newEx
    .save()
    .then(() => res.json("exercise added"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
