const baseUrl = "http://localhost:6200"

// test qpi connection
describe("GET /movies", () => {
    it("should return 200", async () => {
        const response = await request(baseURL).get("/movies");
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBe(null);
    })
})