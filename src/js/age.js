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

  marsAge() {
    if (this.planet === "Mars") {
      let marsAge = this.age/1.88
      return parseInt(marsAge);
    }
  } 

  jupiterAge() {
    if (this.planet === "Jupiter") {
      let jupiterAge = this.age/11.86
      return parseInt(jupiterAge);
    }
  } 
}