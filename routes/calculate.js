import express from "express";
import car from "../resources/car.js";
import flight from "../resources/flight.js";
import { getDistanceByCarPath } from "../middleware/distanceByCar.js";
import { getIATACodes } from "../middleware/getIATACodes.js";

const router = express.Router();

router.post("/calculate", getDistanceByCarPath, getIATACodes, (req, res) => {
  //handle req
  const { start, end, passengers } = req.body;
  const { airportsToReturn } = req;
  res.json({
    car,
    flight,
    airportsToReturn,
  });
});

export default router;
