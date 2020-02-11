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
  test("should correctly calculate life expectancy on Venus", () => {
    let newUser = new User(35, 90);
    expect(newUser.getVenusLifeExpectancy()).toEqual(89);
  });
  test("should correctly calculate life expectancy on Mars", () => {
    let newUser = new User(35, 90);
    expect(newUser.getMarsLifeExpectancy()).toEqual(29);
  });
  test("should correctly calculate life expectancy on Jupiter", () => {
    let newUser = new User(35, 90);
    expect(newUser.getJupiterLifeExpectancy()).toEqual(5);
  });
  test("should correctly calculate how many years passed the inputted life expectancy the user has lived in Mercury years", () => {
    let newUser = new User(100, 90);
    expect(newUser.getMercuryLifeExpectancy()).toEqual(42);
  });
  test("should correctly calculate how many years passed the inputted life expectancy the user has lived in Venus years", () => {
    let newUser = new User(100, 90);
    expect(newUser.getVenusLifeExpectancy()).toEqual(16);
  });
  test("should correctly calculate how many years passed inputted life expectancy user has lived in Mars years", () => {
    let newUser = new User(100, 90);
    expect(newUser.getMarsLifeExpectancy()).toEqual(5);
  });
  test("should correctly calculate how many years passed inputted life expectancy user has lived in Jupiter years", () => {
    let newUser = new User(100, 90);
    expect(newUser.getJupiterLifeExpectancy()).toEqual(1);
  });
});