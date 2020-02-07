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
  getMercuryLifeExpectancy(age, lifeExpectancy) {
    return Math.round((this.lifeExpectancy - this.age) / 0.24);
  }
  getVenusLifeExpectancy(age, lifeExpectancy) {
    return Math.round((this.lifeExpectancy - this.age) / 0.62);
  }
  getMarsLifeExpectancy(age, lifeExpectancy) {
    return Math.round((this.lifeExpectancy - this.age) /1.88);
  }
  getJupiterLifeExpectancy(age, lifeExpectancy) {
    // return Math.round((this.lifeExpectancy - this.age) /11.88);
  }
}