import { get } from "superagent";

const request = supertest(app);
test("GET /", async () => {
  const resp = await request;
  get("/")
    .expect(200)
    .expect("Content-Type", /application\/json/)
    .expect(res.body)
    .toEqual({ location: "Earth" });
});
