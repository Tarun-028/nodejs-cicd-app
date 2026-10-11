const request = require("supertest");
const app = require("../app");

describe("Node.js CI/CD App", () => {
    test("Home page should return 200", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
    });

    test("Health endpoint should return healthy", async () => {
        const res = await request(app).get("/health");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("healthy");
    });

    test("Version endpoint should return a version", async () => {
        const res = await request(app).get("/version");
        expect(res.statusCode).toBe(200);
        expect(res.body.version).toBeDefined();
    });
});
