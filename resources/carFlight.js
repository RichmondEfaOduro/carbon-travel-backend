const carAndFlight = {
  calculatedCarCarbon: {
    data: {
      id: "71ae4a5a-0473-4209-927f-f96d4821f2be",
      type: "estimate",
      attributes: {
        distance_value: 1040,
        vehicle_make: "Volvo",
        vehicle_model: "XC40 AWD",
        vehicle_year: 2020,
        vehicle_model_id: "d9d37b54-1203-4964-8ae4-54c29f9e9351",
        distance_unit: "km",
        estimated_at: "2022-01-03T14:10:41.295Z",
        carbon_g: 227471,
        carbon_lb: 501.49,
        carbon_kg: 227.47,
        carbon_mt: 0.23,
      },
    },
  },
  calculatedFlightCarbon: {
    data: {
      id: "29fb339d-57c1-4a89-b207-cf125a1b7c92",
      type: "estimate",
      attributes: {
        passengers: 2,
        legs: [
          {
            departure_airport: "SXF",
            destination_airport: "ARN",
          },
          {
            departure_airport: "ARN",
            destination_airport: "SXF",
          },
        ],
        distance_value: 1905.67,
        distance_unit: "km",
        estimated_at: "2022-01-03T14:10:42.295Z",
        carbon_g: 284445,
        carbon_lb: 627.09,
        carbon_kg: 284.45,
        carbon_mt: 0.28,
      },
    },
  },
};

export default carAndFlight;
