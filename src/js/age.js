export default class Age {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  mercuryAge() {
    if (this.planet === "Mercury") {
      let mercuryAge = this.age/.24
      return mercuryAge;
    }
  }
}