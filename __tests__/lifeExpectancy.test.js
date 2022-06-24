import LifeChoices from './../src/js/lifeExpectancy.js';

describe("LifeChoices", () => {
  let expectancy1;
  let expectancy2;
  let expectancy3;
  let expectancy4;
  let expectancy5;
  let expectancy6;

  beforeEach(() => {
    expectancy1 = new LifeChoices("Small Town", "Active");
    expectancy2 = new LifeChoices("Rural", "Active");
    expectancy3 = new LifeChoices("City", "Active");
    expectancy4 = new LifeChoices("Small Town", "Sometimes Active");
    expectancy5 = new LifeChoices("Small Town", "Not Active");
    expectancy6 = new LifeChoices("Rural", "Sometimes Active");
  })

  test("should check that constructor works properly", () => {
    expect(expectancy1.lifestyle).toEqual("Small Town");  
  });

  test("should check that lifestyle choices alter the life expectancy", () => {
    expect(expectancy1.lifeExpectancy()).toEqual(100);   
  });

  test("should check that lifestyle choices alter the life expectancy", () => {
    expect(expectancy2.lifeExpectancy()).toEqual(95);   
  });

  test("should check that lifestyle choices alter the life expectancy", () => {
    expect(expectancy3.lifeExpectancy()).toEqual(90);   
  });

  test("should check that activity level choices alter the life expectancy", () => {
    expect(expectancy1.lifeExpectancy()).toEqual(100);   
  });

  test("should check that activity level choices alter the life expectancy", () => {
    expect(expectancy4.lifeExpectancy()).toEqual(95);   
  });

  test("should check that activity level choices alter the life expectancy", () => {
    expect(expectancy5.lifeExpectancy()).toEqual(90);   
  });

  test("should check that activity level choices alter the life expectancy", () => {
    expect(expectancy6.lifeExpectancy()).toEqual(90);   
  });
})