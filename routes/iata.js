import express from "express";
import airports from "../resources/IATA.js";

const router = express.Router();

router.post("/iata", (req, res) => {
  const { startTwo } = req.body;
  let airportsToReturn = airports.filter((airport) => {
    if (airport.city.indexOf(startTwo) > -1) {
      return airport;
    }
  });
  res.json(airportsToReturn);
});

export default router;
