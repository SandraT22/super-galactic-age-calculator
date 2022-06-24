export default class LifeExpectancy {
  constructor(lifestyle) {
    this.lifestyle = lifestyle;
  }
  expectancyLifestyle() {
    const expectancy = 100;
    const smallTown = 0;
    const rural = 5;
    const city = 10;
    if (this.lifestyle === "Small Town") {
      return expectancy - smallTown;
    } else if (this.lifestyle === "Rural") {
      return expectancy - rural;
    } else if (this.lifestyle === "City") {
      return expectancy - city;
    }
  }
}