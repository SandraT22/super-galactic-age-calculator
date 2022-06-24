import LifeExpectancy from './../src/js/lifeExpectancy.js';

describe("LifeExpectancy", () => {
  let expectancy1;

  beforeEach(() => {
    expectancy1 = new LifeExpectancy("Small Town", "Active", "Healthy");
  })

  test("should check that constructor works properly", () => {
    expect(expectancy1.lifestyle).toEqual("Small Town");
    expect(expectancy1.activityLevel).toEqual("Active");
    expect(expectancy1.eatingHabits).toEqual("Healthy");   
  });

  test("should check that lifestyle choices alter the life expectancy", () => {
    expect(expectancy1.expectancyLifestyle).toEqual(100);   
  });
})