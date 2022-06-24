export default class LifeChoices {
  constructor(lifestyle, activityLevel) {
    this.lifestyle = lifestyle;
    this.activityLevel = activityLevel;
  }
  lifeExpectancy() {
    let expectancy = 100;
    const smallTown = 0;
    const rural = 5;
    const city = 10;
    const active = 0;
    const someActive = 5;
    const notActive = 10;
    if (this.lifestyle === "Small Town") {
      expectancy -= smallTown;
    } else if (this.lifestyle === "Rural") {
      expectancy -= rural;
    } else if (this.lifestyle === "City") {
      expectancy -= city;
    }
    if (this.activityLevel === "Active") {
      expectancy -= active;
    } else if (this.activityLevel === "Sometimes Active") {
      expectancy -= someActive;
    } else if (this.activityLevel === "Not Active") {
      expectancy -= notActive;
    }
    return expectancy;
  }
}