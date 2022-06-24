import Age from './../src/js/age.js';

describe("Age", () => {
  let age1;
  let age2;
  let age3;

  beforeEach (() => {
    age1 = new Age(30, "Mercury");
    age2 = new Age(30, "Venus");
    age3 = new Age(30, "Mars");
  })

  test("should check thas constructor works properly", () => {
    expect(age1.age).toEqual(30);    
  });

  test("should correctly convert earth years to mercury years", () => {
    expect(age1.mercuryAge()).toEqual(125);    
});

test("should correctly convert earth years to mercury years", () => {
  expect(age2.venusAge()).toEqual(48);    
});

test("should correctly convert earth years to mars years", () => {
  expect(age3.marsAge()).toEqual(15);    
});
});