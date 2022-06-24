export default class LifeExpectancy {
  constructor(lifestyle) {
    this.lifestyle = lifestyle;
  }
  expectancyLifestyle() {
    let expectancy = 100;
    let smallTown = 0;
    let rural = 5;
    let city = 10;
    if (this.lifestyle === "Small Town") {
      return expectancy;
    } else if (this.lifestyle === "Rural") {
      return expectancy - rural;
    } else if (this.lifestyle === "City") {
      return expectancy - city;
    }
  }
}