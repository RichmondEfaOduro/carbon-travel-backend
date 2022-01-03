import express from "express";
import { getDistanceByCarPath } from "../middleware/distanceByCar.js";

const router = express.Router();

router.post("/car", getDistanceByCarPath, (req, res) => {
  const { returnedCarPathDistance } = req;
  res.json(returnedCarPathDistance);
});

export default router;
