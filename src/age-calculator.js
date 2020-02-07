export class User {
  constructor(age){
    this.age = age;
  }
  getMercuryAge (){
    return this.age / 0.24;
  }
}