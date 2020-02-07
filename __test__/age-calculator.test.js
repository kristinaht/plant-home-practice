import { User } from "./../src/age-calculator";

describe ("User", () => {
  test("should correctly create an user object with age and life expectancy paramether", () => {
    let user = new User(35, 90);
    expect(user.age).toEqual(35);
    expect(user.lifeExpectancy).toEqual(90);
  }); 
  test("should correctly calculate user age in Mercury years", () => {
    let newUser = new User(35);
    expect(newUser.getMercuryAge()).toEqual(146);
  });
  test("should correctly calculate user's age in Venus years", () => {
    let newUser = new User(35);
    expect(newUser.getVenusAge()).toEqual(56);
  });
  test("should correctly calculate user age in Mars years", () => {
    let newUser = new User(35);
    expect(newUser.getMarsAge()).toEqual(19);
  });
  test("should correctly calculate age in Jupiter years", () => {
    let newUser = new User(35);
    expect(newUser.getJupiterAge()).toEqual(3);
  });
  test("should correctly calculate life expectancy on Mercury", () => {
  let newUser = new User(35, 90);
      expect(newUser.getMercuryLifeExpectancy()).toEqual(229);
  });
   
});