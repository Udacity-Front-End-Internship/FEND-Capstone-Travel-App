<img src="https://github.com/user-attachments/assets/31f05cd6-8bfd-46ae-9803-5677f99d8b6f" width="100%"/>



# FEND Capstone - Travel App

A project for the Udacity Front End Web Developer Nanodegree – Capstone.  
This travel application allows users to plan their trips by entering a location and date, then displays weather information and an image of the destination using data from multiple APIs.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development Strategy](#development-strategy)
- [APIs Used](#apis-used)
- [Project Structure](#project-structure)
- [Extending the Project](#extending-the-project)
- [Resources](#resources)
- [License](#license)

---

## Project Overview

This capstone project brings together your knowledge of JavaScript, HTML, and SCSS to build a custom travel app in a modern development environment (Webpack, Express, Service Workers). The app demonstrates working with the DOM, modular code, and asynchronous operations to fetch data from **three APIs** that depend on each other:

- **Geonames API:** Get coordinates and country from a city name.
- **Weatherbit API:** Fetch weather forecast for the trip date (current for trips within a week, future forecast otherwise).
- **Pixabay API:** Display an image of the destination.

The primary goal is to provide a smooth user experience for trip planning, while maintaining clean, modular, and well-tested code.

---

## Features

- **Trip Planner Dashboard:** Enter your destination and departure date.
- **Dynamic Weather Forecast:** Displays current or future weather for your trip.
- **Location Image:** Shows a relevant photo for your destination.
- **Responsive UI:** Clean, accessible, and mobile-friendly design.
- **Service Worker:** For offline support and performance (optional/bonus).
- **Extensible:** Easily add features like trip duration, packing lists, or local storage.

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- Accounts for [Geonames](http://www.geonames.org/), [Weatherbit](https://www.weatherbit.io/), and [Pixabay](https://pixabay.com/api/docs/)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Udacity-Front-End-Internship/FEND-Capstone-Travel-App.git
   cd FEND-Capstone-Travel-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and provide your API credentials as follows:

   ```env
   GEONAMESKEY="your_geonames_username"
   BASE_URL="http://localhost:8081"
   PIXABAY_API_KEY="your_pixabay_api_key"
   WEATHERBIT_KEY="your_weatherbit_key"
   ```

   - `GEONAMESKEY`: Your Geonames username (required for geolocation API requests)
   - `BASE_URL`: The base server URL (typically `http://localhost:8081` for local development)
   - `PIXABAY_API_KEY`: Your Pixabay API key (required to fetch images)
   - `WEATHERBIT_KEY`: Your Weatherbit API key (required to fetch weather data)

4. **Run in development mode**
   ```bash
   npm run dev
   ```
   In a separate terminal, start the server:
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## Development Strategy

- The project uses a modular structure under `/src` with separate folders for client and server.
- Frontend assets (JS, SCSS, HTML) are in `/src/client`, and server logic is in `/src/server`.
- Webpack is used for asset bundling and hot-reload during development.
- ES6+ JavaScript features and clean code practices are encouraged.
- Testing and refactoring are part of the workflow to ensure code quality.

---

## APIs Used

- **Geonames API:** For geocoding city names to coordinates.
- **Weatherbit API:** For weather forecasts based on coordinates and date.
- **Pixabay API:** For fetching images of the destination.

---

## Project Structure

```
FEND-Capstone-Travel-App/
│
├── src/
│   ├── client/
│   │   ├── js/
│   │   ├── media/
│   │   ├── styles/
│   │   ├── views/
│   │   └── index.js
│   └── server/
│       └── server.js
├── dist/
├── .env
├── package.json
└── README.md
```


## Extending the Project

You are encouraged to go beyond the minimum requirements! Here are some ideas:

- Add trip end date and calculate trip duration.
- Allow multiple destinations or trips.
- Integrate hotel/flight/packing list features.
- Store trip data in local storage.
- Add icons or multi-day weather forecasts.
- Export or print trip plans.
- Integrate additional APIs (e.g., REST Countries).

---

## Resources

- [Udacity Front End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)
- [Project Rubric](https://review.udacity.com/#!/rubrics/2663/view)
- [Udacity Style Guides](https://udacity.github.io/frontend-nanodegree-styleguide/)
- [Webpack Documentation](https://webpack.js.org/)
- [Express Documentation](https://expressjs.com/)

---

## License

This project is for educational purposes as part of the Udacity Nanodegree program.

---

<p align="center">
  <img src="https://user-images.githubusercontent.com/993695114/245573557-udacity-accenture-logo.png" alt="Udacity part of Accenture" width="180"/>
</p>
