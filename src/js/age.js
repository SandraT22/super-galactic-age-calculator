export default class Age {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }
  planetaryAge() {
    if (this.planet === "Mercury") {
      let mercuryAge = this.age/.24
      return parseInt(mercuryAge);
    } else  if (this.planet === "Venus") {
      let venusAge = this.age/.62
      return parseInt(venusAge);
    } else if (this.planet === "Mars") {
      let marsAge = this.age/1.88
      return parseInt(marsAge);
    } else if (this.planet === "Jupiter") {
      let jupiterAge = this.age/11.86
      return parseInt(jupiterAge);
    } else {
      return "Please choose a planet"
    }
  }
};