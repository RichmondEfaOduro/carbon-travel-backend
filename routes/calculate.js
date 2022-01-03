import express from "express";
import { getDistanceByCarPath } from "../middleware/distanceByCar.js";
import { calculateCarCarbon } from "../middleware/calculateCarCarbon.js";
import { calculateFlightCarbon } from "../middleware/calculateFlightCarbon.js";
import carAndFlight from "../resources/carFlight.js";

const router = express.Router();

router.post(
  "/calculate",
  getDistanceByCarPath,
  calculateCarCarbon,
  calculateFlightCarbon,
  (req, res) => {
    //handle req
    if (process.env.NODE_ENV === "prod") {
      const { calculatedCarCarbon, calculatedFlightCarbon } = req;
      res.json({
        calculatedCarCarbon,
        calculatedFlightCarbon,
      });
    } else {
      res.json(carAndFlight);
    }
  }
);

export default router;
