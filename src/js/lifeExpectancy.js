export default class LifeExpectancy {
  constructor(lifestyle, activityLevel, eatingHabits) {
    this.lifestyle = lifestyle;
    this.activityLevel = activityLevel;
    this.eatingHabits = eatingHabits;
  }
  expectancyLifestyle() {
    let expectancy = 100;
    let smallTown = 0;
    let rural = 5;
    let city = 10;
    if (this.lifestyle === "Small Town") {
      return expectancy + smallTown;
    } else if (this.lifestyle === "Rural") {
      return expectancy - rural;
    } else if (this.lifestyle === "City") {
      return expectancy - city;
    }
  }
}