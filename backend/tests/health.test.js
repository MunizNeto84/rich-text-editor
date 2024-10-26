const request = require("supertest");
const app = require("../src/app");

describe("GET /api/health", () => {
  it("Deve retornar codigo 200 e a frase: API funcionando!", async () => {
    const response = await request(app).get("/api/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "API funcionando!" });
  });
});
