const { launches } = require('../../models/launches.model');

function httpgetAllLaunches(req, res) {
  return res.status(200).json(Array.from(launches.values()));
}

module.exports = {
  httpgetAllLaunches,
};
