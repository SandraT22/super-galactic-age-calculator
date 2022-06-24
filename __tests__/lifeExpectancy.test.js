import LifeChoices from './../src/js/lifeExpectancy.js';

describe("LifeChoices", () => {
  let expectancy1;
  let expectancy2;
  let expectancy3;
  let expectancy4;
  let expectancy5;
  let expectancy6;
  let expectancy7;
  let expectancy8;


  beforeEach(() => {
    expectancy1 = new LifeChoices("Small Town", "Active", "Healthy");
    expectancy2 = new LifeChoices("Rural", "Active", "Healthy");
    expectancy3 = new LifeChoices("City", "Active", "Healthy");
    expectancy4 = new LifeChoices("Small Town", "Sometimes Active", "Sometimes Healthy");
    expectancy5 = new LifeChoices("Small Town", "Not Active", "Not Healthy");
    expectancy6 = new LifeChoices("Rural", "Sometimes Active", "Sometimes Healthy");
    expectancy7 = new LifeChoices("Rural", "Not Active", "Not Healthy");
    expectancy8 = new LifeChoices("City", "Sometimes Active", "Sometimes Healthy");
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
    expect(expectancy4.lifeExpectancy()).toEqual(90);   
  });

  test("should check that activity level choices alter the life expectancy", () => {
    expect(expectancy5.lifeExpectancy()).toEqual(80);   
  });

  test("should check that activity level choices alter the life expectancy", () => {
    expect(expectancy6.lifeExpectancy()).toEqual(85);   
  });

  test("should check that activity level choices alter the life expectancy", () => {
    expect(expectancy7.lifeExpectancy()).toEqual(75);   
  });

  test("should check that activity level choices alter the life expectancy", () => {
    expect(expectancy8.lifeExpectancy()).toEqual(80);   
  });
})