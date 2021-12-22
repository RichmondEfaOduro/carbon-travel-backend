import express from "express";
import car from "../resources/car.js";
import flight from "../resources/flight.js";

const router = express.Router();

router.post("/calculate", (req, res) => {
  //handle req
  res.json({ "car": car, "flight": flight});
});

export default router;