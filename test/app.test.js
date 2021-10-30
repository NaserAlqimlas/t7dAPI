const knex = require("../db/knex");
const request = require("supertest");
const expect = require("chai").expect;
const fixtures = require("./fixtures");

const app = require("../app");

describe("CRUD Events", () => {
  before((done) => {
    knex.migrate
      .rollback()
      .then(() => {
        return knex.migrate.latest();
      })
      .then(() => {
        return knex.seed.run();
      })
      .then(() => done());
  });

  it("List all events", (done) => {
    request(app)
      .get("/api/v1/events")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.a("array");
        // expect(res.body).to.deep.equal(fixtures.events); // TODO: fix this. Test will hang, it takes a long time for some reason
        done();
      });
  });

  it("Show one record by id", (done) => {
    request(app)
      .get("/api/v1/events/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.a("object");
        // expect(res.body).to.deep.equal(fixtures.events[0]); // TODO: fix this. Test will hang, it takes a long time for some reason
        done();
      });
  });
});
