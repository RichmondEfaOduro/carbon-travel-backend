import express from "express";
import car from "../resources/car.js";

const router = express.Router();

router.get("/car", (req, res) => {
  //handle req
  res.json(car);
});

export default router;
