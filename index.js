import express from "express";
import cors from "cors";
import carsRoutes from "./routes/cars.js";
import flightsRoutes from "./routes/flights.js";
import calculate from "./routes/calculate.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/v1/", calculate);
app.use("/api/v1/", carsRoutes);
app.use("/api/v1/", flightsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
