import supertest from "supertest";
import app from "../src/app.js";

// jest.setTimeout(50000);

describe("api test", () => {
  it("should add a new employee", async (done) => {
    const res = await supertest(app).post("/api/v1/employee/add").send({
      firstName: "Test fname",
      lastName: "Test lname",
      email: "test@example.com",
    }).end(res => {
      expect(res.status).toBe(201);
      done();
      srv.close();
  });
  });

  // it("should show all employees", async (done) => {
  //   const res1 = await request.get("/api/v1/employee/get-all");

  //   expect(res1.status).toBe(200);
  //   expect(res1.body.message).toBe("Successfully fetched employees");
  //   done();
  // });
});
