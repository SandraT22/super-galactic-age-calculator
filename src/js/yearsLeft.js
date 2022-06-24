export default class YearsLeft {
  constructor(planetaryAge, planetaryExpectancy) {
    this.planetaryAge = planetaryAge;
    this.planetaryExpectancy = planetaryExpectancy;
  }
planetaryLifeLeft() {
  let yearsLeft = this.planetaryExpectancy - this.planetaryAge;
 return yearsLeft;
} 
overage() {
  let yearsOver = 0;
  if (this.planetaryAge >= this.planetaryExpectancy) {
    yearsOver += this.planetaryAge - this.planetaryExpectancy;
    return yearsOver;
  } else {
    return "You have years left!"
  }
}
}