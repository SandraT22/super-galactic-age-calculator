import YearsLeft from './../src/js/yearsLeft.js';

describe("LifeChoices", () => {
  let years1;


  beforeEach(() => {
    years1 = new YearsLeft("125", "416");
    
  })

  test("should subtract the planetary age and planetary life expectasncy and return the years that the user would have left to live on the planet", () => {
    expect(years1.planetaryLifeLeft()).toEqual(291);  
  });
});