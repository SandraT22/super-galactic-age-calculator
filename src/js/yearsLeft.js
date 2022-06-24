export default class YearsLeft {
  constructor(planetaryAge, planetaryExpectancy) {
    this.planetaryAge = planetaryAge;
    this.planetaryExpectancy = planetaryExpectancy;
  }
planetaryLifeLeft() {
  let yearsLeft = this.planetaryAge - this.planetaryExpectancy;
  return yearsLeft;
}
}