const router = require("express").Router();
const { AirplaneController } = require("../../controllers");

// /api/v1/airplanes
router.post("/", AirplaneController.createAirplane);
module.exports = router;
