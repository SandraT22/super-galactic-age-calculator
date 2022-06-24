export default class LifeExpectancy {
  constructor(lifestyle) {
    this.lifestyle = lifestyle;
  }
  expectancyLifestyle() {
    if (this.lifestyle === "Small Town") {
      let expectancy = 100;
      return expectancy;
    }
  }
}