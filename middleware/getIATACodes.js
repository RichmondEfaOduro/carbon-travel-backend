import airports from "../resources/IATA.js";

export const getIATACodes = (req, res, next) => {
  const { startIATA, endIATA } = req.body;
  let startAirport = airports.filter((airport) => airport.IATA === startIATA);
  let endAirport = airports.filter((airport) => airport.IATA === endIATA);
  req.startIATA = startAirport;
  req.endIATA = endAirport;
  next();
};
