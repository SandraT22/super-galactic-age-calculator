export default class YearsLeft {
  constructor(planetaryAge, planetaryExpectancy) {
    this.planetaryAge = planetaryAge;
    this.planetaryExpectancy = planetaryExpectancy;
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