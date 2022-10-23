import { helloWorld } from "../index";

describe("helloWorld()", () => {
  it("responds with a msg", () => {
    expect(helloWorld()).toEqual("Hello, world!");
  });
});
