const request = require("supertest");
const app = require("./app");

describe("todos", () => {
  it("GET /todos --> array todos", () => {
    return request(app)
    .get("/todos")
    .expect("Content-Type", /json/)
    .expect(200)
    .then( res => {
        expect(res.body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                name: expect.any(String),
                completed: expect.any(Boolean),
            })
        ]))
    })
  });

  it("GET /todos/id --> specific todo by ID", () => {
    return request(app)
    .get("/todos/1")
    .expect("Content-Type", /json/)
    .expect(200)
    .then( res => {
            expect.objectContaining({
                name: expect.any(String),
                completed: expect.any(Boolean),
            })
    })
  });

  it("GET /todos/id --> 404 if not found", () => {
      return request(app)
      .get('/todos/99999')
      .expect(404)
  });

  it("POST /todos/ --> created todo", () => {
      return request(app)
      .post('/todos')
      .send({
          name: 'take test'
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then( res => {
        expect(res.body).toEqual(expect.objectContaining({
                name: 'take test',
                completed: false,
            })
        )
    })

  });

  it("POST /todos --> validates request body", () => {
      return request(app)
      .post('/todos')
      .send({
          name: 123
      })
      .expect(422)
  });
});
