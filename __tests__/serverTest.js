import express from "express";
import request from "supertest";
import { server } from "./../src/server/server.js";

// Describe the test suite for the GET /all endpoint
describe("GET /all endpoint test", () => {
  // Define a test case for returning an empty list of trips
  it("returns an empty list of trips", async () => {
    // Send a GET request to the /all endpoint
    const response = await request(server).get("/all");
    // Check that the response status is 200 (OK)
    expect(response.status).toBe(200);
    // Check that the response body is an empty array
    expect(response.body).toStrictEqual([]);
  });
});
