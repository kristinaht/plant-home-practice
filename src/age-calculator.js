export class User {
  constructor(age){
    this.age = age;
  }
  getMercuryAge (){
    return Math.round((this.age / 0.24));
  }
  getVenusAge(){
    return Math.round(this.age / 0.62);
  }

}