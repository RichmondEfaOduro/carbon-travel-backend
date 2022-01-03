import axios from "axios";

export const calculateFlightCarbon = async (req, res, next) => {
  const { passengers, start, end } = req.body;
  const requestURL = "https://www.carboninterface.com/api/v1/estimates";
  const data = {
    type: "flight",
    passengers: passengers,
    legs: [
      { departure_airport: start.IATA, destination_airport: end.IATA },
      { departure_airport: end.IATA, destination_airport: start.IATA },
    ],
  };
  if (process.env.NODE_ENV === "prod") {
    const response = await axios
      .post(requestURL, data, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.CARBON_INTERFACE_KEY}`,
        },
      })
      .then(({ data }) => {
        return data;
      })
      .catch((error) => console.log(error));
    req.calculatedFlightCarbon = response;
  }
  next();
};
