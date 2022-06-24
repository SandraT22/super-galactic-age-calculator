import LifeExpectancy from './../src/js/lifeExpectancy.js';

describe("LifeExpectancy", () => {
  let expectancy1;
  let expectancy2;
  let expectancy3;

  beforeEach(() => {
    expectancy1 = new LifeExpectancy("Small Town");
    expectancy2 = new LifeExpectancy("Rural");
    expectancy3 = new LifeExpectancy("City");
  })

  test("should check that constructor works properly", () => {
    expect(expectancy1.lifestyle).toEqual("Small Town");  
  });

  test("should check that lifestyle choices alter the life expectancy", () => {
    expect(expectancy1.expectancyLifestyle()).toEqual(100);   
  });

  test("should check that lifestyle choices alter the life expectancy", () => {
    expect(expectancy2.expectancyLifestyle()).toEqual(95);   
  });

  test("should check that lifestyle choices alter the life expectancy", () => {
    expect(expectancy3.expectancyLifestyle()).toEqual(90);   
  });
})