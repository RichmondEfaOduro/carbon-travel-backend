import axios from "axios";

const url = 'https://maps.googleapis.com/maps/api/directions/json?origin=Stockholm&destination=Berlin&key=';

export const getDistanceByCarPath = async (req, res, next) => {
  const { start, end } = req.body;
  const key = process.env.GOOGLE_MAPS_API_KEY
  const requestURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${key}`
  const response = await axios
    .get(requestURL)
    .then(({ data }) =>  {
      return data.routes
    })
    .catch(error => console.log(error));
  req.returnedCarPathDistance = response;
  next();
};