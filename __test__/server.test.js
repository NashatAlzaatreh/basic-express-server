"use strict";

const { app } = require("../src/server");
const supertest = require("supertest");
const mockRequest = supertest(app);

describe("API Server Testing", () => {
  test("if there is a home route", async () => {
    const response = await mockRequest.get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("Welcome to express home! 🏡 ");
  });

  test("404 on a bad route", async () => {
    const response = await mockRequest.get("/bad");
    expect(response.status).toEqual(404);
  });

  test("404 on a bad method", async () => {
    const response = await mockRequest.post("/person");
    expect(response.status).toBe(404);
  });
});
