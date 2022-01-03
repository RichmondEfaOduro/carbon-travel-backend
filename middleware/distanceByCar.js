import axios from "axios";

export const getDistanceByCarPath = async (req, res, next) => {
  if (process.env.NODE_ENV === "prod") {
    const { start, end } = req.body;
    const key = process.env.GOOGLE_MAPS_API_KEY;
    const requestURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${start.city}&destination=${end.city}&key=${key}`;
    const response = await axios
      .get(requestURL)
      .then(({ data }) => {
        return parseInt(
          data.routes[0].legs[0].distance.text.split(" ")[0].replace(",", "")
        );
      })
      .catch((error) => console.log(error));
    req.returnedCarPathDistance = response;
  } else {
    req.returnedCarPathDistance = 1040;
  }
  next();
};
