const Sequelize = require("sequelize");
const db = require("../database");

const Scoreboard = db.define("scoreboard", {
  user: {
    type: Sequelize.STRING,
  },
  game: {
    type: Sequelize.STRING,
  },
  score: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Scoreboard;
