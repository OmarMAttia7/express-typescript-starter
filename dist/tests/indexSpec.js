"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("helloWorld()", () => {
    it("responds with a msg", () => {
        expect((0, index_1.helloWorld)()).toEqual("Hello, world!");
    });
});
