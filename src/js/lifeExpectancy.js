export default class LifeExpectancy {
  constructor(lifestyle, activityLevel, eatingHabits) {
    this.lifestyle = lifestyle;
    this.activityLevel = activityLevel;
    this.eatingHabits = eatingHabits;
  }
  lifestyle () {
    let expectancyLifestyle = 100;
    let smallTown = 0;
    let rural = 5;
    let city = 10;
    if (this.lifestyle === "Small Town") {
      return expectancyLifestyle + smallTown;
    } else if (this.lifestyle === "Rural") {
      return expectancyLifestyle - rural;
    } else if (this.lifestyle === "City") {
      return expectancyLifestyle - city;
    }
  }
}