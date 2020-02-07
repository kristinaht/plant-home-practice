export class User {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  getMercuryAge () {
    return Math.round(this.age / 0.24);
  }
  getVenusAge() {
    return Math.round(this.age / 0.62);
  }
  getMarsAge() {
    return Math.round(this.age / 1.88);
  }
  getJupiterAge() {
    return Math.round(this.age / 11.86);
  }
}