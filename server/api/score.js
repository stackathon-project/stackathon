const router = require("express").Router();
const { Scoreboard } = require("../db");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const scores = await Scoreboard.findAll();
    res.send(scores);
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const score = await Scoreboard.create(req.body);
    res.send(score);
  } catch (err) {
    next(err);
  }
});
