export default class YearsLeft {
  constructor(planetaryAge, planetaryExpectancy) {
    this.planetaryAge = planetaryAge;
    this.planetaryExpectancy = planetaryExpectancy;
  }
planetaryLifeLeft() {
  let yearsLeft = this.planetaryExpectancy - this.planetaryAge;
  return yearsLeft;
}
}