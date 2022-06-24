import Age from './../src/js/age.js';

describe("Age", () => {
  let age1;

  beforeEach (() => {
    age1 = new Age(30);
    
  })

  test("should check thas constructor works properly", () => {
    expect(age1).toEqual(30);    
  });
});