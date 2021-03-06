const router = require("express").Router();
const User = require("../models/user");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/").post((req, res) => {
  const { username } = req.body;

  const newUser = new User({
    username,
  });

  newUser
    .save()
    .then(() => res.json("user added!"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
