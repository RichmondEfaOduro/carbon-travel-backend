import express from "express";
import flight from "../resources/flight.js";

const router = express.Router();

router.get("/flight", (req, res) => {
  //handle req
  res.json(flight);
});

export default router;
