export default class Age {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  mercuryAge() {
    if (this.planet === "Mercury") {
      let mercuryAge = this.age/.24
      return parseInt(mercuryAge);
    }
  }

  venusAge() {
    if (this.planet === "Venus") {
      let venusAge = this.age/.62
      return parseInt(venusAge);
    }
  }

  
}