import Age from './../src/js/age.js';
export default class LifeChoices {
  constructor(lifestyle, activityLevel, eatingHabit, agePlanet) {
    this.lifestyle = lifestyle;
    this.activityLevel = activityLevel;
    this.eatingHabit = eatingHabit;
    this.agePlanet = agePlanet;
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
    const venusExpectancy = this.lifeExpectancy()/.62;
    const marsExpectancy = this.lifeExpectancy()/1.88;
    const jupiterExpectancy = this.lifeExpectancy()/11.86;
    if (this.agePlanet === "Mercury") {
      planetary += mercuryExpectancy;
    } else if (this.agePlanet === "Venus") {
      planetary += venusExpectancy;
    } else if (this.agePlanet === "Mars") {
      planetary += marsExpectancy;
    } else if (this.agePlanet === "Jupiter") {
      planetary += jupiterExpectancy;
    }
    return parseInt(planetary);
  }
planetaryLifeLeft() {
  let lifeLeft = 0;
  let age = new Age();
  let planetaryAge = age.planetaryAge();
  if (this.agePlanet === "Mercury"){
    return planetaryAge;
  }
}
}