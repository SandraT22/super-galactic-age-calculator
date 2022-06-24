import Age from './../src/js/age.js';

describe("Age", () => {
  let age1;

  beforeEach (() => {
    age1 = new Age(30, "Mercury");
  })

  test("should check thas constructor works properly", () => {
    expect(age1.age).toEqual(30);    
  });

  test("should correctly convert earth years to mercury years", () => {
    expect(age1.mercuryAge).toEqual(125);    
});
});