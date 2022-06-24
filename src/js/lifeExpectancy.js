export default class LifeChoices {
  constructor(lifestyle, activityLevel, eatingHabit, planet) {
    this.lifestyle = lifestyle;
    this.activityLevel = activityLevel;
    this.eatingHabit = eatingHabit;
    this.planet = planet;
  }
  lifeExpectancy() {
    let expectancy = 100;
    const smallTown = 0;
    const rural = 5;
    const city = 10;
    const active = 0;
    const someActive = 5;
    const notActive = 10;
    const healthy = 0;
    const someHealthy = 5;
    const notHealthy = 10;
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
    if (this.eatingHabit === "Healthy") {
      expectancy -= healthy;
    } else if (this.eatingHabit === "Sometimes Healthy") {
      expectancy -= someHealthy;
    } else if (this.eatingHabit === "Not Healthy") {
      expectancy -= notHealthy;
    }
    return expectancy;
}
planetaryExpectancy() {
  let planetary = 0;
  const mercuryExpectancy = this.lifeExpectancy()/.24;
  if (this.planet === "Mercury") {
    planetary += mercuryExpectancy;
  }
  return parseInt(planetary);
}
}