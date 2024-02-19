import "mocha";
import { expect } from "chai";
import { getAllergens } from "../src/ejercicio_1_pe";

describe("getAllergens", () => {
    it("should return the list of actions for a given number", () => {
      expect(getAllergens(1)).to.be.equal([
        "Huevo",
      ]);
      expect(getAllergens(3)).to.be.equal([
        "Huevo",
        "Cacahuete"
      ]);
      expect(getAllergens(144)).to.be.equal([
        "Tomate",
        "Gato",
      ]);
      expect(getAllergens(256)).to.be.undefined;
      expect(getAllergens(257)).to.be.equal(["Huevo"]);
    });
  
    it("should return undefined for negative numbers", () => {
      expect(getAllergens(-14)).to.be.undefined;
    });
  
    it("should return undefined for non-integer numbers", () => {
      expect(getAllergens(3.14)).to.be.undefined;
    });
  
    it("should return undefined for zero", () => {
      expect(getAllergens(0)).to.be.undefined;
    });
  });
  