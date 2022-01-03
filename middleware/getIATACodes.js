import airports from "../resources/IATA.js";

export const getIATACodes = (req, res, next) => {
  let airportsToReturn = airports.filter(
    (airport) => airport.city === req.body.start
  );
  req.airportsToReturn = airportsToReturn;
  next();
};
