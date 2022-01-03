import axios from "axios";

export const calculateCarCarbon = async (req, res, next) => {
  const { returnedCarPathDistance } = req;
  if (process.env.NODE_ENV === "prod") {
    const requestURL = "https://www.carboninterface.com/api/v1/estimates";
    const data = {
      type: "vehicle",
      distance_unit: "km",
      distance_value: returnedCarPathDistance,
      vehicle_model_id: process.env.VEHICALE_MODEL_ID,
    };
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
    req.calculatedCarCarbon = response;
  }
  next();
};
