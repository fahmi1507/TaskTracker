const router = require("express").Router();
const exerciseRouter = require("./exercise");
const userRouter = require("./user");

router.use("/exercises", exerciseRouter);
router.use("/users", userRouter);

module.exports = router;
