let tripsData = [];
let id = 0;

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";

const app = express();

import dotenv from "dotenv";
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static("dist"));

// Set the port from environment variable or default to 3000
const PORT = process.env.PORT_NUMBER || 3000;
const server = app.listen(PORT, () => {
  console.log(`running on localhost: ${PORT}`);
});

// Serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Delete a trip by ID
app.delete("/delete/:id", (req, res) => {
  console.dir(tripsData, { depth: null });

  const tripId = parseInt(req.params.id, 10);
  const index = tripsData.findIndex((trip) => trip.id === tripId);

  if (index !== -1) {
    tripsData = tripsData.filter((trip) => trip.id !== tripId);

    res.send({ message: "Trip deleted" });
    console.log("DELETE req to delete trip id :", tripId);
  } else {
    res.status(404).send({ message: "Error !, Trip not found" });
  }

  console.log("tripsData:", tripsData);
});

// Get all trips
app.get("/all", (req, res) => {
  res.send(tripsData);
});

// Add a new trip
app.post("/add", (req, res) => {
  id++;

  console.log("POST request ----->  trip data:", req.body);

  const tripDataInformation = {
    id,
    city: req.body.city,
    country: req.body.country,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    date: req.body.date,
    endDate: req.body.endDate,
    list: req.body.list,
  };

  tripsData.push(tripDataInformation);

  res.send(tripDataInformation);
  console.log(
    "POST request ----->  trip saved succufely :",
    tripDataInformation
  );

  console.log("tripsData:", tripsData);
});

// Update a trip by ID
app.put("/update/:id", (req, res) => {
  console.log("updateReq");

  console.dir(tripsData, { depth: null });

  const tripId = req.params.id.toString();
  console.log("Requested Trip ID:", tripId);

  console.log("tripsData:", tripsData);

  const index = tripsData.findIndex((trip) => trip.city.toString() === tripId);
  console.log("Index found:", index);

  if (index !== -1) {
    tripsData[index] = {
      ...tripsData[index],
      ...req.body,
    };

    res.send(tripsData[index]);
    console.log("PUT request ---> trip data updated:", tripsData[index]);
  } else {
    res.status(404).send({ message: "Error!, Trip not found" });
  }
});

// Fetch an image from Pixabay API based on city and country
app.get("/api/image", async (req, res) => {
  const { city, country } = req.query;
  const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
  console.log("PIXABAY_API_KEY:", PIXABAY_API_KEY);

  const PIXABAY_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=Tourist+places+in+${city}+${country}&image_type=photo`;

  try {
    const response = await fetch(PIXABAY_URL);
    console.log("response:");
    console.dir(response, { depth: null });

    if (!response.ok) {
      throw new Error(
        "Failed to fetch data from Pixabay API: " + response.statusText
      );
    }
    console.log("response:", response);

    const data = await response.json();

    console.log("data:", data);

    if (data.hits.length > 0) {
      res.json({ imageUrl: data.hits[0].largeImageURL });
    } else {
      res
        .status(404)
        .json({ message: "No image found for the provided city." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error." });
  }
});

export { app, server };
