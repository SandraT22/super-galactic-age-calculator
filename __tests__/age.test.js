import Age from './../src/js/age.js';

describe("Age", () => {
  let age1;
  let age2;
  let age3;
  let age4;
  let age5;

  beforeEach (() => {
    age1 = new Age(30, "Mercury");
    age2 = new Age(30, "Venus");
    age3 = new Age(30, "Mars");
    age4 = new Age(30, "Jupiter");
    age5 = new Age(30);
  })

  test("should check thas constructor works properly", () => {
    expect(age1.age).toEqual(30);    
  });

  test("should correctly convert earth years to mercury years", () => {
    expect(age1.planetaryAge()).toEqual(125);    
});

test("should correctly convert earth years to mercury years", () => {
  expect(age2.planetaryAge()).toEqual(48);    
});

test("should correctly convert earth years to mars years", () => {
  expect(age3.planetaryAge()).toEqual(15);    
});

test("should correctly convert earth years to jupiter years", () => {
  expect(age4.planetaryAge()).toEqual(2);    
});

test("should correctly check if prototype returns message if planet is missing", () => {
  expect(age5.planetaryAge()).toEqual("Please choose a planet");    
});
});