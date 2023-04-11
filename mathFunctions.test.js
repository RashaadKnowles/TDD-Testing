import {addTwoNumbers,subtractTwoNumbers,multiplyTwoNumbers,divideTwoNumbers} from "./mathFunctions";

describe("Math Functions", () => {
  
  //Add Tests
    describe("add", () => {
    it("should add two numbers 1 + 1", () => {
      expect(addTwoNumbers(1, 1)).toBe(2);
    });
    it("should say invalid argument", () => {
        expect(()=> addTwoNumbers(4,"hello")).toThrow("Invalid")
    })
  });

  //Subtract Tests
  describe("subtract", () => {
    it("should subtract two numbers 3-1", () =>{
        expect(subtractTwoNumbers(3,2)).toBe(1)
    })
  })


});
