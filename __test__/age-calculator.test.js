import { User } from "./../src/age-calculator";

describe ("User", () => {
  test("should correctly create an user object with age paramether", () => {
    let user = new User(35);
    expect(user.age).toEqual(35);
  }); 
  test("should correctly calculate user age in Mercury years", () => {
    let newUser = new User(35);
    expect(newUser.getMercuryAge()).toEqual(146);
  });
  test("should correctly calculate user's age in Venus years", () =>{
    let newUser = new User(35);
    expect(newUser.getVenusAge()).toEqual(56);
  })
});