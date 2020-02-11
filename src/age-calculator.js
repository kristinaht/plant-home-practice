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
  getMercuryLifeExpectancy() {
    if(this.lifeExpectancy < this.age) {
      let exceeded = Math.round((this.age - this.lifeExpectancy)/0.24);
      return exceeded;
    }else{
      return Math.round((this.lifeExpectancy - this.age) / 0.24);
    }
  }
  getVenusLifeExpectancy() {
    let exceeded = Math.round((this.lifeExpectancy - this.age) / 0.62);
    if(exceeded < 0){
      return Math.abs(exceeded);
    }else{
      return exceeded;
    }
  }
  getMarsLifeExpectancy() {
    let exceeded = Math.round((this.lifeExpectancy - this.age) /1.88);
    if(exceeded < 0) {
      return Math.abs(exceeded);
    }else{
      return exceeded;
    }
  }
  getJupiterLifeExpectancy() {
    let exceeded = Math.round((this.lifeExpectancy - this.age) /11.86);
    if(exceeded < 0) {
      return Math.abs(exceeded);
    }else{
      return exceeded;
    }
  }
}